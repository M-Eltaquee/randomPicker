const choicesbox = document.getElementById('optons');
const optionBtn = document.getElementsByClassName('option');
const optionWrapper = document.getElementById('buttons');
const alert = document.getElementById('alert');
const duration = 10000;

// Event Listners
// add new buttons for new input
choicesbox.addEventListener('keyup', showInputs);
// start choise picking and disaple entering new inputs
choicesbox.addEventListener('keypress', playPicker);

// listner functions
// show new inputs once user hit ","
function showInputs() {
  // create new array of inputs, ignore empty inputs and remove white spaces
  let optionsArr = choicesbox.value
    .split(',')
    .filter((elem) => elem.trim() !== '')
    .map((elem) => elem.trim());
  // clear inputs box
  optionWrapper.innerHTML = '';
  //adding new inputs
  optionsArr.forEach((element) => {
    const span = document.createElement('span');
    span.className = 'option';
    span.innerText = element;
    optionWrapper.appendChild(span);
  });
}
// start choise picking function
function playPicker(e) {
  // starting with hiting Enter
  if (e.charCode === 13 || e.target.keycode === 13 || e.target.which === 13) {
    // if empty input , show alert
    if (document.getElementsByClassName('option').length === 0) {
      alert.innerText = 'Please enter choices before hit Enter !';
      alert.style.display = 'block';

      setTimeout(() => {
        alert.innerText = '';
        alert.style.display = 'none';
      }, 2000);
    } else {
      // disable textArea
      choicesbox.setAttribute('disabled', 'disabled');
      // start new interval to change highlighted option every 100 milliseconds
      let duration = setInterval(highlt, 100);
      // clear interval after padding chosen random time
      setTimeout(function () {
        clearInterval(duration);
        const activeBtn = document.querySelector('.active');
        alert.innerText = `You're choise is " ${activeBtn.innerText} "`;
        alert.style.display = 'block';
      }, duration);
    }
  }
}
// chanfing highlit function
// make index -1 so we can start from Zero inside function
function highlt() {
  // get all inputs as array
  allBtnsArr = document.querySelectorAll('.option');
  allBtnsArrLength = allBtnsArr.length;
  const randoPicker = Math.floor(Math.random() * allBtnsArrLength);
  // add highlit class to new input
  allBtnsArr[randoPicker].classList.add('active');
  // remove highlight after 100 milliseconds
  setTimeout(function () {
    allBtnsArr[randoPicker].classList.remove('active');
  }, 100);
}
