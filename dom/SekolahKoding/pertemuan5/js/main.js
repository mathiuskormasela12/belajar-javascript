/* 
  ===== Belajar Mengedit Element =====

  A. Membuat element baru
    const namaElementBaru = document.createElement('nama elemen baru');
    const textElementBaru = document.createTextNode('text elemen baru');
    namaElementBaru.appendChild(textElementBaru);
    const elementParent = document.getElementById('id element parent');
    elementParent.appendChild(namaElementBaru);

  B. Menghapus Element
     parentElement.removeChild(object element yg mau dihapus);

  C. Mengubah Element
     const elBaru = document.createElement('elemen baru');
     const textElBaru = document.createTextNode('text elemen baru');
     elBaru.appendChild(textElBaru);
     parentElement.replace(elBaru, elLama);
*/

// Belajar Membuat Element
// membuat element h2
const h2 = document.createElement('h2');

// membuat textnya untuk element h2
const texth2 = document.createTextNode('Belajar DOM JavaScript');

// menggabungkan element h2 dengan text h2
h2.appendChild(texth2);

// memilih element dengan class box1
const box = document.getElementById('box1');

// memasukan element baru yaitu element h2
// kedalam element box
box.appendChild(h2);


// Belajar Menghapus Element
// memilih element yg ingin dihapus
const el = document.getElementById('box2');
// menghapus element yg sudah dipilih yg merupakan
// child dari element box
box.removeChild(el);

// Belajar Mengubah Element
const h1 = document.createElement('h1');
const h1text = document.createTextNode('Hello JavaScript');
h1.appendChild(h1text);
const lama = document.getElementById('hello');
box.replaceChild(h1, lama);


