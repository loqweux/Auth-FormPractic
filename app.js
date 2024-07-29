document.getElementById("registerButton").addEventListener("click", register);
document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("toRegister").addEventListener("click", toggleForm);
document.getElementById("toLogin").addEventListener("click", toggleForm);
let users = [];

// переключение между формами
function toggleForm() {
  const authForm = document.getElementById("authForm");
  const registerForm = document.getElementById("registerForm");
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = ""; // очистка сообщений при переключении форм

  if (authForm.style.display === "none") {
    authForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    authForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

// регистрация нового пользователя
function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const messageDiv = document.getElementById("message");

  if (username && password) {
    users.push({ username, password });
    document.getElementById("regUsername").value = "";
    document.getElementById("regPassword").value = "";
    messageDiv.innerHTML =
      "<p style='color: green; text-align: center;'>Пользователь зарегистрирован успешно!</p>";
  } else {
    messageDiv.innerHTML =
      "<p style='color: red; text-align: center;'>Пожалуйста, заполните все поля!</p>";
  }
}

// авторизация пользователя
function login() {
  const username = document.getElementById("authUsername").value;
  const password = document.getElementById("authPassword").value;
  const messageDiv = document.getElementById("message");
  let userFound = false;

  // поиск пользователя
  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      userFound = true; // пользователь найден
    }
  });

  if (userFound === true) {
    messageDiv.innerHTML =
      "<p style='color: green; text-align: center;'>Авторизация прошла успешно!</p>";
  } else {
    messageDiv.innerHTML =
      "<p style='color: red; text-align: center;'>Такого пользователя не существует!</p>";
  }
}
