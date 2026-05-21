# RSVP confirmation email setup (Google Forms + Apps Script)

This project submits RSVP answers directly to Google Forms.
To send an automatic confirmation email, attach Apps Script to the form response spreadsheet.

## 1. Open the response spreadsheet

1. Open your Google Form
2. Go to Responses
3. Click the green Sheets icon to open the linked spreadsheet

## 2. Add the script

1. In the spreadsheet: Extensions -> Apps Script
2. Create a script file and paste:
   - google-apps-script/confirmation-email.gs
3. Save

## 3. Add trigger

1. In Apps Script: Triggers (clock icon)
2. Add Trigger
3. Function: onFormSubmit
4. Event source: From spreadsheet
5. Event type: On form submit
6. Save and grant permissions

## 4. Verify question labels (important)

The script reads by question title using fallback aliases.
Check that your Google Form question titles match one of these:

- E-postadress / Email Address / Email
- Fullständigt namn / Full Name / Name
- Kommer du? / Will you be attending?
- Vill du vara med? / Would you like to join?

If your labels differ, update the key arrays in:

- firstValue(...) calls inside onFormSubmit

## 5. Test

1. Submit one RSVP through your website
2. Confirm an email arrives
3. If no email arrives, open Apps Script -> Executions and inspect errors/logs

## Notes

- Emails are sent from the Google account that owns the Apps Script
- Daily sending limits apply for Gmail/Google Workspace
- You can edit subject/body in buildSwedishEmail(...)
