// Задача 1 (Фибоначи - последовательность, где кадое число это сумма двух предыдущих)
//Формула (fn = Fn-1 + Fn-2)
function fib(n){
    if(n<=2){
        return 1;
    }
    return fib(n - 1) + (n - 2);
}
console.log(fib(3)) // 2
console.log(fib(17)) // 121
console.log(fib(33)) // 497

// Задача 2 на сортировку. Сортировка пузырьком
let arr = [3, 2, 10, -2, 0];
let arr1 = [8, 16, 84, -82, 35];

function bubbleSort (arr){
    let leng = arr.length;
    for(let i = 0; i < leng; i++){
        for(let j= 0; j< leng - 1 - i; j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
            
        }
    }
}
return arr;
}
console.log(bubbleSort(arr)); 
console.log(bubbleSort(arr1)); 

//3. Задача на алгоритм Дейкстры
//Граф 1
const graph ={
    'Начало': {'A': 5, 'B': 2},
    'A': { 'C': 4, 'D': 2 },   
    'B': { 'A': 8, 'D': 7 },       
    'C': { 'D': 6, 'Конец': 3 },   
    'D': { 'Конец': 1 },           
    'Конец':  {}
};
const graph2 = {
    'Начало': { 'A': 10 },
    'A': { 'C': 20 },   
    'B': { 'A': 1 },       
    'C': { 'Конец': 30, 'B': 1 },   
    'D': { },           
    'Конец':  {}
}

function dijkstraSimple(graph, startNode, endNode){
    const distances = {}; // самое короткое известное расстояние от старта до каждой вершины
    const sequence = new Set(); // это список вершин
    const previous = {} // для восстановления пути (кто был предыдущим)
    for (let node in graph){ //Цикл, который проходит по всем вершинам графа и заполняет контейнеры начальными значениями.
        distances[node] = Infinity;
        previous[node] = null;
        sequence.add(node);
    }
    distances[startNode] = 0;
        // Пока есть необработанные вершины
        while(sequence.size > 0) {
            let current = null; // вершина, которую обрабатываем сейчас
            let minDistance = Infinity;
            for(let node of sequence){ // перебираем все необработанные вершины
                if(distances[node] < minDistance){
                    minDistance = distances[node];
                    current = node; 
                }
            }
            // Если дошли до конца или оставшиеся вершины недостижимы - выходим
            if( current === null || current=== endNode) break;
            sequence.delete(current);
                    // Проверяем всех соседей текущей вершины
            for(let neighbor in graph[current]){
                const weight = graph[current][neighbor]; // достаем вес (стоимость) ребра от текущей вершины до соседа.
                const newDist = distances[current]+weight;
                // Если нашли путь короче, чем был - обновляем (Мы проверяем: новый путь короче старого?)
                if(newDist < distances[neighbor]){
                    distances[neighbor] = newDist;
                    previous[neighbor] = current;
                }
            }
        }
        // Восстановление пути (идем с конца назад по previous)Берем конечную вершину и начинаем "идти назад".
        const path =[];
        let currentEnd = endNode;
        while(currentEnd !== null){
            path.unshift(currentEnd);
            currentEnd = previous[currentEnd];
        }
            return {
        distance: distances[endNode],
        path: path
    };
}
console.log(dijkstraSimple(graph, 'Начало', 'Конец'));
console.log(dijkstraSimple(graph2, 'Начало', 'Конец'));