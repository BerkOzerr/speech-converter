let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.getElementById("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.getElementById("listen").addEventListener("click", () => {
  let text = document.getElementById("words").value;
  speech.text = text;
  window.speechSynthesis.speak(speech);
  document.getElementById("words").value = "";
});
