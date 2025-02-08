document.getElementById("assinar").addEventListener("click", function () {
   const toastEl = document.getElementById("liveToast");

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
});

