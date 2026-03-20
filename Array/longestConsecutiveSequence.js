let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

function longestConsecutive(nums) {
    let n = nums.length
    if (n == 0) return 0

    let set = new Set()
    for (let num of nums) {
        set.add(num)
    }

    let longest = 1

    for (let num of set) {
        if (set.has(num - 1)) {
            continue
        }
        let count = 1
        let currentNum = num + 1;
        while (set.has(currentNum)) {
            count++
            currentNum++
        }
        longest = Math.max(longest, count)
    }
    return longest
}

console.log(longestConsecutive(nums))