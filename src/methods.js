const Symbols = Object.freeze({
  ELF: {
    symbol: "🧝",
    chance: 0.15,
    multiplier: 0.5,
    rangeStart: 1,
    rangeEnd: 225,
  },
  TREE: {
    symbol: "🎄",
    chance: 0.13,
    multiplier: 0.6,
    rangeStart: 226,
    rangeEnd: 425,
  },
  SNOWMAN: {
    symbol: "⛄",
    chance: 0.11,
    multiplier: 0.75,
    rangeStart: 426,
    rangeEnd: 595,
  },
  SANTA: {
    symbol: "🎅",
    chance: 0.09,
    multiplier: 1,
    rangeStart: 596,
    rangeEnd: 735,
  },
  BELL: {
    symbol: "🔔",
    chance: 0.07,
    multiplier: 1.5,
    rangeStart: 736,
    rangeEnd: 850,
  },
  COOKIE: {
    symbol: "🍪",
    chance: 0.05,
    multiplier: 2,
    rangeStart: 851,
    rangeEnd: 940,
  },
  REINDEER: {
    symbol: "🦌",
    chance: 0.03,
    multiplier: 3,
    rangeStart: 941,
    rangeEnd: 990,
  },
  MRSCLAUS: {
    symbol: "🧑‍🎄",
    chance: 0.02,
    multiplier: 5,
    rangeStart: 991,
    rangeEnd: 1190,
  },
  PRESENT: {
    symbol: "🎁",
    chance: 0.015,
    multiplier: 7,
    rangeStart: 1191,
    rangeEnd: 1340,
  },
  MILK: {
    symbol: "🥛",
    chance: 0.005,
    multiplier: 10,
    rangeStart: 1341,
    rangeEnd: 1500,
  },
});

const generateRandomSymbol = () => {
  const randomNum = Math.floor(Math.random() * 1500) + 1;
  console.log("Generated Number:", randomNum);
  const keys = Object.keys(Symbols); // gets all of they keys of the Symbol object/ dictionary

  // iterates through each key. Each key returns a value (curr) which contains the information aobut that specfic symbol.
  // Here we check if the number selected is in the range of each symbol
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const curr = Symbols[key];
    if (randomNum >= curr.rangeStart && randomNum <= curr.rangeEnd) {
      return curr.symbol; // if its in the range we return the emoji associated with that symbol
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
