async function fetchJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const jokeData = await response.json();
  return `${jokeData.setup} ${jokeData.punchline}`;
}

function animateJokeText(jokeText) {
  const jokeTextBox = document.getElementById("joke-text-box");
  jokeTextBox.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < jokeText.length) {
      jokeTextBox.innerHTML += jokeText[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

function animateNewJokeButton() {
  const newJokeButton = document.getElementById("new-joke-button");
  newJokeButton.addEventListener("click", async () => {
    newJokeButton.classList.add("active");
    setTimeout(() => {
      newJokeButton.classList.remove("active");
    }, 100);
    const jokeText = await fetchJoke();
    animateJokeText(jokeText);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const jokeText = await fetchJoke();
  animateJokeText(jokeText);
  animateNewJokeButton();
});