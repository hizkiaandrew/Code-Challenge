//Hizkia Code Challenge - Day 2
//Array Diff
//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

  const arrayDiff = (a, b) => {
    return a.filter((val) => !b.includes(val));
  };

console.log(arrayDiff([1, 2, 3], [1, 2]));
