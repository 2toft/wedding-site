import { ref } from "vue";
import { GOOGLE_FORM_CONFIG } from "../config/googleForm";

export function useRsvpForm() {
  const loading = ref(false);
  const error = ref(null);
  const success = ref(false);

  const submitToGoogleForm = async (formData) => {
    loading.value = true;
    error.value = null;
    success.value = false;

    try {
      // Create URLSearchParams object
      const params = new URLSearchParams();

      const guestNames = Array.isArray(formData.guestDetails)
        ? formData.guestDetails
            .map((guest) => guest.name?.trim())
            .filter(Boolean)
        : [];
      const submitterName = guestNames[0] || formData.email || "Unknown";

      // Map form data to Google Form entry IDs
      params.append(GOOGLE_FORM_CONFIG.fieldIds.name, submitterName);
      params.append(GOOGLE_FORM_CONFIG.fieldIds.email, formData.email);

      // Handle boolean/radio values
      const attendingValue = formData.attending ? "Yes" : "No"; // Adjust based on your Google Form options
      params.append(GOOGLE_FORM_CONFIG.fieldIds.attending, attendingValue);

      if (formData.attending) {
        params.append(GOOGLE_FORM_CONFIG.fieldIds.guests, formData.guests);
      }

      let message = formData.message || "";
      if (formData.attending && Array.isArray(formData.guestDetails)) {
        const details = formData.guestDetails
          .map((guest, index) => {
            const name = guest.name?.trim() || `Guest ${index + 1}`;
            const info = guest.info?.trim() || "No additional info";
            const drinkPreferenceLabel =
              guest.drinkPreference === "alcohol"
                ? "Alcohol"
                : guest.drinkPreference === "nonAlcohol"
                  ? "Non-alcohol"
                  : "Not specified";
            return `${name} (${drinkPreferenceLabel}): ${info}`;
          })
          .join("\n");

        if (details) {
          message = message
            ? `${message}\n\nGuest details:\n${details}`
            : `Guest details:\n${details}`;
        }
      }

      params.append(GOOGLE_FORM_CONFIG.fieldIds.message, message);

      // Send request
      // mode: 'no-cors' is required for Google Forms
      // This means we won't get a readable response, but the submission will work
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      // Since we can't read the response in no-cors mode, we assume success if no network error occurred
      success.value = true;
    } catch (err) {
      console.error("RSVP Submission Error:", err);
      error.value = err.message || "Failed to submit RSVP";
    } finally {
      loading.value = false;
    }
  };

  const resetForm = () => {
    success.value = false;
    error.value = null;
  };

  return {
    loading,
    error,
    success,
    submitToGoogleForm,
    resetForm,
  };
}
