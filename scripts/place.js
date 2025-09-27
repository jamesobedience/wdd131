document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const temp = parseFloat(document.querySelector("#temperature").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind) + " °C";
}

document.querySelector("#windChill").textContent = windChill;
