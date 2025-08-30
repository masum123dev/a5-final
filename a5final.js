let coins = 100;
const coinDisplay = document.getElementById("coin-balance");
const callHistory = document.getElementById("call-history");

function makeCall(serviceName, number, button) {
  if (coins < 20) {
    alert("Not Enough Coins.");
    return;
  }
  coins -= 20;
  coinDisplay.textContent = coins;
  alert(`${serviceName}, ${number} \nRemaining Coins: ${coins}`);

  const li = document.createElement("li");
  // li.className = "p-2 rounded bg-gray-20";
  li.textContent = `${serviceName}, (${number})`;
  callHistory.prepend(list);

  // if (coins < 20) {
  //   alert("Not Enough Coins..");
  // }
}

//-----------------------clear history-------------------------------------
document.getElementById("clearHistory").addEventListener("click", () => {
  const callHistory = document.getElementById("callHistory");
  callHistory.innerHTML = "";
  alert("call history cleared!");
});

// --------------------Copy Counter -------------------------

let copyCount = 0;
const copyButtons = document.querySelectorAll("copy-count");
const copyCountBtn = document.getElementById("copy-counter");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.getAttribute("data-service");
    const number = button.getAttribute("data-number");

    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied!: ${service}, Number: ${number}`);
    });
    copyCount++;
    copyCountBtn.textContent = `Copy Count: ${copyCount}`;
  });
});
