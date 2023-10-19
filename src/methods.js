const Symbols = Object.freeze({
  ELF: {
    symbol: "🧝",
    chance: 0.25,
    multiplier: 0.6,
    rangeStart: 1,
    rangeEnd: 250,
  },
  TREE: {
    symbol: "🎄",
    chance: 0.2,
    multiplier: 0.8,
    rangeStart: 251,
    rangeEnd: 450,
  },
  SNOWMAN: {
    symbol: "⛄",
    chance: 0.175,
    multiplier: 0.95,
    rangeStart: 451,
    rangeEnd: 625,
  },
  SANTA: {
    symbol: "🎅",
    chance: 0.15,
    multiplier: 1.1,
    rangeStart: 626,
    rangeEnd: 775,
  },
  BELL: {
    symbol: "🔔",
    chance: 0.1,
    multiplier: 1.75,
    rangeStart: 776,
    rangeEnd: 875,
  },
  COOKIE: {
    symbol: "🍪",
    chance: 0.075,
    multiplier: 2.25,
    rangeStart: 876,
    rangeEnd: 950,
  },
  REINDEER: {
    symbol: "🦌",
    chance: 0.035,
    multiplier: 4,
    rangeStart: 951,
    rangeEnd: 985,
  },
  MRSCLAUS: {
    symbol: "🧑‍🎄",
    chance: 0.01,
    multiplier: 10,
    rangeStart: 986,
    rangeEnd: 1000,
  },
});
const symbolCounts = {
  ELF: 0,
  TREE: 0,
  SNOWMAN: 0,
  SANTA: 0,
  MRSCLAUS: 0,
  BELL: 0,
  COOKIE: 0,
  REINDEER: 0,
};

const generateRandomSymbol = () => {
  const randomNum = Math.floor(Math.random() * 1000) + 1;

  const keys = Object.keys(Symbols);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const curr = Symbols[key];
    if (randomNum >= curr.rangeStart && randomNum <= curr.rangeEnd) {
      return curr.symbol;
    }
  }
};

const generateBoard = () => {
  const board = [];

  for (let row = 0; row < 5; row++) {
    const row = [];
    for (let col = 0; col < 6; col++) {
      row.push(generateRandomSymbol());
    }
    board.push(row);
  }
  return board;
};

const checkWin = (symbolCounts) => {
  const keys = Object.keys(symbolCounts);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const curr = symbolCounts[key];
    if (curr >= 6) {
      return true;
    } else {
      return false;
    }
  }
};

const winningSymbols = (board) => {};

const generateCounts = (board) => {};
export default generateBoard;
