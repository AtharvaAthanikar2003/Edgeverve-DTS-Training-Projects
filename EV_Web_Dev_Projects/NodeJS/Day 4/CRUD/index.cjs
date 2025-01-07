const express = require('express')
const app = express()
const PORT = 8000;
app.use(express.json())

let data = [
    {
        "name" : "Dhruv",
        "course" : "BE",
        "roll_no" : "14",
        "phone" : "123"
    },
    {
        "name" : "Arjun",
        "course" : "MBA",
        "roll_no" : "15",
        "phone" : "124"
    },
    {
        "name" : "Gagan",
        "course" : "MCA",
        "roll_no" : "16",
        "phone" : "125"
    },
    {
        "name" : "Jaman",
        "course" : "MBBS",
        "roll_no" : "17",
        "phone" : "126"
    },
    {
        "name" : "Baban",
        "course" : "MD",
        "roll_no" : "18",
        "phone" : "127"
    },
]

app.get('/', (req, res) => {
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).send('Not Found')
    }
})

app.get('/:roll_no', (req, res) => {
    const { roll_no } = req.params
    const studData = data.find((item) => item.roll_no === roll_no)
    if (studData) {
        res.status(200).json(studData)
    } else {
        res.status(404).send("Not found")
    }
})

app.post('/', (req, res) => {
    let newItem = {
        roll_no : req.body.roll_no,
        name : req.body.name,
        course : req.body.course,
        phone : req.body.phone
    }
    data.push(newItem);
    res.status(200).json(data)
})

app.put('/:roll_no', (req, res) => {
    let roll_no = req.params.roll_no
    let found = data.find((item) => item.roll_no === roll_no)
    if (found) {
        let update = {
            name : req.body.name,
            course : req.body.course,
            roll_no : found.roll_no,
            phone : req.body.phone,
        }
        let targetIndex = data.indexOf(found)
        data.splice(targetIndex, 1, update);
        res.status(200).json({'message':'updated'})
    } else {
        res.status(404).send("Not found")
    }
})

app.patch('/:roll_no', (req, res) => {
    let roll_no = req.params.roll_no
    let found = data.find((item) => item.roll_no === roll_no)
    if (found) {
        if(req.body.name){
            found.name = req.body.name
        }        
        if(req.body.course){
            found.course = req.body.course
        }        
        if(req.body.phone){
            found.phone = req.body.phone
        }
        res.status(200).json({'message':'updated'})
    } else {
        res.status(404).send("Not found")
    }
})

app.delete('/:roll_no', (req, res) => {
    let roll_no = req.params.roll_no
    let found = data.find((item) => item.roll_no === roll_no)
    if (found) {
        let targetIndex = data.indexOf(found)
        data.splice(targetIndex, 1)
        res.status(200).json({'message' : 'updated'})
    } else {
        res.status(404).send("Not found")
    }
})

app.listen(PORT, (e) => {
    if (e) {
        console.error(e)
    } else {
        console.log(`Listening on port ${PORT}`);
    }
})