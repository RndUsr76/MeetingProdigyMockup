document.addEventListener("DOMContentLoaded", function () {
  // Make all editable fields visually responsive
  const editableElements = document.querySelectorAll(
    '[contenteditable="true"]'
  );

  editableElements.forEach((el) => {
    el.addEventListener("focus", function () {
      this.style.backgroundColor = "var(--primary-light)";
      this.style.boxShadow = "inset 0 0 0 2px var(--primary)";
    });

    el.addEventListener("blur", function () {
      this.style.backgroundColor = "";
      this.style.boxShadow = "";
    });
  });

  // Add new list items when clicking "+ Add" items
  document.querySelectorAll(".new-item").forEach((item) => {
    item.addEventListener("click", function () {
      if (
        this.textContent === "+ Add criterion" ||
        this.textContent === "+ Add item"
      ) {
        const newItem = document.createElement("li");
        newItem.setAttribute("contenteditable", "true");
        newItem.textContent = "New item";

        const list = this.parentNode;
        list.insertBefore(newItem, this);

        newItem.focus();
      }
    });
  });

  // Mobile-friendly tooltips for status indicators
  const statusIndicators = document.querySelectorAll(".status-indicator");

  statusIndicators.forEach((indicator) => {
    indicator.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        const tooltip = this.getAttribute("data-tooltip") || this.title;
        if (tooltip) {
          alert(tooltip);
        }
      }
    });
  });

  // Disabled button tooltip
  const disabledButtons = document.querySelectorAll(".btn:disabled");

  disabledButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      if (this.disabled) {
        this.setAttribute("title", "Available in Pro version");
      }
    });
  });
});
