const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const result = document.querySelector("#result");
  const resultMsg = document.querySelector("#resultMsg");
  const container = document.querySelector(".container");

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (!isValidNumber(height) || !isValidNumber(weight)) {
    result.innerHTML = "Please enter valid height and weight";
    return;
  } else {
    const bmi = calculateBMI(height, weight);

    if (bmi < 18.6) {
      resultMsg.innerHTML = `${bmi} - You are Under Weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      resultMsg.innerHTML = `${bmi} - You are fit Weight`;
    } else {
      resultMsg.innerHTML = `${bmi} - You are Overweight`;
    }

    container.classList.add("effect");
    result.innerHTML = ""
  }
});

function isValidNumber(num) {
  return num > 0 && !isNaN(num);
}

function calculateBMI(height, weight) {
  return (weight / ((height * height) / 10000)).toFixed(2);
}
