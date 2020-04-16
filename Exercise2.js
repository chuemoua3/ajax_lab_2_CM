function compareToTen(num){
    p = new Promise((resolve, reject)=>{
        if (num > 50){
            resolve(num+ " is greater than 50, success!")
        }else {
    