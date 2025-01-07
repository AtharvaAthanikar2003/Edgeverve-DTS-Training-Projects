let myPromise = new Promise( (res, rej) => {
    //let success = true;
    let success = false;
    if(success){
        res('Operation was successsful...!!');
    }
    else{
        rej('Operation failed...!!');
    }
});
myPromise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})