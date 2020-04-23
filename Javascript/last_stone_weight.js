/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let stones_array = [...stones];
  let first_stone = 0;
  let second_stone = 0;
  let new_weight = 0;

  //compare function that sorts in descending order
  stones_array = stones_array.sort((a, b) => {
    return b - a;
  });

  while (stones_array.length > 1) {
    first_stone = stones_array.shift();
    second_stone = stones_array.shift();
    new_weight = 0;

    if (first_stone - second_stone > 0) {
      new_weight = first_stone - second_stone;
      stones_array.push(new_weight);
      stones_array = stones_array.sort((a, b) => {
        return b - a;
      });
    }
    console.log(stones_array);
    count++;
  }
  console.log("result", stones_array);
};

//compare function that sorts in descending order
function sortHelper(a, b) {
  return b - a;
}

let example_1 = [2, 7, 4, 1, 8, 1];

lastStoneWeight(example_1);
