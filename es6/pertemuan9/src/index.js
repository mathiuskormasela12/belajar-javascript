/*
	====== Belajar Import & Export ======

	Import dan export berfungsi untuk menyatukan
	dua atau lebih file menjadi satu file.

	Export untuk membuat sebuah atau
	beberapa kode dalam Javascript agar
	dapat dilakukan import.

	Import untuk mengambil kode-kode
	javascript yg sudah di export.

	Rumus :
	Untuk mengimport satu atau lebih kode
	import { namaObject } from 'url'

	Untuk mengexport satu atau lebih kode
	export { namaObject }

	Untuk mengimport semua kode
	import * as namaAlias from 'url'

	Untuk mengexport semua kode
	export * from 'url'
*/
// import { member } from './app/member';
// import { forum } from './app/forum';
import * as data from './app';

console.log(data.member);
console.log(data.forum);