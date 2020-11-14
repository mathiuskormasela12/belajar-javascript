const text = 'Mina-san konnichiwa watashi wa Mathius. Indonesia kara kimashita';

// mengambali karakter b - g
// b c d e f g
// console.log( text.match( /[b-g]/gi ) );

// mengambil karakter watashi
// console.log( text.match( /watashi/gi ) );

// mengambil karakter yg bukan huruf vokal
// console.log( text.match( /[^aiueo]/gi ) );

// mengambil karakter w dan h
// console.log( text.match( /[wh]/gi ) )

// test untuk mengecek disuatu string ada gk karakter tertentu
// console.log( /[zx]/g.test( text ) );

// exec untuk mengecek di suatu string ada gk karakter tertentu
// klo ada tampilih infonta
// klo ndak tampilin null
// console.log( /kore/gi.exec( text ) );