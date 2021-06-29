import menuHamburguer from "./menu_hamburguer.js";
import formMap from "./form_map.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuHamburguer();
  formMap(
    "(min-width:64em)",
    `<a href="https://goo.gl/maps/VJP7YUCod7RdTk4RA" target="_blank" rel="noopener noreferrer">Deseas ver la ubicación de Coca Cola - PERU</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.105541765874!2d-77.02094558464836!3d-12.104926746282231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87303c26209%3A0xebe8f4fc49937818!2sCoca%20Cola%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1624946533858!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
});
