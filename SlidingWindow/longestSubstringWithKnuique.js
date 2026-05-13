let s = "aabacbebebe";
let k = 3;

function longestSubstringWithKUnique(s, k) {
    let l = 0;
    let h = 0;
    let map = new Map();
    let res = Number.MIN_SAFE_INTEGER;

    while (h < s.length) {
        let ch = s[h];
        map.set(ch, map.get(ch) + 1 || 1);

        while (map.size > k) {
            let leftChar = s[l];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            l++;

        }
        if (map.size === k) {
            res = Math.max(res, h - l + 1);
        }
        h++;
    }
    return res === Number.MIN_SAFE_INTEGER ? -1 : res;
}

console.log(longestSubstringWithKUnique(s, k));