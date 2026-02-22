const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Brevo = require('@getbrevo/brevo');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware with allowed origins for CORS
app.use(cors({
  origin: (origin, cb) => {
    const allowed = [
      'http://localhost:8080',
      'http://localhost:5173',
      'https://www.goldfitnessrepair.ca',
      'https://goldfitnessrepair.ca',
      process.env.FRONTEND_URL
    ].filter(Boolean);
    if (!origin || allowed.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());

// Configure Brevo API client with API Key from .env
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

// Test connection on startup (optional)
(async () => {
  try {
    await apiInstance.getSmtpTemplates();
    console.log('✅ Brevo API connected successfully');
  }catch (error) {
  console.error('❌ Error sending email via Brevo:', error.response?.data || error);
  res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
}

})();

// Email sending route
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address' });
  }

  // Compose HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 4px; }
          .label { font-weight: bold; color: #555; }
          .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 1px solid #ddd; }
          .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🏋️ Gold Fitness</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          <div class="content">
            <div class="info-row"><span class="label">👤 Name:</span> ${name}</div>
            <div class="info-row">
              <span class="label">📧 Email:</span> 
              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
            </div>
            <div class="info-row"><span class="label">📱 Phone:</span> ${phone || 'Not provided'}</div>
            <div class="message-box">
              <p class="label" style="margin-top: 0;">💬 Message:</p>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div class="footer">
              <p>This email was sent from your Gold Fitness Connect website contact form.</p>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' })} EST</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  // Create SendSmtpEmail and set properties individually to fix sender missing error
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.sender = { email: process.env.SENDER_EMAIL, name: 'Gold Fitness Website' };
  sendSmtpEmail.to = [{ email: process.env.RECIPIENT_EMAIL }];
  sendSmtpEmail.replyTo = { email: email, name: name };
  sendSmtpEmail.subject = `🏋️ New Contact Form - ${name}`;
  sendSmtpEmail.htmlContent = htmlContent;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(`✅ Email sent successfully from ${email}`);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email via Brevo:', error.response?.data || error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});


// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Gold Fitness Connect API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📧 Ready to send emails via Brevo`);
});
