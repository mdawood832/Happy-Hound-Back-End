
require('dotenv').config();

const mongoose = require('mongoose');
const db = require('../models');

/* == connection string == */

const connectionStr = process.env.MONGODB_URI

/* == set up our connection == */

mongoose.connect(connectionStr);


const insertData = async () => {
   


const products = [
    {
        name: 'SlowTon Hands-Free Padded & Adjustable Sling Dog Carrier',
        imgURL: 'https://i.imgur.com/QKJdE6n.jpg',
        description: 'This carrier sling is fully adjustable to any height and features a thick padded strap to help prevent shoulder aches.',
        type: 'dog carrier',
        price: '25.99'
    },
    {
        name: 'Petco Bootique Spicy Taco Halloween Dog Costume',
        imgURL: 'https://i.imgur.com/IKCC2uE.jpg',
        description: 'multi color dog halloween costume',
        type: 'dog costume',
        price: '88.01'
    },
    {
        name: 'STAR WARS THE MANDALORIAN GROGU Pumpkin Dog Leash',
        imgURL: 'https://i.imgur.com/ihFxYm6.jpg',
        description: 'The Halloween-inspired pattern featuring The Child adds adorable style to your dog’s trick-or-treating adventures.',
        type: 'dog leash',
        price: '8.07'
    },
    {
        name: 'Mendota Products Large Snap Solid Rope Dog Leash',
        imgURL: 'https://i.imgur.com/bbGuW8d.jpg',
        description: 'Made from a waterproof, vibrant, long lasting and machine washable polypropylene rope',
        type: 'dog leash',
        price: '20.99'
    },
    {
        name: 'CollarDirect Tribal Aztec Nylon Dog Collar',
        imgURL: 'https://i.imgur.com/KJtlpjw.jpg',
        description: 'Your pup will appreciate the soft nylon and you’ll love the dependable hardware.',
        type: 'dog collar',
        price: '12.99'
    },
    {
        name: 'GoTags Adjustable Nameplate Personalized Dog Collar',
        imgURL: 'https://i.imgur.com/fHfoEz6.jpg',
        description: 'Includes an adjustable collar and a stainless steel, slide on ID tag that can be customized with an engraving',
        type: 'dog collar',
        price: '16.95'
    },
    {
        name: 'PawFurEver Circle Personalized Dog ID Tag',
        imgURL: 'https://i.imgur.com/csz0Gzm.jpg',
        description: 'PawFurever Personalized Circular Dog ID Tag. It’s crafted from stainless steel and is completely customizable',
        type: 'dog tag',
        price: '19.99'
    },
    {
        name: 'Chais Choice Premium Quick Release Outdoor Adventure 3M Polyester Reflective Front Clip Dog Harness',
        imgURL: 'https://i.imgur.com/X4PkIKM.jpg',
        description: 'lightweight aviation aluminum fittings on the neck. These offer strength and allow you to take the harness on and off your pup without constant adjustments',
        type: 'dog harness',
        price: '27.95'
    },
    {
        name: 'PetSafe 3-in-1 Reflective Dog Harness with Car Control Strap',
        imgURL: 'https://i.imgur.com/L0RJt02.jpg',
        description: 'Three in one dog harness that can be used for walks, jogs, and car rides',
        type: 'dog harness',
        price: '29.95'
    },
    {
        name: 'Frisco Colorful Ball Knot Rope Dog Toy',
        imgURL: 'https://i.imgur.com/SkzMhvy.jpg',
        description: 'Made for everyday play with bright, eye-catching colors, polyester rope and recycled cotton.',
        type: 'dog toy',
        price: '11.13'
    },
    {
        name: 'Outward Hound HedgehogZ Squeaky Plush Dog Toy',
        imgURL: 'https://i.imgur.com/iSozfpd.jpg',
        description: 'Minimal seams and soft faux-fur  Loveable, huggable and durable fun, Irresistible noisemakers',
        type: 'dog toy',
        price: '11.99'
    },
    {
        name: 'Chuckit! Ultra Duo Tug Tough Dog Toy',
        imgURL: 'https://i.imgur.com/3YUcSqr.jpg',
        description: 'Duo tug fetch toy takes your next outdoor play time to the next level and is launcher compatible',
        type: 'dog toy',
        price: '14.99'
    }

]
    // insert products into database
    await db.Product.insertMany(products)
    // console.log('products!', products)
  
    
}

insertData()