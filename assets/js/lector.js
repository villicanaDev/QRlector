/* const video = document.getElementById("qr-video");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    video.addEventListener("play", function() {
      setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          console.log("Código QR encontrado:", code.data);
          // Aquí enviarías el código a PHP para decodificarlo y almacenarlo
          //sendDataToServer(code.data);
        }
      }, 500); // Ejecuta cada 500 ms
    });
  }); */

const video = document.getElementById("qr-video");

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
    video.play();

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    video.addEventListener("play", function() {
      setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          console.log("Código QR encontrado:", code.data);
          alert(code.data);
          // Aquí enviarías el código a PHP para decodificarlo y almacenarlo
          sendDataToServer(code.data);
        }
      }, 500); // Ejecuta cada 500 ms
    });
  })
  .catch(err => {
    console.error("Error al acceder a la cámara:", err);
  });






