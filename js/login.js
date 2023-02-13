//add event handler with login button
document.getElementById('btn-login').addEventListener('click', function () {
  //get value from input field
  const userID = document.getElementById('user-id').value;
  const password = document.getElementById('password').value;

  //client side verify email and password. Danger: never use in realworld. for practice purpose only
  if (userID === 'admin' && password === '123456') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid userID or password');
  }
});
