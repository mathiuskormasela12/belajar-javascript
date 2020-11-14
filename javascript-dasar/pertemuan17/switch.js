function testingSwitch()
{
  // var nilai = 10;

  /* 
    Switch case berfungsi untuk
    membandingkan sebuah kodisi. Fungsi
    dari switch case hampir sama dengan
    if. Switch case hanya membandingkan
    satu kondisi dan juga tak hanya membandingkan
    nilai tapi juga tipe data.
  */
  // switch (nilai)
  // {
  //   case 10:
  //     console.log("Sangat Bagus");
  //   break;

  //   case 8 :
  //     console.log("Baik");
  //   break;

  //   case 6 :
  //     console.log("Cukup");
  //   break;

  //   default :
  //     console.log("Lainnya");
  // }

  var nama = "Naruto";

  switch (nama)
  {
    case "Mathius":
      console.log("Matthew");
    break;
    
    case "Fadhli":
      console.log("Fad");
    break;

    case "Rizki Ramadhan":
      console.log("Kiko");
    break;

    case "Reza":
      console.log("Bara");
    break;

    default:
      console.log("Lainnya");

  }

  // let nama = "Mathius";

  // if( nama === "Mathius" ) console.log("Hai", nama);
  // else console.log("Salah");
}

testingSwitch();