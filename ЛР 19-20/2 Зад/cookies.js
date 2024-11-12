document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.cookie = "fio=" + document.getElementById('fio').value + ";";
    document.cookie = "email=" + document.getElementById('email').value + ";";
    document.cookie = "dob=" + document.getElementById('dob').value + ";";
    document.cookie = "birthplace=" + document.getElementById('birthplace').value + ";";
    document.cookie = "hobbies=" + document.getElementById('hobbies').value + ";";
    alert('Данные сохранены в Cookie');
});

document.getElementById('getCookies').addEventListener('click', function() {
    let cookies = document.cookie.split("; ");
    let data = {};
    cookies.forEach(cookie => {
        let [key, value] = cookie.split("=");
        data[key] = value;
    });
    alert(JSON.stringify(data));
});

document.getElementById('clearCookies').addEventListener('click', function() {
    let cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
        let [key] = cookie.split("=");
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
    alert('Cookie очищены');
});

