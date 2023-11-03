let cards = document.getElementsByClassName("card");
let cols = document.getElementsByClassName("col")
console.log(cols)
console.log(cols[0].children[0])
let isClicked = false;
//
// cards[0].onclick = () => {
//     isClicked = !isClicked;
//     for (let i = 0; i < cards.length; i++) {
//         if (i === 0) {
//             setTimeout(() => {
//                 flipCard(cols[0].children[0], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 1) {
//             setTimeout(() => {
//                 flipCard(cols[0].children[1], isClicked ? 180 : 0);
//                 flipCard(cols[1].children[0], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 2) {
//             setTimeout(() => {
//                 flipCard(cols[0].children[2], isClicked ? 180 : 0);
//                 flipCard(cols[1].children[1], isClicked ? 180 : 0);
//                 flipCard(cols[2].children[0], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 3) {
//             setTimeout(() => {
//                 flipCard(cols[3].children[0], isClicked ? 180 : 0);
//                 flipCard(cols[2].children[1], isClicked ? 180 : 0);
//                 flipCard(cols[1].children[2], isClicked ? 180 : 0);
//                 flipCard(cols[0].children[3], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 4) {
//             setTimeout(() => {
//                 flipCard(cols[4].children[0], isClicked ? 180 : 0);
//                 flipCard(cols[3].children[1], isClicked ? 180 : 0);
//                 flipCard(cols[2].children[2], isClicked ? 180 : 0);
//                 flipCard(cols[1].children[3], isClicked ? 180 : 0);
//                 flipCard(cols[0].children[4], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 5) {
//             setTimeout(() => {
//                 flipCard(cols[4].children[1], isClicked ? 180 : 0);
//                 flipCard(cols[3].children[2], isClicked ? 180 : 0);
//                 flipCard(cols[2].children[3], isClicked ? 180 : 0);
//                 flipCard(cols[1].children[4], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 6) {
//             setTimeout(() => {
//                 flipCard(cols[4].children[2], isClicked ? 180 : 0);
//                 flipCard(cols[3].children[3], isClicked ? 180 : 0);
//                 flipCard(cols[2].children[4], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 7) {
//             setTimeout(() => {
//                 flipCard(cols[3].children[4], isClicked ? 180 : 0);
//                 flipCard(cols[4].children[3], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//         if (i === 8) {
//             setTimeout(() => {
//                 flipCard(cols[4].children[4], isClicked ? 180 : 0);
//             }, 200 * i);
//         }
//
//     }
// };

// cards[0].onclick = () => {
//     isClicked = !isClicked;
//     for (let i = 0; i < cards.length; i++) {
//         setTimeout(() => {
//             for (let j = 0; j <= i; j++) {
//                 flipCard(cols[i - j].children[j], isClicked ? 180 : 0);
//             }
//         }, 200 * i);
//     }
// };

cards[0].onclick = () => {
    isClicked = !isClicked;
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= i; j++) {
            setTimeout(() => {
                flipCard(cols[i - j].children[j], isClicked ? 180 : 0);
            }, 200 * i);
        }
    }
};


function flipCard(card, rotate) {

        card.style.transform = `perspective(1000px) rotateY(${rotate}deg)`;


}
