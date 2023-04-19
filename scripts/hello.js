//tugas kecil

//no 1
var saldo = prompt('Masukan saldo')
alert(saldo)

//no 2
var hari = new Date().getDay()
switch (hari){
    case 1 :
        hari = "hari ini adalah hari senin"
    break
    case 2 :
        hari = "hari ini adalah hari selasa"
    break
    case 3 :
        hari = "hari ini adalah hari rabu"
    break
    case 4 :
        hari = "hari ini hari kamis"
    break
    case 5 :
        hari = "hari ini hari jumat"
    break
    case 6 :
        hari = "hari ini hari sabtu"
    break
    case 7 :
        hari = "hari ini hari minggu"
    break
    default : hari = "gada"
}

alert(hari)

