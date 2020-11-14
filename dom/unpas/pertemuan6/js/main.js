/* 
   ===== Belajar Memanipulasi Node =====

   a. Membuat Element Baru
      Untuk membuat element baru pada
      dokumen web, kita dapat menggunakan
      method createElement. 

      rumus :
      document.createElement('nama element baru yg ingin dibuat')
   
   b. Membuat Node Text Baru untuk Element yg Baru di buat
      Kita dapat menggunakan method createTextNode
      untuk menambahkan node text baru. 

      rumus :
      document.createTextNode('text baru'); 
   
   c. Memasukan Element Baru kedalam sebuah
      element untuk menjadi child nodenya
      Kita dapat menggunakan method
      appendChild(). 

      rumus :
      Javascript tolong masukan
      elementB kedalam elementA sebagai
      childe node terakhirnya.
      elementA.appendChild(elementB)
   
   d. Memasukan Element Baru kedalam sebuah
      element untuk menjadi child nodenya
      namun sebelum node tertentu. 
      Kita dapat menggunakan method
      insertBefore(). 

      rumus :
      Javascript tolong masukan elementA
      kedalam elementB menjadi child node
      dari elementB namun sebelum elementC
      elementB.insertBefore(elementA, elementC);
   
   e. Menghapus Element
      Untuk menghapus sebuah element dengan
      JavaScript kita dapat menggunakan method
      removeChild. 

      rumus :
      JavaScript tolong hapus elementB
      yg merupakan child node dari
      elementA. 
      elementA.removeChild(elementB);
   
   f. Mengubah Element
      Untuk mengubah element kita dapat
      menggunakan method replaceChild(). 

      rumus :
      Javascript tolong ubah elementLama menjadi
      elementBaru dari dalam elementA.
      elementA.replaceChild(elementBaru, elementLama)
*/
const sectionOne = document.getElementById('one');

// membuat element baru
const pBaru = document.createElement('p');
// membuat text baru untuk element baru
const textPBaru = document.createTextNode('Paragraf Baru');
// memasukan text baru kedalam element baru sebagai
// child node dari element yg baru dibuat
pBaru.appendChild(textPBaru);

// memasukan element yg baru dibuat
// kedalam section dengan id one yg
// sudah di selection
sectionOne.appendChild(pBaru);

const ul = document.querySelector('section#two ul');
const li2 = ul.querySelector('li:nth-child(2)');
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);

// memasukan element yg baru kedalam element ul
// sebagai child node ke 2
ul.insertBefore(liBaru, li2);

// Menghapus element
const section1 = document.getElementById('one');
const link = section1.getElementsByTagName('a')[0];
section1.removeChild(link);

// Mengubah suatu element
const section2 = document.getElementById('two');
const p = section2.querySelector('p');
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Belajar DOM');
h2Baru.appendChild(textH2Baru);
section2.replaceChild(h2Baru, p);

pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';