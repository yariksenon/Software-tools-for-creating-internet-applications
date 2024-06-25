alert('2 способ');


console.log("if");
let year = prompt('Сколько дней в неделе', '');
if (year == 7) console.log( 'Вы правы!' );

console.log("switch,break")
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
}


console.log("while");
var i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    console.log( i );
  i++;
}

console.log("do..while");
let g = 0;
do {
    console.log( g );
  g++;
} while (g < 3);

console.log("for");
for (let f = 0; i < 3; f++) { // выведет 0, затем 1, затем 2
    console.log(f);
  }

console.log("continue");
for (let a = 0; a < 10; a++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (a % 2 == 0) continue;
  
    console.log(a); // 1, затем 3, 5, 7, 9
}

console.log("return");
function magic(x) {
    return function calc(x) {
      return x * 42;
    };
  }
  
  var answer = magic();
  answer(1337); // 56154