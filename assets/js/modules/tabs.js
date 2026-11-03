/* ==========================================================================
   Accessible tabs (WAI-ARIA tabs pattern, automatic activation)
   Markup:
     <div data-tabs>
       <div role="tablist" aria-label="...">
         <button role="tab" id="tab-a" aria-controls="panel-a" aria-selected="true">A</button>
         ...
       </div>
       <div role="tabpanel" id="panel-a" aria-labelledby="tab-a">...</div>
     </div>
   Arrow keys move between tabs; Home/End jump to first/last.
   The tablist may sit anywhere inside [data-tabs] (e.g. around the orbit).
   ========================================================================== */

export function initTabs(root) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  if (!tabs.length) return;

  function select(tab, { focus = false } = {}) {
    tabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !selected;
    });
    if (focus) tab.focus();
    root.dispatchEvent(new CustomEvent("tabs:change", { detail: { tab } }));
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab));

    tab.addEventListener("keydown", (event) => {
      const last = tabs.length - 1;
      const targets = {
        ArrowRight: index === last ? 0 : index + 1,
        ArrowDown:  index === last ? 0 : index + 1,
        ArrowLeft:  index === 0 ? last : index - 1,
        ArrowUp:    index === 0 ? last : index - 1,
        Home: 0,
        End: last,
      };
      if (!(event.key in targets)) return;
      event.preventDefault();
      select(tabs[targets[event.key]], { focus: true });
    });
  });

  const initial = tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0];
  select(initial);
}

export function initAllTabs(scope = document) {
  scope.querySelectorAll("[data-tabs]").forEach(initTabs);
}
