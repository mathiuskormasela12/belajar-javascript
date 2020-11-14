const changeFontStyle = () =>
{
  console.log("====== Soal Nomor 1 ======");
  var text1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";

  console.log( text1.toLowerCase() );
  console.log( text1.toUpperCase() );

  var text2 = "Allen sedAng memAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
  console.log( text2.toLowerCase() );
  console.log( text2.toUpperCase() );
  console.log("");
}

changeFontStyle();

const getASCIICode = () =>
{
  var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  console.log("====== Soal Nomor 2 ======");
  console.log( text.charCodeAt(0) + '-' + text.charCodeAt(1) + '-' + text.charCodeAt(2) + '-' + text.charCodeAt(3) + '-' + text.charCodeAt(4) + '-' + text.charCodeAt(5));
}

getASCIICode();