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
      newImg.style.width = '100%';
      newImg.style.height = '100%';
      memeContainer.appendChild(newImg);
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

function setColor(e) {
  const image = document.getElementById(idMemeImage);
  const color = e.target.attributes[1].value;
  image.style.border = `5px double ${color}`;
}

function activeButtons() {
  const buttonFire = document.getElementById('fire');
  buttonFire.setAttribute('cor', 'red');
  buttonFire.addEventListener('click', setColor);
  const buttonWater = document.getElementById('water');
  buttonWater.setAttribute('cor', 'blue');
  buttonWater.addEventListener('click', setColor);
  const buttonEarth = document.getElementById('earth');
  buttonEarth.setAttribute('cor', 'brown');
  buttonEarth.addEventListener('click', setColor);
}

window.onload = () => {
  addText();
  loadImage();
  checkValueImg();
  checkValueInput();
  activeButtons();
};
