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
    for(let i = 0; i <collection.length; i++) {
        if(collection[i]) {
            let inArray = collection[i];
            for(let ii = 0; ii<inArray.length; ii++) {
                sortedArr.push(inArray[ii]);
            }
        }
    }

    return sortedArr;
}