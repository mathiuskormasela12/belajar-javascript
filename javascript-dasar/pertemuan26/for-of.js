var angka = [1, 3, 4, 7, 9 ];

/* 
  For-Of berfungsi untuk menampilkan
  nilai-nilai pada array. Dengan for-of
  kita tidak perlu menuliskan index nya lagi.

  x = variable yang akan digunakan untuk 
      menampung array yang ingin kita tampilkan.
  angka = array yang ingin ditampilkan

  keterangan :
  variable x dan angka
  harus merupakan variable yang 
  berbeda, tidak boleh
  let angka of angka
  ataupun x of x.
*/
for( let x of angka )
{
  console.log(x);
}