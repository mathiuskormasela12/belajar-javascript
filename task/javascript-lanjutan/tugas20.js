const searchWords = () => 
{
  var text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";

  console.log("======= Tugas 20 =======");
  console.log( text.match( /are/ ) );
  console.log( text.match( /words/ ) );
};

searchWords();