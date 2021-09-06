// Task 7

// Задание:
// Дано массив. Найдите среднее арифметическое для значений этого массива.
// Выведите на экран только те элементы, которые больше этого среднего арифметического значения

let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
let total=0;


for (let i=0; i<values.length; i++){
    total+=values[i];
}
if (values.length > 0){
    let middle = total/values.length;
    console.log(middle);

    for (let j=0; j<values.length; j++){
        if(values[j] > middle ){
            console.log(values[j]);
        }
    }
}