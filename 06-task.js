// Task 6

// Задание:
// Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let max = -Infinity;
let min = Infinity;
let a = 0;
let b = 0;



for (let i=0; i<values.length; i++){
     if(values[i]>max){
         a = i;
        max = values[i]
        
    }
    else if(values[i]<min){
        b = i;
        min = values[i]
    }
}
if (values.length > 0){
    values[a]= min;
    values[b]= max;
}

console.log(values);
