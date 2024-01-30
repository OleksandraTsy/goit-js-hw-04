function filterArray(numbers, value) {

    // Створи порожній масив, у який будеш додавати підходящі числа.
    const resultArray = [];

    // Використай цикл для ітерації кожного елемента масиву numbers.
    for (let i = 0; i < numbers.length; i += 1){
        const number = numbers[i];

        // Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
        if (number > value) {
        resultArray.push(number);
        }
    }

// Поверни свій новий масив з підходящими числами як результат.
return resultArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]