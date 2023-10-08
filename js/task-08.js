const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page from reloading

  const formData = new FormData(event.currentTarget);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert('All fields must be filled in');
    return;
  }

  console.log(userData);

  form.reset();
});
