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
      const primaryGuest = Array.isArray(formData.guestDetails)
        ? formData.guestDetails[0] || {}
        : {};
      const submitterName = guestNames[0] || formData.email || "Unknown";

      const attendingValue = formData.attending ? "Yes" : "No"; // Adjust based on your Google Form options

      const dietaryValue = formData.attending
        ? (formData.dietary && String(formData.dietary).trim()) ||
          (primaryGuest.info && String(primaryGuest.info).trim()) ||
          "None"
        : "";

      const alcoholValue = formData.attending
        ? primaryGuest.drinkPreference === "alcohol"
          ? "Alcohol"
          : primaryGuest.drinkPreference === "nonAlcohol"
            ? "Non-alcohol"
            : ""
        : "";

      const fridayDinnerValue =
        formData.attending && formData.dayBeforeDinner !== null
          ? formData.dayBeforeDinner
            ? "Yes"
            : "No"
          : "";

      const submissionByField = {
        email: formData.email || "",
        name: submitterName,
        attending: attendingValue,
        dietary: dietaryValue,
        alcohol: alcoholValue,
        fridayDinner: fridayDinnerValue,
        message: formData.message || "",
      };

      // Always use all configured field IDs so config changes are applied consistently.
      Object.entries(GOOGLE_FORM_CONFIG.fieldIds).forEach(([key, entryId]) => {
        params.append(entryId, submissionByField[key] ?? "");
      });

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
