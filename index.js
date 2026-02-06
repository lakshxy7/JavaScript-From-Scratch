let pressbutton = document.getElementById("button1");

pressbutton.onclick = function () {
  let rn = Math.random();
    let max=100;
    let min=50;

  let randomNumber = Math.ceil(rn * (max-min)+50);
  document.getElementById("display").textContent = randomNumber;
};
