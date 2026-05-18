let s = "ADOBECODEBANC";
let t = "ABC";

function minWindow(s, t) {
    if (s.length < t.length) {
        return "";
    }
    let tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let l = 0;
    let res = Number.MAX_SAFE_INTEGER;
    let freqMap = new Map();
    let start = 0;

    for (let h = 0; h < s.length; h++) {
        freqMap.set(s[h], (freqMap.get(s[h]) || 0) + 1);

        while (isValid(freqMap, tMap)) {
            let len = h - l + 1;
            if (res > len) {
                res = len;
                start = l;
            }
            freqMap.set(s[l], freqMap.get(s[l]) - 1);
            l++;
        }
    }
    if (res === Number.MAX_SAFE_INTEGER) {
        return "";
    }
    return s.substring(start, start + res);
}

function isValid(freqMap, tMap) {
    for (let [char, count] of tMap) {
        if ((freqMap.get(char) || 0) < count) {
            return false;
        }
    }
    return true;
}

console.log(minWindow(s, t));