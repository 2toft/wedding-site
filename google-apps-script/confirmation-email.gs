const WEDDING_NAME = "Johan & Micaela";
const RSVP_DEADLINE = "30 juni 2026";

/**
 * Triggered on each Google Form submission.
 *
 * Setup:
 * 1) Open the response spreadsheet connected to your Google Form
 * 2) Extensions -> Apps Script
 * 3) Paste this file and save
 * 4) Triggers -> Add trigger -> onFormSubmit -> Event source: From spreadsheet -> Event type: On form submit
 */
function onFormSubmit(e) {
  if (!e || !e.namedValues) return;

  const namedValues = e.namedValues;

  const email = firstValue(namedValues, [
    "E-postadress",
    "Email Address",
    "Email",
  ]);

  if (!email) return;

  const guestName =
    firstValue(namedValues, ["Fullständigt namn", "Full Name", "Name"]) ||
    "gäst";

  const attendingRaw = firstValue(namedValues, [
    "Kommer du?",
    "Will you be attending?",
  ]);

  const dayBeforeRaw = firstValue(namedValues, [
    "Dagen före - 18 september",
    "The day before - September 18",
    "Vill du vara med?",
    "Would you like to join?",
  ]);

  const dayBeforeFallbackRaw =
    dayBeforeRaw ||
    firstValueByKeyFragments(namedValues, [
      ["dagen fore", "18 september"],
      ["day before", "september 18"],
      ["vill du vara med"],
      ["would you like to join"],
      ["friday", "dinner"],
    ]);

  const attending = normalizeYesNo(attendingRaw);
  const dayBefore = normalizeYesNo(dayBeforeFallbackRaw);

  const subject = `Bekr\u00e4ftelse p\u00e5 OSA - ${WEDDING_NAME}`;
  const body = buildSwedishEmail({
    guestName,
    attending,
    dayBefore,
  });

  MailApp.sendEmail({
    to: email,
    subject,
    body,
  });
}

function buildSwedishEmail({ guestName, attending, dayBefore }) {
  const attendingLine =
    attending === "yes"
      ? "Ni har angett att ni kommer p\u00e5 br\u00f6llopet."
      : attending === "no"
        ? "Ni har angett att ni tyv\u00e4rr inte kan komma p\u00e5 br\u00f6llopet."
        : "Vi kunde inte tolka ert svar p\u00e5 fr\u00e5gan om deltagande.";

  const dayBeforeLine =
    dayBefore === "yes"
      ? "Ni har anm\u00e4lt intresse f\u00f6r middagen dagen f\u00f6re (18 september)."
      : dayBefore === "no"
        ? "Ni har angett att ni inte deltar i middagen dagen f\u00f6re."
        : "";

  return [
    `Hej ${guestName}!`,
    "",
    "Tack f\u00f6r er OSA. Vi har tagit emot ert svar.",
    "",
    attendingLine,
    dayBeforeLine,
    "",
    "Om n\u00e5got beh\u00f6ver \u00e4ndras, h\u00f6r av er till oss innan " +
      RSVP_DEADLINE +
      ".",
    "",
    "Varma h\u00e4lsningar,",
    WEDDING_NAME,
  ]
    .filter(Boolean)
    .join("\n");
}

function firstValue(namedValues, keys) {
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(namedValues, key)) {
      const arr = namedValues[key];
      if (Array.isArray(arr) && arr.length > 0 && arr[0])
        return String(arr[0]).trim();
    }
  }
  return "";
}

function normalizeYesNo(value) {
  if (!value) return "unknown";

  const normalized = normalizeText(String(value));

  if (
    normalized === "ja" ||
    normalized.startsWith("ja ") ||
    normalized.startsWith("ja,") ||
    normalized === "yes" ||
    normalized.startsWith("yes ") ||
    normalized.startsWith("yes,")
  ) {
    return "yes";
  }

  if (
    normalized === "nej" ||
    normalized.startsWith("nej ") ||
    normalized.startsWith("nej,") ||
    normalized === "no" ||
    normalized.startsWith("no ") ||
    normalized.startsWith("no,")
  ) {
    return "no";
  }

  return "unknown";
}

function firstValueByKeyFragments(namedValues, fragmentGroups) {
  const keys = Object.keys(namedValues || {});

  for (const key of keys) {
    const normalizedKey = normalizeText(key);
    for (const group of fragmentGroups) {
      const allFragmentsMatch = group.every((fragment) =>
        normalizedKey.includes(normalizeText(fragment)),
      );

      if (!allFragmentsMatch) continue;

      const arr = namedValues[key];
      if (Array.isArray(arr) && arr.length > 0 && arr[0]) {
        return String(arr[0]).trim();
      }
    }
  }

  return "";
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Optional helper for quick manual testing in Apps Script editor.
 */
function testOnFormSubmit() {
  const fakeEvent = {
    namedValues: {
      "E-postadress": ["test@example.com"],
      "Fullständigt namn": ["Testperson"],
      "Kommer du?": ["Ja"],
      "Vill du vara med?": ["Ja"],
    },
  };

  onFormSubmit(fakeEvent);
}
