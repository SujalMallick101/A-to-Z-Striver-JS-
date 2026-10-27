let s="([)]";

function isValid(s) {
    let st=[];

    for(let ch of s){
        if(ch==='(' || ch==='{' || ch==='['){
            st.push(ch);
        }
        else{
            if(st.length===0) return false;
            if(ch===')' && st[st.length-1]==='(' || ch===']' && st[st.length-1]==='[' || ch==='}' && st[st.length-1]==='{'){
                st.pop();
            }
            else{
                return false;
            }
        }
    }
    return st.length===0;
}

console.log(isValid(s));