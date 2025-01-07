function fetchData (callback) {
  setTimeout(() => {
    const data = {name: 'John Doe', age: 30};
    callback(data);
  }, 2000);
}
fetchData(function (data) {  
  console.log(data);
}); 
console.log('Data is fetched');