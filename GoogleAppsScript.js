/**
 * GOOGLE APPS SCRIPT FOR PERALTA STRATEGY FORM
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete the default code and paste this entire file
 * 4. Click "Deploy" > "New deployment"
 * 5. Choose "Web app" as the deployment type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the Web App URL
 * 10. Paste it into your HTML form where it says 'YOUR_GOOGLE_SCRIPT_URL_HERE'
 */

function doPost(e) {
  try {
    // Get the active spreadsheet or create a new one
    const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create('Peralta Strategy Form Responses');
    let sheet = ss.getSheetByName('Responses');

    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet('Responses');

      // Add headers
      const headers = [
        'Timestamp',
        'Primary Audience',
        'Why This Audience',
        'Secondary Audience',
        'Client Pain Point Quotes',
        'Triggers to Start Looking',
        'Primary Emotion',
        'Top 3 Objections',
        'Past Skepticism Experiences',
        'Trust Builders',
        'Discovery Channel',
        'Stage When Landing',
        'Alternatives Considered',
        'Main Competitor',
        'Client Dislikes About Alternatives',
        'Core Differentiator',
        'Why Difference Matters',
        'Evidence Clients Value This',
        'Most Mentioned Pillar',
        'Pillar Addressing Fear',
        'AI vs Expert Emphasis',
        'AI vs Expert Explanation',
        'Top 4-6 Client Logos',
        'Why These Logos',
        'Logos That Hurt Credibility',
        'Better Metrics Than 500+ Projects',
        'Impressive Metric',
        'Time-Saving Metrics',
        'Powerful Testimonials',
        'Testimonials Addressing Objections',
        'Permission to Use Names',
        'Concrete Impact Example',
        'Before/After Transformation',
        'Confidentiality Constraints',
        'Headline Clarity Test',
        'Problem vs Solution Lead',
        'Hero Emotional Response',
        'Africa-First Prominence',
        'Problem Section Match',
        'Most Resonant Pain Point',
        'Emotion vs Logic Lead',
        'Problem Section Length',
        'Service Most Inbound Demand',
        'Service Highest Value',
        'Services Ordering Approach',
        'Do Clients Know Which Service',
        'Current Tone Feedback',
        'Aspirational vs Practical Tone',
        'Africa Messaging Prominence',
        'Primary Conversion Action',
        'Next Steps After Action',
        'Target Conversion Rate',
        'CTA Copy Feedback',
        'Low-Commitment Option',
        'CTA Barriers',
        'Talent Prominence',
        'Talent CTA Location',
        'Existing Brand Guidelines',
        'Visual Inspiration Brands',
        'Resonant Site Aspects',
        'Enterprise vs Startup Feel',
        'How to Represent AI',
        'Photography vs Illustrations',
        'African vs Global Design',
        'Additional Context'
      ];

      sheet.appendRow(headers);

      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#000000');
      headerRange.setFontColor('#FFFFFF');

      // Freeze header row
      sheet.setFrozenRows(1);

      // Auto-resize columns
      for (let i = 1; i <= headers.length; i++) {
        sheet.autoResizeColumn(i);
      }
    }

    // Parse the form data
    const params = e.parameter;

    // Build the row data
    const rowData = [
      new Date(), // Timestamp
      params.q1_1 || '',
      params.q1_2 || '',
      params.q1_3 || '',
      params.q1_4 || '',
      params.q1_5 || '',
      params.q1_6 || '',
      params.q1_7 || '',
      params.q1_8 || '',
      params.q1_9 || '',
      params.q1_10 || '',
      params.q1_11 || '',
      params.q2_1 || '',
      params.q2_2 || '',
      params.q2_3 || '',
      params.q2_4 || '',
      params.q2_5 || '',
      params.q2_6 || '',
      params.q2_7 || '',
      params.q2_8 || '',
      params.q2_9 || '',
      params.q2_9_explanation || '',
      params.q3_1 || '',
      params.q3_2 || '',
      params.q3_3 || '',
      params.q3_4 || '',
      params.q3_5 || '',
      params.q3_6 || '',
      params.q3_7 || '',
      params.q3_8 || '',
      params.q3_9 || '',
      params.q3_10 || '',
      params.q3_11 || '',
      params.q3_12 || '',
      params.q4_1 || '',
      params.q4_2 || '',
      params.q4_3 || '',
      params.q4_4 || '',
      params.q4_5 || '',
      params.q4_6 || '',
      params.q4_7 || '',
      params.q4_8 || '',
      params.q4_9 || '',
      params.q4_10 || '',
      params.q4_11 || '',
      params.q4_12 || '',
      params.q4_13 || '',
      params.q4_14 || '',
      params.q4_15 || '',
      params.q5_1 || '',
      params.q5_2 || '',
      params.q5_3 || '',
      params.q5_4 || '',
      params.q5_5 || '',
      params.q5_6 || '',
      params.q5_7 || '',
      params.q5_8 || '',
      params.q6_1 || '',
      params.q6_2 || '',
      params.q6_3 || '',
      params.q6_4 || '',
      params.q6_5 || '',
      params.q6_6 || '',
      params.q6_7 || '',
      params.final_notes || ''
    ];

    // Append the row
    sheet.appendRow(rowData);

    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Form submitted successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// For testing purposes
function doGet(e) {
  return ContentService.createTextOutput('Form handler is working! Use POST to submit data.');
}
