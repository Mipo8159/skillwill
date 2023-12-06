const NUMBER = Math.floor(Math.random() * 20) + 1;
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector('input[name="number"]');
  const guess = Number(input.value);

  if (!guess) {
    input.value = "";
    return alert("Please enter the value");
  }

  if (guess < NUMBER) {
    input.value = "";
    return alert(`${guess} is lower`);
  }

  if (guess > NUMBER) {
    input.value = "";
    return alert(`${guess} is higher`);
  }

  if (guess === NUMBER) {
    input.value = "";
    return alert(`You are the Man homie`);
  }
});
