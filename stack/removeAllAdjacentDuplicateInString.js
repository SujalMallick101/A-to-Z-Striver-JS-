let str = "azxxzy";

function removeAllAdjacentDuplicateInString(str) {
    let stack=[];
    stack.push(str[0]);
    
    for(let i=1; i<str.length; i++){
        if(stack.length>0 && stack[stack.length-1]===str[i]){
            stack.pop();
        }

        else{
            stack.push(str[i]);
        }
    }

    let result= stack.join('');
    return result;
}

console.log(removeAllAdjacentDuplicateInString(str));