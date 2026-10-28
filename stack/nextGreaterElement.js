let arr = [5, 7, 4, 12, 1];

function nextGreaterElement(arr) {
    let st = [];
    let ans = [];

    st.push(arr[arr.length - 1]);
    ans[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < st[st.length - 1]) {
            ans[i] = st[st.length - 1];
        }
        else {
            while (st.length > 0 && arr[i] >= st[st.length - 1]) {
                st.pop();
            }
            if (st.length == 0) {
                ans[i] = -1;
            }
            else {
                ans[i] = st[st.length - 1];
            }
        }
        st.push(arr[i]);
    }
    return ans;
}

console.log(nextGreaterElement(arr));