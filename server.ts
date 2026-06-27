/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 3000;
const LEADS_FILE = path.join(process.cwd(), "leads.json");

// Helper to send email notification to the portfolio owner (Jinsiya)
async function sendEmailNotification(name: string, email: string, message: string, recordId: string) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("[Email Notification] SMTP_USER and SMTP_PASS are not configured. Saved in leads.json database.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const mailOptions = {
    from: `"${name}" <${user}>`,
    replyTo: email,
    to: "jinsiyajinnu@gmail.com",
    subject: `Portfolio Inquiry from ${name}`,
    text: `Hi Jinsiya,\n\nYou received a new inquiry from your portfolio:\n\nSender: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nInquiry ID: ${recordId}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #346739; padding: 24px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">New Portfolio Inquiry</h2>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 16px;"><strong>Sender Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #346739; text-decoration: underline;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f9f9f9; padding: 16px; border-left: 4px solid #346739; border-radius: 4px; font-style: italic;">
            "${message.replace(/\n/g, "<br>")}"
          </div>
        </div>
        <div style="background-color: #f1f5f1; padding: 16px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0;">Inquiry ID: <strong>${recordId}</strong> | Portfolio Automated Delivery</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email Notification] Email sent successfully to jinsiyajinnu@gmail.com`);
    return true;
  } catch (err) {
    console.error("[Email Notification] Failed to send email via SMTP:", err);
    return false;
  }
}

// Parse JSON requests
app.use(express.json());

// Helper to read leads from our server database
function readLeads(): any[] {
  try {
    if (!fs.existsSync(LEADS_FILE)) {
      // Seed with initial entries for demonstration
      const initial = [
        {
          id: "TX-784912",
          name: "Emily Vance",
          email: "emily.v@ai-innovations.com",
          message: "Excellent portfolio! I would love to discuss a prospective lead development project using TypeScript, Google Workspace integrations, and modern AI pipelines.",
          timestamp: new Date(Date.now() - 3600000 * 24).toISOString()
        },
        {
          id: "TX-340918",
          name: "Marcus Aurelius",
          email: "marcus@hightech.io",
          message: "Are you open to full-time remote consulting for developer tools and workflow automation?",
          timestamp: new Date(Date.now() - 3600000 * 5).toISOString()
        }
      ];
      fs.writeFileSync(LEADS_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    const data = fs.readFileSync(LEADS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading backend spreadsheet:", err);
    return [];
  }
}

// Helper to write leads to our server database
function writeLeads(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to backend spreadsheet:", err);
  }
}

// API: Handle inbound lead transmissions
app.post("/api/submit-lead", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All contact credentials are required." });
  }

  const newId = `TX-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();
  const entry = {
    id: newId,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    timestamp
  };

  // Append lead to our secure backend database file
  const currentLeads = readLeads();
  currentLeads.unshift(entry);
  writeLeads(currentLeads);

  // Send direct email to jinsiyajinnu@gmail.com
  const emailSent = await sendEmailNotification(name.trim(), email.trim(), message.trim(), newId);

  // Optional: Forward to Google Sheets Webhook URL if defined (e.g. Google Apps Script)
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      console.log("Forwarding response to external Google Sheets Webhook:", webhookUrl);
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry)
      });
    } catch (err) {
      console.error("Failed to post to external sheets webhook:", err);
    }
  }

  return res.json({
    status: "success",
    id: newId,
    timestamp,
    emailSent
  });
});

// API: View all leads inside the standalone secure backend endpoint (json)
app.get("/api/leads", (req, res) => {
  const leads = readLeads();
  res.json(leads);
});

// API: Export database directly to downloadable .csv format outside of the portfolio
app.get("/api/leads/csv", (req, res) => {
  const leads = readLeads();
  const headers = ["ID", "Timestamp (UTC)", "Sender Name", "Email Coordinates", "Message Payload"];
  
  const rows = leads.map(tx => [
    tx.id,
    new Date(tx.timestamp).toISOString(),
    tx.name.replace(/"/g, '""'),
    tx.email.replace(/"/g, '""'),
    tx.message.replace(/"/g, '""')
  ]);
  
  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
  ].join("\n");

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", `attachment; filename=contact_spreadsheet_records_${new Date().toISOString().split("T")[0]}.csv`);
  res.status(200).send(csvContent);
});

// Serve frontend SPA through Vite middleware in Dev, Static serve in Production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Backend Server] Operational at http://0.0.0.0:${PORT}`);
    console.log(`[Spreadsheet Leads API] Read/Write listening at /api/leads`);
  });
}

startServer();
