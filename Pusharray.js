//menambahkan satu lebih item ke dalam elemen ke array
let array = [2,4,8,9];
array.push(4);
//menghapus elemen terakhir array
let angka = [10,3,20,4,6,6]
let removedElemen = angka.pop();
//menghapus elemen pertama\
let removeangkapertama = angka.shift();
//menambahkan elemen array
angka.unshift(90);
//menggabungkan dua atau lebih array menjadi array yang baru
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arraybaru = arr1.concat(arr2);
//menjalankan looping
let arrloop = [1,2,3];
arrloop.forEach(element =>{
    console.log(element*2);
});
let arrmap = [1,4,6,1];
let ArrayMap = arrmap.map(function(element){
    return element*4;
});
console.log(angka);
console.log(array);
console.log(removeangkapertama);
console.log(arr1);
console.log(arr2);
