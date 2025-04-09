document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("hideArchived");
  const filterSelect = document.querySelector(".filter-bar select");

  function applyFilters() {
    const hideArchived = checkbox.checked;
    const selectedStatus = filterSelect.value;

    document.querySelectorAll(".meeting-card").forEach((card) => {
      const status = card.getAttribute("data-status");
      let visible = true;

      if (hideArchived && status === "Report finalized") {
        visible = false;
      }

      if (selectedStatus !== "Status: Alla" && status !== selectedStatus) {
        visible = false;
      }

      card.style.display = visible ? "block" : "none";
    });
  }

  checkbox.addEventListener("change", applyFilters);
  filterSelect.addEventListener("change", applyFilters);

  applyFilters();
});
