let mp1 = new Promise((resolve, reject) => {
    let a = 5 * 5;
    if (a > 20) {
        resolve('mp1 resolved');
    } else {
        reject('mp1 rejected');
    }
});

let mp2 = new Promise((resolve, reject) => {
    let b = 15 * 2;
    if (b > 20) {
        resolve('mp2 resolved');
    } else {
        reject('mp2 rejected');
    }
});

let mp3 = new Promise((resolve, reject) => {
    let c = 10 * 3;
    if (c > 20) {
        resolve('mp3 resolved');
    } else {
        reject('mp3 rejected');
    }
});

let mypromise = new Promise((resolve, reject) => {
    let d = 10 * 20;
    if (d > 25) {
        resolve('mypromise resolved');
    } else {
        reject('mypromise rejected');
    }
});

mp1
    .then((message) => {
        console.log(message);
        return mp2;
    })
        .then((message) => {
            console.log(message);
            return mp3;
        })
            .then((message) => {
                console.log(message);
                return mypromise;
            })
        .then((message) => {
            console.log(message);
        })
    .catch((error) => {
        console.log(error);
    });