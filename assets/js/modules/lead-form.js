/* ==========================================================================
   Lead forms — validation and submission
   Markup: <form data-lead-form> with native required / type attributes.
   Each field wrapper is .field and holds an .field__error element.

   Submission is stubbed: replace `submitLead` with the real endpoint
   (CRM, HubSpot, internal API) when the backend is ready.
   ========================================================================== */

const MESSAGES = {
  valueMissing: "This field is required.",
  typeMismatch: "Enter a valid email address.",
  patternMismatch: "Enter a 10-digit mobile number.",
  consent: "Tick the box so we can contact you.",
};

function errorFor(input) {
  const { validity } = input;
  if (validity.valid) return "";
  if (input.type === "checkbox") return MESSAGES.consent;
  if (validity.valueMissing) return MESSAGES.valueMissing;
  if (validity.typeMismatch) return MESSAGES.typeMismatch;
  if (validity.patternMismatch) return MESSAGES.patternMismatch;
  return input.validationMessage;
}

function showError(input) {
  const field = input.closest(".field");
  const slot = field?.querySelector(".field__error");
  const message = errorFor(input);

  input.setAttribute("aria-invalid", String(Boolean(message)));
  field?.classList.toggle("has-error", Boolean(message));
  if (slot) slot.textContent = message;
  return !message;
}

/* TODO(integration): send to the real lead endpoint. */
async function submitLead(data) {
  console.info("[lead-form] submission stub", data);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}

export function initLeadForm(form) {
  const inputs = [...form.querySelectorAll("input, select, textarea")];
  const submit = form.querySelector('[type="submit"]');
  const status = form.querySelector("[data-form-status]");

  // Validate a field once the user leaves it, then live as they correct it
  inputs.forEach((input) => {
    input.addEventListener("blur", () => showError(input));
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") showError(input);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const results = inputs.map(showError);
    if (results.includes(false)) {
      inputs[results.indexOf(false)].focus();
      return;
    }

    submit.disabled = true;
    submit.dataset.label ??= submit.textContent;
    submit.textContent = "Sending…";

    const data = Object.fromEntries(new FormData(form));
    data.source = form.dataset.leadForm || "website";

    const { ok } = await submitLead(data);

    submit.disabled = false;
    submit.textContent = submit.dataset.label;

    if (ok) {
      form.reset();
      form.classList.add("is-submitted");
      if (status) status.textContent = "Request sent. A resilience specialist will contact you within one business day.";
    } else if (status) {
      status.textContent = "The request did not go through. Check your connection and send it again.";
    }
  });
}

export function initAllLeadForms(scope = document) {
  scope.querySelectorAll("[data-lead-form]").forEach(initLeadForm);
}
