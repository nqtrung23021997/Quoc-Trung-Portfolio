/**
 * Google Apps Script for Andy Trung Nguyen's Portfolio Contact Form
 * Automatically logs website contact inquiries directly into Google Sheets.
 * 
 * Instructions:
 * 1. Open Google Sheets -> Create a new spreadsheet (e.g. "Portfolio_Inquiries_TrungNguyen")
 * 2. Set Row 1 headers:
 *    [A1: Timestamp, B1: Full Name, C1: Phone, D1: Email, E1: Service / Topic, F1: Message, G1: Status]
 * 3. In the menu, go to: Extensions -> Apps Script
 * 4. Paste this code into Code.gs
 * 5. Click "Deploy" -> "New deployment"
 * 6. Select type: "Web app"
 *    - Description: "Portfolio Contact Form Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (allows website visitor submissions)
 * 7. Click "Deploy" and copy the "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 8. Paste that URL into assets/js/main.js at `CONFIG.GOOGLE_SHEET_WEBHOOK_URL`.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse incoming data (supports both JSON body and form-urlencoded)
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    var timestamp = new Date();
    var fullName = data.fullName || data.name || "N/A";
    var phone = data.phone || "N/A";
    var email = data.email || "N/A";
    var service = data.service || data.inquiryType || "General Inquiry";
    var message = data.message || "N/A";
    var status = "New / Unread";

    // Append to Google Sheet
    sheet.appendRow([
      timestamp,
      fullName,
      phone,
      email,
      service,
      message,
      status
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    // Optional: Send instant email notification to Trung
    try {
      var recipient = "nqtrung23021997@gmail.com";
      var subject = "[Portfolio Lead] New inquiry from " + fullName;
      var body = "You have received a new inquiry on your portfolio website:\n\n" +
                 "Full Name: " + fullName + "\n" +
                 "Phone: " + phone + "\n" +
                 "Email: " + email + "\n" +
                 "Topic / Service: " + service + "\n\n" +
                 "Message:\n" + message + "\n\n" +
                 "Received at: " + timestamp.toString();
      MailApp.sendEmail(recipient, subject, body);
    } catch (mailErr) {
      Logger.log("Email notification skipped: " + mailErr);
    }

    // Return CORS JSON response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "Inquiry saved successfully",
        row: lastRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      service: "Andy Trung Nguyen Portfolio Webhook",
      timestamp: new Date()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
