let arr=[5,4,3,2,1];
let n=arr.length;

function buyAndSellStock(arr,n){
    let purchase=arr[0];
    let maxProfit=0;
    for(let i=1;i<n;i++){
        if(arr[i]<purchase){
            purchase=arr[i];
        }
        else if(arr[i]>purchase){
            let profit=arr[i]-purchase;
            maxProfit=Math.max(profit,maxProfit);
        }
    }
    return maxProfit;
}

console.log(buyAndSellStock(arr,n));