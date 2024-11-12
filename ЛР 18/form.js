document.getElementById('userForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : 'Не указано';

    const interests = [];
    document.querySelectorAll('input[name="interest"]:checked').forEach((checkbox) => {
        interests.push(checkbox.value);
    });
    const interestsText = interests.length > 0 ? interests.join(', ') : 'Интересы не выбраны';

    const city = document.getElementById('city').value || 'Город не выбран';

    // Сообщения об ошибках
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = '';  // Очистка предыдущих сообщений
    let isValid = true;
    let message = '';

    // Валидация полей
    if (name.length < 3) {
        message += 'Имя должно содержать минимум 3 символа.\n';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message += 'Неверный формат email.\n';
        isValid = false;
    }

    if (age <= 0 || isNaN(age)) {
        message += 'Возраст должен быть положительным числом.\n';
        isValid = false;
    }

    if (!city) {
        message += 'Пожалуйста, выберите город.\n';
        isValid = false;
    }

    if (!isValid) {
        errorMsg.textContent = message;  // Отображение ошибок
        event.preventDefault();  // Предотвращение отправки формы при ошибках
    } else {
        // Если все данные корректны, выводим результат
        const result = 'Имя: ' + name + '\n' +
                       'Email: ' + email + '\n' +
                       'Возраст: ' + age + '\n' +
                       'Пол: ' + gender + '\n' +
                       'Интересы: ' + interestsText + '\n' +
                       'Город: ' + city;
        document.getElementById('result').innerText = result;  // Отображаем результат
        event.preventDefault();  // Останавливаем отправку формы для демонстрации
    }
});





document.getElementById('validationForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;
    let message = '';

    // Проверка на пустоту
    if (!username) {
        message += 'Имя пользователя не может быть пустым.\n';
        isValid = false;
    }
    
    // Проверка формата email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message += 'Неверный формат email.\n';
        isValid = false;
    }

    // Проверка длины пароля
    if (password.length < 6) {
        message += 'Пароль должен содержать минимум 6 символов.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(message);
        event.preventDefault();  // Отмена отправки формы
    }
});
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
if (!passwordPattern.test(password)) {
    message += 'Пароль должен содержать минимум одну букву и одну цифру.\n';
    isValid = false;
}