let s = "bbbbb";

function lengthOfLongestSubstring(s) {
    let l = 0;
    let h = 0;
    let map = new Map();
    let res = 0;

    while (h < s.length) {
        let ch = s[h];
        if (!map.has(ch)) {
            map.set(ch,1);
            let len=h-l+1;
            res = Math.max(res, len);
            h++;
        }
        else if (map.has(ch)) {
            map.delete(s[l]);
            l++;
        }
    }
    return res;
}

console.log(lengthOfLongestSubstring(s));
