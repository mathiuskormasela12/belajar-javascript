let language = ['Javascript','PHP','Python'];

let g = confirm("Mau hapus ?");
let answer = prompt("Mau hapus apa ?");

let x = language.findIndex(item => 
{
  return item === answer;
})


 if(g) language.splice(x, 1);

language.forEach(items => 
{
  document.getElementById("root").innerHTML += items.concat(" ");
})
