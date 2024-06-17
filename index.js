const title = document.querySelector(".advice-title");
const id = document.querySelector("#id");

const randomAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await res.json();

  title.innerHTML = `"${slip.advice}"`;
  id.innerHTML = `ADVICE #${slip.id}`;
};

window.onload = randomAdvice();
