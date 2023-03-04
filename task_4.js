// Знайти елемент із найбільшою частотою повторень 
function findMostFrequent(arr) {
    let freq = {};
    let maxFreq = 0;
    let mostFrequent = null;
    
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      freq[el] = (freq[el] || 0) + 1;
      if (freq[el] > maxFreq) {
        maxFreq = freq[el];
        mostFrequent = el;
      }
    }
  
    return mostFrequent;
}
let array=[1,5,3,5,3,2,2,4,4,4,4,5,8,8];
console.log( `The most frequent element is ${findMostFrequent(array)}`);