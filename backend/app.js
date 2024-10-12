const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()
app.use(express.json())


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours,
        },
    })
}

const createTour = (req, res) => {
    console.log(req.body)
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)

    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            })
        }
    )
}

const getTour = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1

    const tour = tours.find((el) => el.id === id)
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: `Invalid ID: ${id}`,
        })
    } else {
        res.status(200).json({
            status: 'success',
            data: {
                tour,
            },
        })
    }
}

const updateTour = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1

    // const tour = tours.find((el) => el.id === id)
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: `Invalid ID: ${id}`,
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Update successfully>',
        },
    })
}

const deleteTour = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1

    // const tour = tours.find((el) => el.id === id)
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: `Invalid ID: ${id}`,
        })
    }
    res.status(200).json({
        status: 'success',
        data: null,
    })
}

app.route('/api/v1/tours').get(getAllTours).post(createTour)

app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

// app.get('/api/v1/tours', getAllTours),
// app.post('/api/v1/tours', createTour),
// app.get('/api/v1/tours/:id', getTour)
//
// app.patch('/api/v1/tours/:id', updateTour),
// app.delete('/api/v1/tours/:id', deleteTour)

// 3) ROUTES
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app
