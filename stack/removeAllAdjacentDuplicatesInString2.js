let s = "deeedbbcccbdaa";
let k = 3;

function removeAllAdjacentDuplicatesInString2(s, k) {

    let stack = [];
    stack.push([s[0], 1]);

    for (let i = 1; i < s.length; i++) {
        if (stack.length === 0 || s[i] !== stack[stack.length - 1][0]) {
            stack.push([s[i], 1]);
        }
        else if (s[i] === stack[stack.length - 1][0] && stack[stack.length - 1][1] < k - 1) {
            stack[stack.length - 1][1]++;
        }
        else {
            stack.pop();
        }
    }

    let result = "";
    for (let i = 0; i < stack.length; i++) {
        result += stack[i][0].repeat(stack[i][1]);
    }

    return result;

}

console.log(removeAllAdjacentDuplicatesInString2(s, k));