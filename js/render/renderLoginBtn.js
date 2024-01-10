
export const renderLoginBtn = () => {
  const loginBtnEl = document.querySelector('.login');
  const loginModalEl = document.getElementById('loginModal');
  const loginFormEl = document.getElementById('loginForm');
  const loginCloseModal = document.querySelector('.btn_close-modal');

  loginBtnEl.onclick = function (e) {
    e.preventDefault();
    loginModalEl.style.display = 'flex';
  }

  loginFormEl.onsubmit = function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    window.location.href = 'admin.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  loginCloseModal.onclick = function (e) {
    e.preventDefault();
    loginModalEl.style.display = 'none';
  }
}

