let isIgnite = true;

function changeCard(event) {
  //console.log(event.currentTarget);
  const card = event.currentTarget;
  const backgroundImg = isIgnite
    ? "url(./assets/bg-ignite.svg)"
    : "url(./assets/bg-explorer.svg)";
  console.log(isIgnite);
  isIgnite = !isIgnite;
  console.log("Após negação da variável");
  console.log(isIgnite);
  card.style.backgroundImage = backgroundImg;
  party.confetti(card);
}
