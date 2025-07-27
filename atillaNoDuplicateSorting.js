/**
 * Created by ZeroInfinity on 8/6/2017.
 */

function AtillaNoDuplicateSorting(numbers) {
  let collection = [];
  let minNumber;
  let middle = Math.floor((numbers.length - 1) / 2) + 1;
  let quarter = Math.floor((middle - 1) / 2) + 1;
  let third = middle + quarter;

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

  // return collection;
  let sortedArr = [];
  //  let sortedArrSet = new Set(collection);
  //for (let i = minNumber; i < collection.length; i++) {

  collection.forEach((i) => {
    if (collection[i]) {
      sortedArr.push(collection[i]);
    }
  });
  // console.log(`minNumber is ${minNumber}`);
  return sortedArr;
}

function generateRandomNumbersByquantityAndMax(quantity, max, min) {
  const arr = [];
  
  while (arr.length < quantity) {
    var candiateInt = Math.floor(Math.random() * (max - min) + min);
    arr.push(candiateInt);
  }

  return arr;
}

let numbers = generateRandomNumbersByquantityAndMax(1000000, 1000000, 900000);

console.time('sorting');
let sorted = AtillaNoDuplicateSorting(numbers);
console.timeLog('sorting');
console.timeEnd('sorting');
console.log('sorted', sorted.length);
