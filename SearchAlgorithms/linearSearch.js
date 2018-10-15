/*
loop through each element in the given array
and return the index of num once you find it 
in the array
*/
function linearSearch(arr, num){
    for (var i=0; i<=arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    console.log("Not found");
}

let x = [5,6,7];
console.log(linearSearch(x, -7));