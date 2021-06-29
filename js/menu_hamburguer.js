const d = document;

export default function menuHamburguer() {
  const $hamburguer = d.querySelector(".hamburguer"),
    $panel = d.querySelector(".main-header .menu");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".hamburguer") || e.target.matches(".hamburguer *")) {
      $hamburguer.classList.toggle("is-active");
      $panel.classList.toggle("is-active");
      e.target.style.fontWeight = "normal";
    }

    if (e.target.matches(".main-header .menu-link")) {
      $hamburguer.classList.remove("is-active");
      $panel.classList.remove("is-active");
    }
  });
}
