const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signUpForm')
  .addEventListener('submit', signupFormHandler);


function logSign(){
  const sign = document.querySelector(".signupBox");
  const log = document.querySelector(".loginBox");
  const signBtn = document.querySelector("#sign");
  const logBtn = document.querySelector("#log");
  if(sign.style.display == 'none'){
    sign.style.display = "block";
    logBtn.style.display = "block";
    log.style.display = "none";
    signBtn.style.display = "none";
  }else{
    sign.style.display = "none";
    logBtn.style.display = "none";
    log.style.display = "block";
    signBtn.style.display = "block";
  }

}
