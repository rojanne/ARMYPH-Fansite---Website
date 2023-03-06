const form = document.getElementById("form");
const username = document.getElementById("name");
const province = document.getElementById("province");
const email = document.getElementById("email");
const letter = document.getElementById("letter");

form.addEventListener('submit', e =>{
  e.preventDefault();

  validateInputs();

  openPopup();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const provinceValue = province.value.trim();
  const letterValue = letter.value.trim();

  if(usernameValue === "") {
    setError(username, "Username is required");
  } else{
    setSuccess(username);
  }

  if (emailValue === ''){
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (provinceValue === '') {
    setError(province, 'Province is required');
  } else {
    setSuccess(province);
  }
}

let popup = document.getElementById("popup")
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const provinceValue = province.value.trim();
const letterValue = letter.value.trim();

/*------not exactly working pa (openPopup)--------*/
function openPopup(){
  if (validateInputs(usernameValue) === setSuccess(username) && validateInputs(emailValue) === setSuccess(email) 
  && validateInputs(provinceValue) === setSuccess(province)){
    popup.classList.add("open-popup");
  }
 }

 function closePopup(){
  popup.classList.remove("open-popup");
 }