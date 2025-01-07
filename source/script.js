function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let hintElement = document.querySelector("#hints");

  let apiKey = "4fofe4bd563109f312d7tb84039a8647";
  let prompt = `generate a english poem about ${hintElement.value}`;
  let context =
    "you are a romantic AI. Poem should be very-short and romantic. display poem using <br/> element. follow user instructions. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
