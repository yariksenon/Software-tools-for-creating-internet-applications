document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('fio', document.getElementById('fio').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('dob', document.getElementById('dob').value);
    localStorage.setItem('birthplace', document.getElementById('birthplace').value);
    localStorage.setItem('hobbies', document.getElementById('hobbies').value);
    alert('Данные сохранены в Local Storage');
});

document.getElementById('getLocalStorage').addEventListener('click', function() {
    let data = {
        fio: localStorage.getItem('fio'),
        email: localStorage.getItem('email'),
        dob: localStorage.getItem('dob'),
        birthplace: localStorage.getItem('birthplace'),
        hobbies: localStorage.getItem('hobbies')
    };
    alert(JSON.stringify(data));
});

document.getElementById('clearLocalStorage').addEventListener('click', function() {
    localStorage.clear();
    alert('Local Storage очищен');
});
