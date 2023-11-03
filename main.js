let cards = document.getElementsByClassName("card");

let isClicked = false;
cards[0].onclick = () => {
  isClicked = !isClicked;
  flipCard(cards[0], isClicked ? 180 : 0);
  for (let i = 1; i < cards.length; i++) {
    setTimeout(() => {
      flipCard(cards[i], isClicked ? 180 : 0);
    }, 200 * i);
  }
};

function flipCard(card, rotate) {
  card.style.transform = `perspective(1000px) rotateY(${rotate}deg)`;
}
