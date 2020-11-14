// A. Destructuring Return Value

// function penjumlahanPerkalian(a, b)
// {
// 	return [ a + b, a * b, a - b, a / b ];
// }

// // const penjumlahan = penjumlahanPerkalian(2,3)[0];
// // const perkalian = penjumlahanPerkalian(2,3)[1]
// const [ penjumlahan, perkalian, pengurangan ] = penjumlahanPerkalian(2, 3);
// console.log(perkalian);
// console.log(penjumlahan);
// console.log(pengurangan);

// function kalkulasi(a, b)
// {
// 	return {
// 		penjumlahan: a + b,
// 		pengurangan: a - b,
// 		perkalian: a * b,
// 		pembagian: a / b
// 	};
// }

// const { perkalian, pembagian, penjumlahan, pengurangan } = kalkulasi(2, 3);
// console.log(penjumlahan);

// B. Destructuring Argument atau Parameter
const mhs1 = {
	nama: 'Mathius Kormasela',
	usia: 18,
	nilai: {
		tugas: 85,
		uts: 85,
		uas: 87
	}
};

function cetak({ usia: sai, nama: nawa, nilai : { uas, uts, tugas } })
{
	return `Halo nama saya ${nawa}, saya ${sai} tahun dan nilai UAS saya ${uas}.`;
}

const result = cetak(mhs1);
console.log(result);
