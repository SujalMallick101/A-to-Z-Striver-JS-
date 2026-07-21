let str = "sujal";

function reverseString(str) {
    let stack = [];
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (stack.length !== 0) {
        reversedStr += stack[stack.length - 1];
        stack.pop();
    }

    return reversedStr;

}

console.log(reverseString(str));