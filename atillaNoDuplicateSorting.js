/**
 * Created by ZeroInfinity on 8/6/2017.
 */
function AtillaNoDuplicateSorting(numbers) {
  let collection = [];
  for (let ni = 0; ni < numbers.length; ni++) {
    let tmp = numbers[ni];
    //console.log("Tmp number in distinct ----",tmp);
    //console.log("If condition in distinct --", !nNumbers[tmp]);
    if (!collection[tmp]) {
      //let arr = [];
      //arr.push(tmp);
      collection[tmp] = [tmp];
    }
  }
  //return collection;
  let sortedArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i]) {
      sortedArr.push(collection[i]);
    }
  }

  return sortedArr;
}

function AtillaNoDuplicateSortingMergeSort(numbers) {
  let collection = [];
  for (let ni = 0; ni < numbers.length; ni++) {
    let tmp = numbers[ni];
    //console.log("Tmp number in distinct ----",tmp);
    //console.log("If condition in distinct --", !nNumbers[tmp]);
    if (!collection[tmp]) {
      //let arr = [];
      //arr.push(tmp);
      collection[tmp] = [tmp];
    }
  }
  //return collection;
  let sortedArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i]) {
      sortedArr.push(collection[i]);
    }
  }

  return sortedArr;
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr[left] = left;
    } else {
      sortedArr[righ] = right;
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

function generateRandomNumbersByquantityAndMax(quantity, max, min) {
  const arr = [];
  while (arr.length < quantity) {
    var candiateInt = Math.floor(Math.random() * (max - min) + min);
    arr.push(candiateInt);
  }

  return arr;
}

let numbers = generateRandomNumbersByquantityAndMax(1000000, 100000000, 1000);

console.time('start');
let sorted = AtillaNoDuplicateSorting(numbers);
console.timeEnd('start');
console.timeLog('start');
