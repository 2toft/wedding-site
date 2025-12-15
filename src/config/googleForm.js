// Google Form Configuration
// Replace these values with your actual Google Form details
// To find these IDs:
// 1. Create a Google Form
// 2. Click "Get pre-filled link"
// 3. Fill in dummy data and click "Get link"
// 4. Copy the link and look for 'entry.XXXXXX' parameters

export const GOOGLE_FORM_CONFIG = {
  // The URL that ends with /formResponse
  actionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSds2FLYNaaJkW_OUHx9RqO0XB410WEVcFfbuRCeNDZAlC7jbA/formResponse",

  // Field IDs mapping
  fieldIds: {
    name: "entry.1331868431",
    email: "entry.882461547",
    attending: "entry.1936133947", // Should match the options in the form (e.g., "Yes", "No")
    guests: "entry.1720352075",
    dietary: "entry.234934707",
    message: "entry.684182530",
  },
};
