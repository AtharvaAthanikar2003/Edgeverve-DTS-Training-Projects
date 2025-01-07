const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the product price schema
const PriceSchema = new Schema({
  color: {
    type: String,
    required: true
  },
  priceArray: [
    new Schema({
      size: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      productAvailability: {
        type: Number,
        required: true
      }
    })
  ]
});

// Define the product schema
const ProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  productBrand: {
    type: String,
    required: true
  },
  battery: {
    type: Schema.Types.Mixed, // Can be either a number or an object (for laptops)
    required: true
  },
  productCategory: {
    main: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    }
  },
  productSellers: [
    {
      type: String,
      required: true
    }
  ],
  productPrice: [
    PriceSchema
  ],
  productProcessor: {
    name: {
      type: String,
      required: false
    },
    generation: {
      type: String,
      required: false
    }
  },
  operatingSystem: {
    Architecture: {
      type: String,
      required: false
    },
    OSName: {
      type: String,
      required: false
    }
  }
});

// Create the model from the schema
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;