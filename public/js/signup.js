const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(err);
      alert(response.statusText);
    }
  }
};

const loginButtonHandler = async () => {
  document.location.replace('/login');
};

document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('#btn-login')
  .addEventListener('submit', loginButtonHandler);
