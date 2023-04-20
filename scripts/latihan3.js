/*-------- Boolean consructor ---------*/

let bool = false
let text = bool.constructor

document.write(text + "<br>")

const myFalse = new Boolean(false) // nilai nya false

if(myFalse){
    document.write('nilai dari konstanta myFalse adalah '+myFalse.valueOf()+"<br>") //kode ini dijalankan padahal nilai nya false
}

const youFalse = false
if(youFalse){
    document.write('nilai dari konstanta myFalse adalah '+myFalse.valueOf()) //kode disini tidak akan di jalan kan karena bernilai false
}
const g = Boolean(myFalse); // nilai nya true
document.write(g + "<br>") 
