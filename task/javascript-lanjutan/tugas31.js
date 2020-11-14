const deretAngka = (n) => {
  let res = "";

  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "NIOMIC ";
    } else if (i % 3 === 0) {
      res += "NIO ";
    } else if (i % 5 === 0) {
      res += "MIC ";
    } else {
      res += i + " ";
    }
  }

  return res;
};

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
