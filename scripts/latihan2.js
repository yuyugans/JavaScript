var arr = ['tes', 'nyoba', 'damn']
var posArr = arr.indexOf('nyoba')
var valArr = arr.includes('nyoba')
const setelah = posArr + 1
//const akhir = arr.pop() //mengambil nilai array akhir
const awal = arr.push() //mengambil nilai array awal
const panjang = arr.length //panjang array
const akhir2 = arr[arr.length - 1] // cara ribet


if (valArr){
    document.writeln('itu terdapat di index ke-'+posArr+"<br>")
    document.writeln('setelah index nyoba itu adalah '+setelah+"<br>")
    //document.writeln(akhir+"<br>")
    document.writeln(akhir2+"<br>")
    document.writeln('panjang dari keseluruhan array adalah '+panjang)
}else{
    document.writeln("gada anjing")
}
/*------------array alica key----------------*/
//tes pake console
console.log('tes') // menampilkan di console inspect element

const arr2 = []
arr2['nyoba'] = 1
arr2['ngetes'] = 2

console.log(arr2['ngetes']) // akan muncul angka 2 

/*---------array copy---------*/
var arr3 = ['y', 'u','o']
var newArr3 = arr3  //ini contoh yang tidak boleh digunakan jika array original tidak ingin berubah
var newArr33 = arr3.slice()//ini salah satu contoh yang benar, masih banyak cara lain

newArr33[0] = 'ganti' // value array pada arr3 tidak akan berubah karena cara nya benar

console.log({arr3}) //memunculkan semua elemnt pada array arr3
console.log({newArr3})
console.log({newArr33})

/*-------- Kurt ------*/

const arr4 = [
    'y', 10, {
        kuntul : function(){
            console.log('kuntul')
        }
    },
        ['arr', 'arraydalam']
]

arr4[2].kuntul() // manggil fungsi di dalam object kuntul
console.log(arr4[3][1]) //array dalam array TF

/*------- Depade/ merge------*/

const mergeArr = arr.concat(arr3)

console.log(mergeArr)

mergeArr.map((value, index)=> console.log(index, value)) // jika ingin tau index dan value di dalam nya



