const idContainerMeme = 'meme-image-container';
const idMemeImage = 'meme-image';

function addText() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', (e) => {
    const memeText = document.getElementById('meme-text');
    memeText.innerText = e.target.value;
  });
}

function checkValueInput() {
  const inputText = document.getElementById('text-input');
  if (inputText.value === '') {
    const memeText = document.getElementById('meme-text');
    memeText.innerHTML = 'Gere aqui seu meme';
  }
}

function loadImage() {
  const inputImage = document.getElementById('meme-insert');
  inputImage.addEventListener('change', (e) => {
    checkValueInput();
    if (!document.getElementById(idMemeImage)) {
      const memeContainer = document.getElementById(idContainerMeme);
      const newImg = document.createElement('img');
      newImg.id = idMemeImage;
      newImg.style.maxWidth = '100%';
      newImg.style.maxHeight = '100%';
      memeContainer.appendChild(newImg);
      memeContainer.style.height = newImg.style.width;
    }
    const newImg = document.getElementById(idMemeImage);
    newImg.src = URL.createObjectURL(e.target.files[0]);
    newImg.onload = () => {
      URL.revokeObjectURL(newImg.src);
    };
  });
}

function checkValueImg() {
  if (!document.getElementById(idMemeImage)) {
    const containerImg = document.getElementById(idContainerMeme);
    containerImg.style.height = '500px';
  }
}

window.onload = () => {
  addText();
  loadImage();
  checkValueImg();
  checkValueInput();
};
