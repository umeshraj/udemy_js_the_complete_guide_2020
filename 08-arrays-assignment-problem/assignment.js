// PART 1
// ======

// const myArray = [1, 5, 6, 10, 12, 3, 9];
const myArray = [1, 2, 3, 4];
console.log(myArray);

// filter
const filtArray = myArray.filter(num => num > 5);
console.log(filtArray);

// map
const mapArray = myArray.map(num => ({ num: num }));
console.log(mapArray);

// reduce
const product = myArray.reduce((prevVal, nextVal) => prevVal * nextVal, 1);
console.log(product);

// PART 2
// ======
console.log("PART 2");
const findMax = (...args) => {
  let curMax = args[0];
  for (const num of args) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
};

console.log(findMax(...myArray));

// PART 3
// ======
console.log("PART 3");
function findMinMax(...nums) {
  let curMin = nums[0];
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }

    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [myMin, myMax] = findMinMax(...myArray);
console.log(myMin, myMax);

// PART 4
// ======
console.log("PART 4");
const oldList = [1, 1, 2, 3, 4];
const list = new Set(oldList);
list.add(5);
list.add(1);
console.log(list);
