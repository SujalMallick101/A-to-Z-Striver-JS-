let arr = [4, 8, 5, 2, 25];

function nextSmallerElement(arr) {
    let st = [];
    let ans = [];

    st.push(arr[arr.length - 1]);
    ans[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > st[st.length - 1]) {
            ans[i] = st[st.length - 1];
        }
        else {
            while (st.length > 0 && arr[i] <= st[st.length - 1]) {
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

console.log(nextSmallerElement(arr));