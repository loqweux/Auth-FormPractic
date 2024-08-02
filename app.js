const form = (() => {
  let arrUser = []; // массив для пользователей
  const usersLocalStorage = JSON.parse(localStorage.getItem("users"));

  // инициализация переменных
  let username, password, messageDiv;
  const authForm = document.getElementById("authForm");
  const registerForm = document.getElementById("registerForm");

  if (usersLocalStorage) {
    arrUser = usersLocalStorage; // загружаем пользователей из localStorage
  }

  document.getElementById("registerButton").addEventListener("click", register);
  document.getElementById("loginButton").addEventListener("click", login);
  document.getElementById("toRegister").addEventListener("click", toggleForm);
  document.getElementById("toLogin").addEventListener("click", toggleForm);
  messageDiv = document.getElementById("message");

  // переключение между формами
  function toggleForm() {
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
    username = document.getElementById("regUser").value;
    password = document.getElementById("regPass").value;

    if (username && password) {
      const newUser = { username: username, password: password }; // создаем объект нового пользователя
      arrUser.push(newUser); // добавляем пользователя в массив
      localStorage.setItem("users", JSON.stringify(arrUser)); // записываем массив в localStorage

      document.getElementById("regUser").value = "";
      document.getElementById("regPass").value = "";
      messageDiv.innerHTML =
        "<p style='color: green; text-align: center;'>Пользователь зарегистрирован успешно!</p>";
    } else {
      messageDiv.innerHTML =
        "<p style='color: red; text-align: center;'>Пожалуйста, заполните все поля!</p>";
    }
  }

  // авторизация пользователя
  function login() {
    username = document.getElementById("authUser").value;
    password = document.getElementById("authPass").value;
    let userFound = false;

    // поиск пользователя
    arrUser.forEach((user, index) => {
      if (user.username === username && user.password === password) {
        userFound = true; // пользователь найден
        localStorage.setItem("userId", index); // записываем id пользователя в localStorage
        window.location.href = "profile.html"; // перенаправляем на страницу профиля
      }
    });

    if (!userFound) {
      messageDiv.innerHTML =
        "<p style='color: red; text-align: center;'>Такого пользователя не существует!</p>";
    }
  }
})();
