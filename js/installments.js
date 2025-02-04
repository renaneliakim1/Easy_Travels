document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("customRange3");
  const rangeLabel = document.createElement("span");

  rangeInput.insertAdjacentElement("afterend", rangeLabel);

  function updateRangeValue() {
    rangeLabel.textContent = rangeInput.value;
  }

  rangeInput.addEventListener("input", updateRangeValue);

  updateRangeValue();
});
