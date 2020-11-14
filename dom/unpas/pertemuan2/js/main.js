/* 
  ===== Terminologi Dalam DOM =====

  A. Dom Tree
    a. Node
       Node atau simpul adalah sebuah
       element, attribute dan juga text
       yg berada dalam DOM. Node terbagi
       atas beberapa tipe yaitu node element,
       node text dan node attribute.
    b. NodeList
       NodeList adalah sebuah kumpulan
       dari node attribute, node element
       dan node text. 
    c. HTMLCollection
      HTMLCollection adalah sebuah
      kumpulan node element. 
  
  B. Struktur Dom Tree
     a. Root Node
        Merupakan node akar atau
        node awal yang di dalamnya terdapat
        node-node batang, daun dll.
        default dari root node adalah
        document.
     b. Parent Node
        Merupakan node yang memiliki
        satu atau lebih anak node. 
        Dengan kata lain parent node
        adalah sebuah node yg berada 
        diatas satu tingkat
     c. Accestor Node
        Merupakan node kakek atau nenek. 
        Dengan kata lain sebuah node
        yang berada diatas dua tingkat
        atau lebih. 
     d. Child Node
        Merupakan node yg berada 
        dibawah satu tingkat
        dari node lainya atau katalainya
        adalah anak dari parent node. 
     e. Descendent Node
        Merupakan node cucu atau
        node yg berada dibawah
        lebih dari satu tingkat. 
  
*/
console.log(document);