let r = 5;
let c = 3;

function pascal(r, c) {
    let res = 1;
    for (let i = 0; i < c - 1; i++) {
        res = res * (r - 1 - i);
        res = res / (i + 1);
    }
    return res;

}


console.log(pascal(r, c));