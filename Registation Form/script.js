// script.js
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});









// document.addEventListener('DOMContentLoaded', function () {
//     const signupForm = document.getElementById('signupForm');
//     const loginForm = document.getElementById('loginForm');
//     const message = document.getElementById('message');
  
//     signupForm.addEventListener('submit', function (event) {
//       event.preventDefault();
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
  
//       fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       })
//       .then(response => {
//         if (response.ok) {
//           message.textContent = 'Signup successful';
//           message.style.color = 'green';
//         } else {
//           message.textContent = 'Signup failed';
//           message.style.color = 'red';
//         }
//       })
//       .catch(error => console.error('Error:', error));
//     });
  
//     loginForm.addEventListener('submit', function (event) {
//       event.preventDefault();
//       const email = document.getElementById('loginEmail').value;
//       const password = document.getElementById('loginPassword').value;
  
//       fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       })
//       .then(response => {
//         if (response.ok) {
//           message.textContent = 'Login successful';
//           message.style.color = 'green';
//         } else {
//           message.textContent = 'Login failed';
//           message.style.color = 'red';
//         }
//       })
//       .catch(error => console.error('Error:', error));
//     });
//   });
  