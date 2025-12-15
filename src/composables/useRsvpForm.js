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

      // Map form data to Google Form entry IDs
      params.append(GOOGLE_FORM_CONFIG.fieldIds.name, formData.name);
      params.append(GOOGLE_FORM_CONFIG.fieldIds.email, formData.email);

      // Handle boolean/radio values
      const attendingValue = formData.attending ? "Yes" : "No"; // Adjust based on your Google Form options
      params.append(GOOGLE_FORM_CONFIG.fieldIds.attending, attendingValue);

      if (formData.attending) {
        params.append(GOOGLE_FORM_CONFIG.fieldIds.guests, formData.guests);
        params.append(
          GOOGLE_FORM_CONFIG.fieldIds.dietary,
          formData.dietary || ""
        );
      }

      params.append(
        GOOGLE_FORM_CONFIG.fieldIds.message,
        formData.message || ""
      );

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
