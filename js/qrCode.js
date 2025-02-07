

function generateRandomQRCode() {
  const canvas = document.getElementById('qrcodeCanvas');
  const ctx = canvas.getContext('2d');
  const size = 200;
  canvas.width = size;
  canvas.height = size;

  // Criando um código aleatório
  const randomString = Math.random().toString(36).substring(2, 12);
  const qrData = `https://example.com/${randomString}`;

  // Criando um QR Code simples
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#000000';

  for (let y = 0; y < size; y += 10) {
    for (let x = 0; x < size; x += 10) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, 10, 10);
      }
    }
  }

  console.log("QR Code gerado para:", qrData);
}

generateRandomQRCode(); // Gera um QR Code ao carregar a página
