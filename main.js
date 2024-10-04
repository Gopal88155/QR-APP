
let form = document.querySelector("form")
let input = document.querySelector("input")
let select = document.querySelector("select")
let img = document.querySelector("img")
let download = document.getElementById("download")
let qrURL = '';

const getQr = async (e) => {
  e.preventDefault()
  const response = await fetch (`
   https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value} `)

   const blob = await response.blob()
   qrURL = URL.createObjectURL(blob)

   img.setAttribute("src", response.url)
  
}

const downloadQR = () => {
  if (!qrURL) return;
  const link = document.createElement("a");
  link.href = qrURL;
  link.download = "QRCode.png"; 
  link.click();
}

form.addEventListener("submit", getQr)
download.addEventListener("click", downloadQR)
