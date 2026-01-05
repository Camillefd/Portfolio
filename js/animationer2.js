const textBoxes = document.querySelectorAll(".tekstbox");

textBoxes.forEach((text, index) => {
  if (index % 2 === 0) {
    text.classList.add("push-left");
    text.classList.remove("push-right");
  } else {
    text.classList.add("push-right");
    text.classList.remove("push-left");
  }
});

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  console.log("virker");
  let windowHeight = window.innerHeight / 1.5;

  textBoxes.forEach((text, index) => {
    let textPosition = text.getBoundingClientRect().top;

    if (windowHeight > textPosition) {
      text.classList.remove("push-left");
      text.classList.remove("push-right");
    } else {
      if (index % 2 === 0) {
        text.classList.add("push-left");
        text.classList.remove("push-right");
      } else {
        text.classList.add("push-right");
        text.classList.remove("push-left");
      }
    }
  });
}
