const d = document;

export default function formMap(mq, mobile, desktop) {
  //mq , mobile , desktop
  const $contact = d.getElementById("contactMap");
  let mql = window.matchMedia(mq);

  const screenTest = (e) => {
    e.matches ? ($contact.innerHTML = desktop) : ($contact.innerHTML = mobile);
  };

  mql.addEventListener("change", screenTest);
  screenTest(mql);
}
