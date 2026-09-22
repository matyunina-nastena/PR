//Напишите функцию, которая находит уникальный элемент в массиве

const arr1 = [0,0,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];
// 1 Вариант
const getUniqElement = (arr) => {
  const mapElement = new Map();
  arr.forEach(el=>{
    if(!mapElement.has(el)){
      mapElement.set(el, 1)
    } else {
      let count = mapElement.get(el);
      count ++;
      mapElement.set(el, count);
    }
  });
    for(let [key,value] of mapElement.entries()){
      if (value === 1){
        return key;
      }
    }
  return null
}
console.log(getUniqElement(arr1)); // 5
console.log(getUniqElement(arr2)); // 'sheep

// 2 Вариант
function getElement(arr) {
  const mapEl = new Map();
  arr.forEach(el=>{
    mapEl.set(el, (mapEl.get(el)|| 0) + 1)
  })
  for(let [key, value] of mapEl.entries()){
    if(value === 1 ){
      return key;
    }
  }
  return nulll
}
console.log(getElement(arr1)); // 5
console.log(getElement(arr2)); // 'sheep
