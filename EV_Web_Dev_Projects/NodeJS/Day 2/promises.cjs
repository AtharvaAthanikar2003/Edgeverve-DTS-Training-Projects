function getSumNum(a,b){
    return customPromise= new Promise((resolve, reject) => {
        const sum = a+b;
        if(sum<=5){
            resolve("Let's go");
        } else {
            reject(new Error('Number should be less than 5'));
        }
    });
    return customPromise;
}
getSumNum(2,3)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
}); 