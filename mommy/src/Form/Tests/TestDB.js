const type = ['S', 'D', 'H', 'C'];
const p = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
const cards = [];
for (let j = 0; j < 4; j++)
  for (let i = 12; i >= 0; i--)
    cards.push({
      key: i * 10 + j,
      name: 'card_' + (i * 10 + j),
      image: `https://deckofcardsapi.com/static/img/${p[i]}${type[j]}.png`,
    });

module.exports = cards;
