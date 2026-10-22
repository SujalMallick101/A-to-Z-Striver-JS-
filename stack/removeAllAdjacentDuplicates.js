let str = "abbac";

function removeAllAdjacentDuplicates(str) {
    const st = [];

    for (let i = 0; i < str.length; i++) {
        if (st.length === 0 || st[st.length - 1] !== str[i]) {
            st.push(str[i]);
        }
        else if (st[st.length - 1] === str[i]) {
            st.pop();
        }
    }

    return st.join("");
}

console.log(removeAllAdjacentDuplicates(str));