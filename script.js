function addText() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', (e) => {
    const memeText = document.getElementById('meme-text');
    memeText.innerText = e.target.value;
  });
}

window.onload = () => {
  addText();
};
