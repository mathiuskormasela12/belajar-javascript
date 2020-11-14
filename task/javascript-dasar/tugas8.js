var biodata = {
  name: 'Mathius Kormasela',
  age: 18,
  favoriteColor: 'Blue',
  futureGoals: 'Software Engineering',
  hobbies: ['Playing Music', 'Coding','Write a Poetry']
};

const showBiodata = () => 
{
  console.log("===== My Biodata =====");
  console.log("Nama :", biodata.name);
  console.log("Usia :", biodata.age + ' tahun');
  console.log("Warna Favorit :", biodata.favoriteColor);
  console.log("Cita-Cita :", biodata.futureGoals);
  console.log("Hobi :", biodata.hobbies[0] + ', ' + biodata.hobbies[1] + ', ' + biodata.hobbies[2]);

  console.log("");
}

const editProperty = () =>
{
  biodata.futureGoals = 'Software Engineer';
}

showBiodata();
editProperty();
showBiodata();