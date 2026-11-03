/* ==========================================================================
   Modals using native <dialog>
   Open:  any element with data-modal-open="<dialog id>"
   Close: any element inside the dialog with data-modal-close,
          the Escape key, or a click on the backdrop.
   ========================================================================== */

export function initModals(scope = document) {
  scope.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-modal-open]");
    if (opener) {
      event.preventDefault();
      document.getElementById(opener.dataset.modalOpen)?.showModal();
      return;
    }

    const closer = event.target.closest("[data-modal-close]");
    if (closer) closer.closest("dialog")?.close();
  });

  // Backdrop click: the dialog element itself is the event target
  scope.querySelectorAll("dialog.modal").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}
