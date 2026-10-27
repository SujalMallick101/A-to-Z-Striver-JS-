let arr = [10, 20, 30, 40];

function previousGreaterElement(arr) {
    let st = [];
    let ans = [];

    st.push(arr[0]);
    ans.push(-1);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < st[st.length - 1]) {
            ans.push(st[st.length - 1]);
        }
        else {
            while (st.length > 0 && arr[i] >= st[st.length - 1]) {
                st.pop();
            }
            if (st.length === 0) {
                ans.push(-1);
            }
            else {
                ans.push(st[st.length - 1]);
            }
        }
        st.push(arr[i]);
    }

    return ans;
}

console.log(previousGreaterElement(arr));