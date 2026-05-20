let s = "abcabc";

function numberOfSubstrings(s) {
    let l = 0;
    let h = 0;
    let count = 0;
    let map = new Map();

    while (h < s.length) {
        let ch = s[h];
        map.set(ch, (map.get(ch) || 0) + 1);
        while (map.size === 3) {
            count += s.length - h;
            let leftCh = s[l];
            map.set(leftCh, map.get(leftCh) - 1);
            if (map.get(leftCh) === 0) {
                map.delete(leftCh);
            }
            l++;
        }
        h++;
    }
    return count;
}

console.log(numberOfSubstrings(s));