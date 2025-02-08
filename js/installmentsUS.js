document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("customRange3");
    const rangeValue = document.getElementById("rangeValue");

    function updateRangeValue() {
        rangeValue.textContent = rangeInput.value;
    } rangeInput.addEventListener("input", updateRangeValue);
    updateRangeValue();
});
