
// Function for Playing audio.
// pass the url of audio as audio_value
function play(audio_url) {
  let audio_voice = new Audio(audio_url);
  audio_voice.play();
}

let rowDiv = "";
function createRowElement() {
  // Create the main div with class "row" and "bg-primary"
  rowDiv = document.createElement("div");
  rowDiv.className = "row bg-primary";
  document.body.appendChild(rowDiv);
}

function createColElement(specie_name) {
  // Create the div with class "col-lg-4"
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4";

  // Create the button with class "btn btn-info" and onclick attribute
  const button = document.createElement("div");
  button.className = "btn btn-warning d-block";
  const specie_name_scase =
    specie_name.charAt(0).toUpperCase() + specie_name.slice(1);
  button.textContent = specie_name_scase;
  button.onclick = function () {
    // Replace with your onclick logic
    play(audioElement2.src);
  };

  // Create the image element with src, class, and onclick attribute
  const image = document.createElement("img");
  image.src = "./images/" + specie_name + ".png"; // Replace with your image path
  image.className = "img-thumbnail mb-3 img-fluid";
  image.alt = specie_name_scase;
  image.onclick = function () {
    // Replace with your onclick logic
    play(audioElement1.src);
  };

  // Create the audio elements with id and src attributes
  const audioElement1 = document.createElement("audio");
  audioElement1.id = "specie_name"; // Replace with your audio id
  audioElement1.src = "./audio/" + specie_name + ".mp3"; // Replace with your audio source path

  const audioElement2 = document.createElement("audio");
  audioElement2.id = specie_name + "_pashto"; // Replace with your audio id
  audioElement2.src = "./audio/pashto/" + specie_name + ".wav"; // Replace with your audio source path

  // Append the elements to the colDiv
  colDiv.appendChild(button);
  colDiv.appendChild(image);
  colDiv.appendChild(audioElement1);
  colDiv.appendChild(audioElement2);

  // Append colDiv to the document or another parent element

  rowDiv.appendChild(colDiv);
}