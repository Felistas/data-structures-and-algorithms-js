function selectionSort(arr){
    let sortedArray = [];
    for (var i=arr.length; i>0; i--){
        let temp = Math.min(...arr);
        let t = arr.indexOf(temp);
        let v = arr.splice(t, 1);
        sortedArray.push(temp);
    }
    return sortedArray;

}

let x = [16,8,34,67,2, -1, -100, 400, 5602];
console.log(selectionSort(x));