# Peralta Strategy Form - Hosting & Data Collection Setup

This guide will help you host your form and collect responses automatically in Google Sheets.

---

## 🎯 Quick Overview

Your form is now ready to:
1. **Host anywhere** (GitHub Pages, Netlify, Vercel, or any web host)
2. **Collect data** automatically in Google Sheets
3. **Fallback** to downloadable text file if Google Sheets fails

---

## 📊 STEP 1: Set Up Google Sheets Data Collection

### 1.1 Create the Google Apps Script

1. Go to **https://script.google.com**
2. Click **"New Project"**
3. Delete all the default code
4. Open the file `GoogleAppsScript.js` (in this same folder)
5. Copy ALL the code from that file
6. Paste it into Google Apps Script
7. Click the **disk icon** or press `Ctrl+S` (Mac: `Cmd+S`) to save
8. Give your project a name like "Peralta Form Handler"

### 1.2 Deploy as Web App

1. In Google Apps Script, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure settings:
   - **Description**: "Peralta Strategy Form Handler"
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone"
5. Click **"Deploy"**
6. Click **"Authorize access"** and grant permissions
7. **COPY THE WEB APP URL** (it looks like: `https://script.google.com/macros/s/AKfy...../exec`)

### 1.3 Update Your HTML Form

1. Open `Peralta_Strategy_Form.html`
2. Find line 724 that says: `const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';`
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied URL
4. Example:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw.../exec';
   ```
5. Save the file

### 1.4 Test It

1. Open your HTML form locally (double-click the file)
2. Fill out a test submission
3. Click Submit
4. Go back to Google Apps Script
5. Click **"Execution log"** to see if it worked
6. Check your Google Drive - a new spreadsheet called "Peralta Strategy Form Responses" should appear!

---

## 🌐 STEP 2: Host Your Form Online

### Option A: GitHub Pages (Easiest, Free)

1. Create a GitHub account (if you don't have one): https://github.com
2. Create a new repository (name it "peralta-form")
3. Upload `Peralta_Strategy_Form.html`
4. Go to repository Settings → Pages
5. Under "Source", select "main" branch
6. Click Save
7. Your form will be live at: `https://yourusername.github.io/peralta-form/Peralta_Strategy_Form.html`

**Share this URL with your clients!**

---

### Option B: Netlify (Drag & Drop, Free)

1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop your `Peralta_Strategy_Form.html` file onto the Netlify dashboard
4. Netlify will give you a URL like: `https://random-name-123.netlify.app`
5. You can customize this URL in Settings

**Share this URL with your clients!**

---

### Option C: Vercel (Free)

1. Go to https://vercel.com
2. Sign up for a free account
3. Click "Add New Project"
4. Upload your HTML file
5. Deploy
6. Get your live URL

---

## 📋 What Happens When Someone Submits?

1. **Form is submitted** → Data is sent to your Google Apps Script
2. **Google Apps Script receives data** → Writes it to a Google Sheet
3. **Success!** → User sees a success message
4. **If Google fails** → Form automatically downloads a backup text file

---

## 🔍 Viewing Your Responses

1. Go to **https://drive.google.com**
2. Find the spreadsheet: **"Peralta Strategy Form Responses"**
3. All submissions appear as new rows with timestamps
4. You can:
   - Export to Excel
   - Share with team members
   - Create charts/reports
   - Filter and sort responses

---

## 🎨 Customization (Optional)

### Change the spreadsheet name:
In `GoogleAppsScript.js`, line 18:
```javascript
SpreadsheetApp.create('Your Custom Name Here');
```

### Send email notifications on submission:
Add this to the end of `doPost()` function in `GoogleAppsScript.js`:
```javascript
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Peralta Form Submission',
  body: 'A new response has been submitted. Check your Google Sheet!'
});
```

---

## 🛠️ Troubleshooting

### "Error submitting responses"
- Check that your Google Apps Script URL is correct in the HTML file
- Make sure you set "Who has access" to "Anyone" when deploying
- Check the Execution Log in Google Apps Script for errors

### Form downloads instead of submitting
- This means the Google Script URL is not configured
- Update line 724 in the HTML file with your actual script URL

### Responses not appearing in Google Sheets
- Check Google Apps Script execution log for errors
- Verify the script has permission to create/write to spreadsheets
- Make sure you're logged into the correct Google account

---

## 🔒 Security & Privacy

- All data goes directly to YOUR Google account
- No third-party services have access
- You can password-protect the form by adding authentication
- Google Sheets data is private to you (unless you share it)

---

## ✅ Checklist

- [ ] Google Apps Script created and deployed
- [ ] Web App URL copied
- [ ] HTML form updated with script URL
- [ ] Form tested locally
- [ ] Form hosted online (GitHub Pages/Netlify/Vercel)
- [ ] Share URL sent to clients
- [ ] Verified responses appear in Google Sheets

---

## 📞 Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Check Google Apps Script execution logs
3. Test with a simple submission first
4. Verify all permissions are granted

---

**Your form is ready to collect professional strategy insights! 🚀**
