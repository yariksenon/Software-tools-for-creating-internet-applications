document.getElementById('submit_button').addEventListener('click', function() {
    // Получаем все обязательные поля
    const requiredFields = document.querySelectorAll('[required]');
    const errorMessages = document.querySelectorAll('.error-message');

    // Сброс всех сообщений об ошибках
    errorMessages.forEach(message => {
        message.style.display = 'none';
    });

    // Проверяем, что все обязательные поля заполнены и корректны
    let allValid = true;
    requiredFields.forEach((field, index) => {
        if (!field.checkValidity()) {
            allValid = false;
            field.style.borderColor = 'red';
            // Показываем всплывающую подсказку
            const errorMessage = field.nextElementSibling;
            errorMessage.textContent = field.validationMessage;
            errorMessage.style.display = 'block';
        } else {
            field.style.borderColor = 'green';
        }
    });

    if (allValid) {
        alert('Форма заполнена корректно!');
        // Здесь можно отправить форму или выполнить другие действия
    } else {
        alert('Пожалуйста, заполните все обязательные поля корректно.');
    }
});
