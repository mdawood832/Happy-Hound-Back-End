import db from '../config/db.connection.js'
import Product from '../models/Product.js'

const insertData = async () => {
    // reset database
    await db.dropDatabase()


const products = [
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    },
    {
        name: '',
        imgURL: '',
        description: '',
        type: '',
        price: ''
    }

]
    // insert products into database
    await Product.insertMany(products)
    console.log('Created users & products!')
  
    // close database connection. done.
    db.close()
}

insertData()