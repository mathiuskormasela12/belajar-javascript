const balikKata = (kata) => {
  let words = kata.split("");

  words = words.reverse();

  return words.join("");
};

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Java_Barat"));
