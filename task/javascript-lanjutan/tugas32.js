const panggilNestedArray = (value) => {
  const newArr = [];

  for (var i = 0; i <= value.length; i++) {
    let j = [];

    value.forEach((items, index) => {
      var x = items.shift();
      j.push(x);
    });

    newArr.push(j);
  }

  console.log(newArr);
};

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
