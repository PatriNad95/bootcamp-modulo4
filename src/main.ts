import "./style.css";

let turn: number = 0;

setTurn(turn);

function setTurn(turn: number) {
  const resultadoElement = document.getElementById("numero-turno");

  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML =
      turn.toString().length === 1 ? "0" + turn.toString() : turn.toString();
  }
}

function nextTurn() {
  turn++;
  setTurn(turn);
}

function previousTurn() {
  turn = turn !== 0 ? --turn : 0;
  setTurn(turn);
}

function resetTurn() {
  turn = 0;
  setTurn(turn);
}

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const resetButton = document.getElementById("resetButton");
const inputTurn = document.getElementById("inputTurn") as HTMLInputElement;
const setButton = document.getElementById("setButton");

if (nextButton !== null && nextButton !== undefined) {
  nextButton.addEventListener("click", () => nextTurn());
}

if (previousButton !== null && previousButton !== undefined) {
  previousButton.addEventListener("click", () => previousTurn());
}

if (resetButton !== null && resetButton !== undefined) {
  resetButton.addEventListener("click", () => resetTurn());
}

if (inputTurn !== null && inputTurn !== undefined) {
  inputTurn.addEventListener("change", () => setTurnManual(inputTurn.value));
}

function setTurnManual(manualTurn: string) {
  if (setButton !== null && setButton !== undefined) {
    const numeralTurn = Number(manualTurn);
    turn = numeralTurn > 0 ? numeralTurn : 0;
    setButton.addEventListener("click", () => setTurn(turn));
  }
}
