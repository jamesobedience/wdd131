// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
]
// Function to render temples
function displayTemples(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // Clear old content

  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
      <figcaption>
        <strong>${temple.templeName}</strong><br>
        ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
      </figcaption>
    `;
    gallery.appendChild(card);
  });
}

// Navigation filters
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle hamburger
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });

  // Filtering
  document.querySelector("nav").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const filter = e.target.textContent;
      let results = temples;

      if (filter === "Old") {
        results = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      } else if (filter === "New") {
        results = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      } else if (filter === "Large") {
        results = temples.filter(t => t.area > 90000);
      } else if (filter === "Small") {
        results = temples.filter(t => t.area < 10000);
      }

      displayTemples(results);
      document.querySelector("main h2").textContent = filter;
    }
  });

  // Initial render
  displayTemples(temples);

  // Footer date logic
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
