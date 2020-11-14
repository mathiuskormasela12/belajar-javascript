const panggilNestedArray = (value) => {
  value.forEach((item) => {
    item.forEach((items, index) => {
      if (index === 0) {
        console.log("id :", items);
      } else if (index === 1) {
        console.log("name :", items);
      } else {
        console.log("company :", items);
      }
    });

    console.log("");
  });
};

var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"],
];

panggilNestedArray(nestedArray);
