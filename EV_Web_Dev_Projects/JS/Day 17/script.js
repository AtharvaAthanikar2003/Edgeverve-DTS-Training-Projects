// Web api- application programming interface
// Use browser's/third party's/validation api
// fetch (url)
const url="https://jsonplaceholder.typicode.com/users"
const fetcheddata=fetch(url).then((response)=> {
    return response.json()
})
.catch((error)=> {
    console.log(error)
})
console.log(fetcheddata)

/* 
DOM api -> Document object module - web page
HTML DOM - elements become objects
HTML DOM Methods - actions to perform
HTML DOM properties - values set or changed
*/