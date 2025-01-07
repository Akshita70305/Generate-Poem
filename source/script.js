function generatePoem(event) {
    event.preventDefault();
    new Typewriter("#poem", {
        strings: "The dreams of my heart and my mind pass",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener('submit', generatePoem);