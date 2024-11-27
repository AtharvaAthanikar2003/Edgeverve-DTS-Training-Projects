// Code for fetchData with .then() chaining
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "john" };
            const status = true;

            if (status) {
                console.log("data received");
                resolve(data);
            } else {
                reject("failed");
            }
        }, 1000);
    });
}
fetchData()
.then(data => {
    console.log("called first", data);
    return fetchData();
})
.then(data => {
    console.log("called second time", data);
})
.catch(error => {
    console.log("error", error);
});

// Code for fetchData with repeated calls
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "data fetched successfully!!" };
            resolve(data);
        }, 1000);
    });
}
fetchData()
.then(data => {
    console.log("first set of data", data);
    return fetchData();
})
.then(data => {
    console.log("second set of data", data);
    return fetchData();
})
.then(data => {
    console.log("third set of data", data);
});

// Code for settimeout with chained promise calls
function settimeout() {
    return new Promise((resolve, reject) => {
        const data = { message: '3' };
        if (data) {
            resolve(data);
        } else {
            reject("Failed");
        }
    });
}
settimeout().then(() => {
    console.log('2');
    return settimeout();
})
.then(() => {
    console.log("Good evening");
});

// Code for wait with setTimeout and promise
function wait(duration) {
    return new Promise((resolve) => {
        console.log(resolve);
        setTimeout(resolve, duration);
    });
}
const timevalue = wait(1000);
console.log(timevalue);

timevalue.then(() => {
    console.log('1 sec later');
});