//
// Task 1
//
//     Задание:
//     Напишите сценарий, который найдет минимальное, максимальное значения массива,
//     а также выведет сумму всех элементов массива.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max=values[0];
let min=values[0];
let total=0;


for (let i=0; i<values.length; i++){
     if(values[i]>max){
        max = values[i]
        
    }
    else if(values[i]<min){
        min= values[i]
    }
    total+=values[i]

}

alert(`Максимальное значение массива: ${max},\nМинимальное значение массива: ${min},\nСумма всех значенией: ${total}`);
