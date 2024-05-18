const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

speakEl.addEventListener('click', speakText);
function speakText() {
    window.speechSynthesis.cancel();
    const text = textEl.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}