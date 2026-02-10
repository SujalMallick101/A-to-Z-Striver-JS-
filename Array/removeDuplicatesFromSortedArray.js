const arr=[0,0,3,3,5,6];

function removeDuplicatesFromSortedArray(arr) {
    if (arr.length === 0) return 0;

    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[j]===arr[i]){
            j++;
        }
        else if(arr[j]!==arr[i]){
            arr[i+1]=arr[j];
            i++;
            j++;
        }
    }
    return i+1;
}

console.log(removeDuplicatesFromSortedArray(arr)); 