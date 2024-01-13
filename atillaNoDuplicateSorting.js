/**
 * Created by ZeroInfinity on 8/6/2017.
 */

function AtillaNoDuplicateSorting(numbers) {
  let collection = [];
  let minNumber;
  let middle = Math.floor((numbers.length - 1) / 2);
  let quarter = Math.floor((middle - 1) / 2);
  let third = middle + quarter;

  console.log(`middle numbers is ${middle}`);
  console.log(`middle numbers is ${quarter}`);
  console.log(`middle numbers is ${third}`);
  // first iter is
  console.log('First Loop');

  for (let ni = 0; ni < quarter; ni++) {
    let tmp = numbers[ni];
    //console.log(`tmp is ${tmp}`);
    if (tmp > 0 && !minNumber) {
      minNumber = tmp;
    } else if (tmp > 0 && minNumber > tmp) {
      minNumber = tmp;
      //console.log(`min number is ${minNumber}`);
    }
    collection[tmp] = tmp;
  }

  for (let ni = quarter; ni < middle; ni++) {
    let tmp = numbers[ni];
    //console.log(`tmp is ${tmp}`);
    if (tmp > 0 && !minNumber) {
      minNumber = tmp;
    } else if (tmp > 0 && minNumber > tmp) {
      minNumber = tmp;
      //console.log(`min number is ${minNumber}`);
    }
    collection[tmp] = tmp;
  }
  for (let ni = middle; ni < numbers.length; ni++) {
    let tmp = numbers[ni];
    //console.log(`tmp is ${tmp}`);
    if (tmp > 0 && !minNumber) {
      minNumber = tmp;
    } else if (tmp > 0 && minNumber > tmp) {
      minNumber = tmp;
      //console.log(`min number is ${minNumber}`);
    }

    //console.log("Tmp number in distinct ----",tmp);
    //console.log("If condition in distinct --", !nNumbers[tmp]);
    //let arr = [];
    //arr.push(tmp);
    collection[tmp] = tmp;
  }

  return collection;
  let sortedArr = [];
  //  let sortedArrSet = new Set(collection);
  for (let i = minNumber; i < collection.length; i++) {
    if (collection[i]) {
      sortedArr.push(collection[i]);
    }
  }
  // console.log(`minNumber is ${minNumber}`);
  return sortedArr;
}
function MergeSort(numbers) {
  let collection = [];

  return AtillaNoDuplicateSortingMergeSort(numbers);

  function AtillaNoDuplicateSortingMergeSort(numbers) {
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
}
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
function generateRandomNumbersByquantityAndMax(quantity, max, min) {
  const arr = [];
  while (arr.length < quantity) {
    var candiateInt = Math.floor(Math.random() * (max - min) + min);
    arr.push(candiateInt);
  }

  return arr;
}

let numbers = generateRandomNumbersByquantityAndMax(1000000, 1000000, 90000);
let numbers2 = [...numbers];
console.dir(`numbers is ${numbers}`);

console.dir(`numbers2 is ${numbers2}`);
console.log(numbers.length);

console.time('quick sorting');
let quickSortsorted = quickSort(numbers, 0, numbers.length - 1);
console.timeLog('quick sorting');
console.timeEnd('quick sorting');
console.log('quick sorted', quickSortsorted.length);

// console.dir(`numbers is ${numbers}`);
numbers = generateRandomNumbersByquantityAndMax(1000000, 1000000, 10000);
console.time('sorting');
let sorted = AtillaNoDuplicateSorting(numbers2);
console.timeLog('sorting');
console.timeEnd('sorting');
console.log('sorted', sorted.length);

// console.time('merge sorting');
// let mergeSortsorted = MergeSort(numbers);
// console.timeLog('merge sorting');
// console.timeEnd('merge sorting');

// console.log('merge sorted', mergeSortsorted.length);

// console.log(numbers);

// console.log(sorted);
