// Напишите функцию, которая принимает число n и возвращает n чаще всего встречающихся элементов в массиве

const arr1 = [0,0,1,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getPopularItems = (arr, n) => {
 const countMap = new Map();
 arr.forEach(el => {
  countMap.set(el, (countMap.get(el)|| 0) + 1);
 });
 const counrEentries = [...countMap];
 const sorted = counrEentries.sort((a,b) => b[1] - a[1]);
 const sortSlice = sorted.slice(0, n);
 const result = sortSlice.map(([key]) => key);
 return result;
}

console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']