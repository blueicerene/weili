const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.querySelector(".mobile-panel");

if (menuToggle && mobilePanel) {
  function closeMobileMenu() {
    mobilePanel.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

const proDirectory = document.querySelector(".pro-directory");

if (proDirectory) {
  const state = { office: "all", practice: "all", letter: "all" };
  const rows = [...proDirectory.querySelectorAll(".pro-row")];
  const empty = proDirectory.querySelector(".pro-empty");

  function updateProfessionalRows() {
    let visibleCount = 0;
    rows.forEach((row) => {
      const officeMatched = state.office === "all" || row.dataset.office === state.office;
      const practiceMatched = state.practice === "all" || row.dataset.practice.split(" ").includes(state.practice);
      const letterMatched = state.letter === "all" || row.dataset.letter === state.letter;
      const visible = officeMatched && practiceMatched && letterMatched;
      row.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });
    if (empty) empty.style.display = visibleCount ? "none" : "block";
  }

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      state[filter] = button.dataset.value;
      document.querySelectorAll(`.filter-btn[data-filter="${filter}"]`).forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      updateProfessionalRows();
    });
  });

  document.querySelectorAll(".alpha-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.letter = button.dataset.letter;
      document.querySelectorAll(".alpha-btn").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      updateProfessionalRows();
    });
  });
}
