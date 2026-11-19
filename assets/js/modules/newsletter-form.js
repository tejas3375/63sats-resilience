/* ==========================================================================
   Newsletter form — validation and submission
   Markup: <form data-newsletter-form> holding one email input inside a
   .field wrapper with an .field__error element, plus [data-form-status].

   Kept separate from lead-form.js because the copy differs: a newsletter
   sign-up is not a request for a specialist to call back.

   Submission is stubbed: replace `submitSubscription` with the real
   endpoint (email platform, CRM, internal API) when the backend is ready.
   ========================================================================== */

const MESSAGES = {
  valueMissing: "Enter your email address.",
  typeMismatch: "Enter a valid email address, such as name@company.com.",
  success: "You are subscribed. Thank you for signing up.",
  failure: "The sign-up did not go through. Check your connection and try again.",
};

function errorFor(input) {
  const { validity } = input;
  if (validity.valid) return "";
  if (validity.valueMissing) return MESSAGES.valueMissing;
  if (validity.typeMismatch) return MESSAGES.typeMismatch;
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

/* TODO(integration): send to the real newsletter endpoint. */
async function submitSubscription(data) {
  console.info("[newsletter-form] submission stub", data);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}

function initForm(form) {
  const input = form.querySelector('input[type="email"]');
  const submit = form.querySelector('[type="submit"]');
  const status = form.querySelector("[data-form-status]");
  if (!input || !submit) return;

  // Validate once the user leaves the field, then live as they correct it
  input.addEventListener("blur", () => {
    if (input.value) showError(input);
  });
  input.addEventListener("input", () => {
    if (input.getAttribute("aria-invalid") === "true") showError(input);
    if (status) status.textContent = "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!showError(input)) {
      input.focus();
      return;
    }

    submit.disabled = true;
    submit.dataset.label ??= submit.textContent;
    submit.textContent = "Subscribing…";

    let ok = false;
    try {
      ({ ok } = await submitSubscription({
        email: input.value.trim(),
        source: form.dataset.newsletterForm || "website",
      }));
    } catch {
      ok = false;
    }

    submit.disabled = false;
    submit.textContent = submit.dataset.label;

    if (ok) {
      form.reset();
      form.classList.add("is-submitted");
    }
    if (status) {
      status.classList.toggle("is-error", !ok);
      status.textContent = ok ? MESSAGES.success : MESSAGES.failure;
    }
  });
}

export function initNewsletterForm(scope = document) {
  scope.querySelectorAll("[data-newsletter-form]").forEach(initForm);
}
