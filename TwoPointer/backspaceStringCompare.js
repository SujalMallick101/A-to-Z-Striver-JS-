let s="ab##";
let t="c#d#";

//brute force approach
function backspaceStringCompare(s,t){
    
    let s1="";
    let t1="";

    for(let i=0;i<s.length;i++){
        if(s[i]!=="#"){
            s1+=s[i];
        }
        else{
            s1=s1.slice(0,-1);
        }
    }

    for(let i=0;i<t.length;i++){
        if(t[i]!=="#"){
            t1+=t[i];
        }
        else{
            t1=t1.slice(0,-1);
        }
    }

    return s1===t1;
    
}

console.log(backspaceStringCompare(s,t));