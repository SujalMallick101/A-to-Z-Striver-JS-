let str="sujal";

function reverseString(str){
    const st=[];

    for(let ch of str){
        st.push(ch);
    }

    let reversedStr="";

    while(st.length>0){
        reversedStr+=st.pop();
    }

    return reversedStr;
}

console.log(reverseString(str));