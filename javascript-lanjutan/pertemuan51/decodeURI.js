/* 
  ==== Belajar Fungsi decodeURI ====

  Fungsi decodeURI berfungsi untuk
  mengembalikan ke URI asli bagi URI
  yg sudah di encode dengan encodeURI.

  rumus:
  decodeURI( URI )
*/
var uri = "my test.asp?name=ståle&car=saab";
var resEncode = encodeURI( uri );

// untuk memecahkan URI yg sudah di encode
var resDecodeURI = decodeURI( resEncode );
console.log( resDecodeURI );
