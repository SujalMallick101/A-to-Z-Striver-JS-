let fruits = [0, 1, 2, 2];


function totalFruit(fruits) {
    let l = 0;
    let h = 0;
    let map = new Map();
    let res = 0;

    while (h < fruits.length) {
        let fruit = fruits[h];
        map.set(fruit, map.get(fruit) + 1 || 1);

        while (map.size > 2) {
            let leftFruit = fruits[l];
            map.set(leftFruit, map.get(leftFruit) - 1);
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            }
            l++;
        }

        res = Math.max(res, h - l + 1);

        h++;
    }
    return res;
}

console.log(totalFruit(fruits));