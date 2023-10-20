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

const winningSymbols = (symbolCounts) => {
  const keys = Object.keys(symbolCounts);
  let winningSyms = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const curr = symbolCounts[key];
    if (curr >= 6) {
      winningSyms.push(key);
    }
  }
  return winningSyms;
};

const generateCounts = (board) => {
  const symbolCounts = {
    "🧝": 0,
    "🎄": 0,
    "⛄": 0,
    "🎅": 0,
    "🧑‍🎄": 0,
    "🔔": 0,
    "🍪": 0,
    "🦌": 0,
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const sym = board[row][col];
      symbolCounts[sym] += 1;
    }
  }

  return symbolCounts;
};

const calculateWin = (winningSyms) => {
  let multi = 0;
  if (winningSyms.length === 0) {
    return 0;
  }
  const keys = Object.keys(Symbols);
  for (let i = 0; i < winningSyms.length; i++) {
    const sym = winningSyms[i];

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const curr = Symbols[key];
      if (curr.symbol === sym) {
        multi += curr.multiplier;
      }
    }
  }
  return multi;
};

const methods = { generateCounts, generateBoard, winningSymbols, calculateWin };
export default methods;
