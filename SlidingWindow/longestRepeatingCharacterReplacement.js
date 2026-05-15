let s = "AABABBA";
let k = 1;

function characterReplacement(s, k) {
    let l = 0;
    let h = 0;
    let maxFreq = 0;
    let res = 0;
    let map = new Map();

    while (h < s.length) {
        let ch = s[h];
        map.set(ch, (map.get(ch) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(ch));

        while ((h - l + 1) - maxFreq > k) {
            let leftCh = s[l];
            map.set(leftCh, map.get(leftCh) - 1);
            l++;
        }

        res = Math.max(res, h - l + 1);
        h++;
    }

    return res;

}
console.log(characterReplacement(s, k));