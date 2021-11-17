Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
function slugify(title) {
  
return title.toLowerCase().split(' ').join('-');

}


Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2, 5);

Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
let newArray = firstArray.concat(secondArray);
  if (newArray.length>maxLength) {
    return newArray.slice(0,maxLength) }
  
  return newArray;


    // Change code above this line
}
  
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
 // Change code below this line
let total = 0;
  for(let i = total; i <= number; i++) {
    total += i}
  
 
      return total;


  // Change code above this line
}

Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.


const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for(let i = 0; i < order.length; i += 1) {
  total += order[i]
}
  // Change code above this line
  return total;
}

Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // Change code below this line
let newString = string.split(' ');
  let word = newString[0];
  
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i].length > word.length) {
      word = newString[i];
    }
  }
  
  return word;
    


  // Change code above this line
}

Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for(let i = min; i <= max; i ++)
  numbers.push(i)
  
  // Change code above this line
  return numbers;
}

