
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  
    name: { 
      type: String, 
      required: true 
      },
    imgURL: { 
      type: String, 
      required: true 
      },
    description: { 
      type: String, 
      required: true 
      },
    type: { 
      type: String, 
      required: false  
      },
    price: { 
      type: String, 
      required: true 
      }
  }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product

// import mongoose from 'mongoose'
// const Schema = mongoose.Schema

// const Product = new Schema(
//   {
//     name: { 
//       type: String, 
//       required: true 
//       },
//     imgURL: { 
//       type: String, 
//       required: true 
//       },
//     description: { 
//       type: String, 
//       required: true 
//       },
//     type: { 
//       type: String, 
//       required: false  
//       },
//     price: { 
//       type: String, 
//       required: true 
//       } 
//   }
// )

// export default mongoose.model('products', Product)