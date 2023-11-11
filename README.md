# React Slot Machine

I built an interactive slot machine in react. You can visit the project here: https://ryans-react-slots.web.app/

## Technologies Used

- JavaScript
- React.js front-end framework
- Node.js runtime
- Firebase deployment

## How does it work?

### 1. Symbol generation

The process of generating the slot board and determinging if a player has won is mainly done through several methods coded into the backend of the website. To start each symbol is delcared in an object. This object contains the symbol its self, the chance of it spawning, its multiplier and its associative range that is used later for generation. Below is the code of one of the objects for reference.

```
TREE: {
    symbol: "🎄",
    chance: 0.2,
    multiplier: 0.8,
    rangeStart: 251,
    rangeEnd: 450,
  },
```

With these symbol objects, we are then able to use JavaScript's Math.random method to generate a random number 1-1000. This is where each symbol's range comes into play as depending on the number generated; a symbol is selected if that number is within its range. This allows us to give each symbol different chances of spawning. With our symbols now able to be randomly generated with their respective chances of spawning, we can generate a 2d array to serve as our slot machine's board.

### 2. Handling a spin

Using the methods previously described to generate symbols and boards, we are able to seamlessly display the slot machine to the user via React.js. Throughout this project I primarly use React.js's useState hook to manage what is displayed to the user. When the page is initially loaded, the default state is determined by a generateBoard() method call. From there, everytime someone places a bet and clicks the spin button, the board state is updated again with a call to the generateBoard() method. Outlined below is some of the code.

```
const defaultBoard = methods.generateBoard();
const [board, setBoard] = useState(defaultBoard);
...
const handleSpin = () => {
    const betAmount = betRef.current.value;
    setBet(betAmount);
    if (betAmount >= 0.01 && balance >= betAmount) {
      setBalance(balance - betAmount);
      const newBoard = methods.generateBoard();
      setBoard(newBoard);
```

You may notice some other variables/states used here, that will be described later.

### 3. Displaying new symbols

Upon new board generation, the board state is set to the new board. However, this will not be reflected upon the front-end unless specified. Here I used React.js's props in order to pass the symbols from the board down from the parent elements. Below is a general outline of how this is done.

```
<Game board={board} />
...
const Game = ({ board }) => {
...
<Row symbols={board[0]} />
<Row symbols={board[1]} />
<Row symbols={board[2]} />
<Row symbols={board[3]} />
<Row symbols={board[4]} />
}
...
const Row = ({ symbols }) => {
...
<Cell symbol={symbols[0]} />
<Cell symbol={symbols[1]} />
<Cell symbol={symbols[2]} />
<Cell symbol={symbols[3]} />
<Cell symbol={symbols[4]} />
<Cell symbol={symbols[5]} />
}

```
