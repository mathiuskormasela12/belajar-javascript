const manipulasiDeretAngka = (n) => {
  let res = "";
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      res += "NIO ";
    } else if (i % 5 === 0) {
      res += "MIC ";
    } else {
      res += i + " ";
    }
  }

  return res;
};

console.log(manipulasiDeretAngka(10));
