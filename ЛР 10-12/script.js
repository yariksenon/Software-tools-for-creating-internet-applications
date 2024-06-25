//Задание 4
function calculate(){
  let A;
  let x = document.querySelector(".num_x").value;
  let y = document.querySelector(".num_y").value;
  if (x == 0 && y == 0){
    alert("Введите значение не равное 0");
  } else{
    try {
      A = (3 + Math.pow((y - 1), 2)) / (1 + (x*x) * Math.abs(y - Math.cos(x)));
      document.querySelector(".result").value = A;
      return A;
    } catch (error) {
      alert("Ошибка вычисления: " + error.message);
    }
  }
}

//Задание 5
let s1 = "Зубарь"
let s2 = "АДРЕС"

console.log("Длина строки s2: " + s2.length);
console.log("Сцепление строк s1, s2: " + s1.concat(" " + s2));
console.log("Нижний регистр: " + s2.toLocaleLowerCase());