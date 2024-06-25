// Функция для открытия окна с информацией о компьютере
function openComputerInfoWindow() {
    // Создаем новое окно
    var computerInfoWindow = window.open('', '_blank', 'width=400,height=300');

    // Проверяем, было ли создано новое окно
    if (computerInfoWindow) {
        // Заполняем окно информацией о компьютере
        computerInfoWindow.document.write('<html><body>');
        computerInfoWindow.document.write('<h1>Информация о компьютере</h1>');
        computerInfoWindow.document.write('<p>Ширина экрана: ' + screen.width + ' пикселей</p>');
        computerInfoWindow.document.write('<p>Высота экрана: ' + screen.height + ' пикселей</p>');
        computerInfoWindow.document.write('<p>Цветная глубина: ' + screen.colorDepth + ' бит</p>');
        computerInfoWindow.document.write('<p>Ориентация: ' + (screen.orientation.type.startsWith('portrait') ? 'портретная' : 'альбомная') + '</p>');
        computerInfoWindow.document.write('</body></html>');

        // Закрываем документ
        computerInfoWindow.document.close();
    } else {
        alert('Не удалось открыть новое окно. Возможно, в браузере заблокированы всплывающие окна.');
    }
}

// Функция для запуска периодического открытия окна с информацией
function startPeriodicWindows() {
    // Запускаем таймер, который будет вызывать функцию каждые 4 секунды
    var intervalId = setInterval(openComputerInfoWindow, 4000);

    // Останавливаем таймер через 20 секунд (для примера)
    setTimeout(function() {
        clearInterval(intervalId);
    }, 20000); // останавливаем через 20 секунд (20000 миллисекунд)
}

// Добавляем обработчик события на кнопку с id="start"
document.getElementById('start').addEventListener('click', startPeriodicWindows);
