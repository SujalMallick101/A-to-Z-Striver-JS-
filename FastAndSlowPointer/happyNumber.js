let n=19;

function happyNumber(n) {
    let sum=0;
    while(true){
        while(n>0){
            let digit = n%10;
            sum+=digit*digit;
            n=Math.floor(n/10);
        }
        if(sum===1) return true;
        if(sum===4) return false;
        n=sum;
        sum=0;
    }
}