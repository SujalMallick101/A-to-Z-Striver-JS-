let arr = [1, 6, 2];

function previousSmallerElement(arr) {
    let st = [];
    let ans = [];

    st.push(arr[0]);
    ans.push(-1);

    for (let i = 1; i < arr.length; i++) {
        if (st[st.length - 1] < arr[i]) {
            ans.push(st[st.length - 1]);
        }
        else {
            while (st.length > 0 && st[st.length - 1] >= arr[i]) {
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

console.log(previousSmallerElement(arr));