// Функция для создания копии изображения и вставки на страницу
function insertPhotoCopy() {
    // Находим элемент с изображением
    const originalImage = document.querySelector('img');

    // Создаем новый элемент <img> для копии
    const copiedImage = document.createElement('img');

    // Устанавливаем атрибуты для копии изображения
    copiedImage.src = originalImage.src;
    copiedImage.alt = originalImage.alt;
    copiedImage.title = originalImage.title;

    // Вставляем копию изображения после элемента с фамилией, именем и отчеством
    const nameHeader = document.querySelector('h1');
    nameHeader.insertAdjacentElement('afterend', copiedImage);
}

// Находим элемент с изображением
const originalImage = document.querySelector('img');

// Добавляем обработчик события наведения мыши на изображение
originalImage.addEventListener('mouseover', function() {
    insertPhotoCopy();
});
