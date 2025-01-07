function getDataPromise(data) {
    return new Promise((resolve, reject) => {
        getData(data, (result) => {
            if (result) {
                resolve(result);
            } else {
                reject('Error fetching data');
            }
        });
    });
}

// Mock implementation of getData
function getData(data, callback) {
    // Simulate an asynchronous operation
    setTimeout(() => {
        if (data) {
            callback(data + 1); // Increment data for demonstration
        } else {
            callback(null);
        }
    }, 1000);
}

function getDataPromise(data) {
    return new Promise((resolve, reject) => {
        getData(data, (result) => {
            if (result) {
                resolve(result);
            } else {
                reject('Error fetching data');
            }
        });
    });
}

getDataPromise(1)
    .then(a => getDataPromise(a))
    .then(b => getDataPromise(b))
    .then(c => getDataPromise(c))
    .then(d => getDataPromise(d))
    .then(finalData => {
        console.log('Finished', finalData);
    })
    .catch(error => {
        console.error(error);
    });