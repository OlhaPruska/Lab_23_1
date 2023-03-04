// Написати реалізацію швидкого сортування масиву
function quickSort(array) {
  if (array.length < 2) return array;
  let pivot=array[0];
  let left=[];
  let right=[];
  for(let i=1;i<array.length;i++) {
    if(pivot>array[i]) {
        left.push(array[i]);
    } else {
        right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))


}

let arr=[1,6,3,5,2,9,21,3,66];
console.log(quickSort(arr))