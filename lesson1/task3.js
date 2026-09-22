// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество


const arr = [10,8,3,2,3,1,2,1,5,6,8,9,4,3,2,4,7,8,6,43,1];



const getAllSubUniqArr = (arr) => {
  const lastIndex = new Map();
  let count = 0; // Счетчик уникальных подстрок
  let left = 0; // Левый указатель начала подстроки
  for(let right = 0; right < arr.length; right++){
    const current = arr[right];
// Если число уже есть в окне и его последний индекс >= left
    if(lastIndex.has(current) && lastIndex.get(current) >= left ){
// Сдвигаем левую границу за пределы предыдущего вхождения
      left = lastIndex.get(current)+1;
    }
  lastIndex.set(current, right);
   // Добавляем количество уникальных подстрок, заканчивающихся на right
  count += (right - left + 1);
  }
        const uniqueElements = new Set(arr).size; //количество уникальных чисел 
    return result = (count - uniqueElements); // (только подстроки длиной > 1)
}

       


console.log(getAllSubUniqArr(arr)); // 83
