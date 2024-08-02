// получаем данные пользователей из localStorage
const usersLocalStorage = JSON.parse(localStorage.getItem("users"));
// получаем id текущего пользователя
const userId = localStorage.getItem("userId");
// для отображения информации о пользователе
const info = document.getElementById("info");

// проверяем, существует ли массив пользователей и есть ли id пользователя
if (usersLocalStorage && userId) {
  // берем пользователя из массива по id
  const user = usersLocalStorage[userId];
  info.innerHTML = `
        <img src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg" alt="Нет аватарки" class="user-avatar">
        <p>Имя пользователя: ${user.username}</p>
        <p>Пароль: ${user.password}</p>
    `;
} else {
  info.innerHTML = "<p>Пользователь не найден!</p>";
}

// обработчик события для кнопки "Выйти"
document.getElementById("logoutButton").addEventListener("click", () => {
  // удаляем ID пользователя из localStorage
  localStorage.removeItem("userId");
  //на главную страницу
  window.location.href = "index.html";
});
