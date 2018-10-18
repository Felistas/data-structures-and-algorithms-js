let swapped;
function bubbleSort(arr){
    for (var i=0; i<arr.length; i++) {
        let swapped = false;
        if(arr[i]>arr[i+1]){
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}

let x = [184,556,7,8];
do {
    bubbleSort(x);
} while (swapped);

console.log(bubbleSort(x));

