


function generateRandomQRCode() {
  const randomString = Math.random().toString(36).substring(2, 12);
  const qrData = `https://renaneliakim-dev.vercel.app/`; /* nunca utilizar ${randomString} */

  document.getElementById("qrcode-link").href = qrData;

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
      text: qrData,
      width: 200,
      height: 200
  });

  console.log("QR Code gerado para:", qrData);
}

generateRandomQRCode();






