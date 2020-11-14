const panggilNestedArray = (value) => {
  const newArr = [];

  for (let j = 0; j <= value.length; j++) {
    let array = [];

    value.forEach((e, i) => {
      var arr = e.slice(0, 1);
      array.push(arr[0]);
      e.shift();
    });

    newArr.push(array);
  }

  // console.log(newArr);
};

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
