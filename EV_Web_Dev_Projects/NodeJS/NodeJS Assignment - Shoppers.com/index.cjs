const express = require('express');
const mongoose = require('mongoose');
const MONGO_URL = "mongodb://127.0.0.1:27017/shoppers";
const app = express();

// Define the price schema (this is an example of how it might look)
const priceSchema = new mongoose.Schema({
    color: String,
    priceArray: [
        {
            size: String,
            price: Number,
            productAvailability: Number,
        },
    ],
});

// Define the product schema (this is an example of how it might look)
const productSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    productBrand: String,
    battery: mongoose.Schema.Types.Mixed,
    productCategory: {
        main: String,
        sub: String,
    },
    productSellers: [String],
    productPrice: [priceSchema],
    productProcessor: mongoose.Schema.Types.Mixed,
    operatingSystem: mongoose.Schema.Types.Mixed,
});

// Create the models based on the schemas
const Product = mongoose.model('Product', productSchema);

// MongoDB connection
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Middleware to parse JSON
app.use(express.json());

// Add product data (This data could be fetched from a client or external API)
const products = [
  {
      "productId": "P1001",
      "productName": "iPhone 11 pro",
      "productBrand": "Apple",
      "battery": 3500,
      "productCategory": {
          "main": "electronics",
          "sub": "mobiles"
      },
      "productSellers": [
          "Flashstar Commerce",
          "SuperComNet",
          "MobilePlannet"
      ],
      "productPrice": [
          {
              "color": "gold",
              "priceArray": [
                  {
                      "128GB": {
                          "price": 99900,
                          "productAvailability": 10
                      },
                      "64GB": {
                          "price": 113900,
                          "productAvailability": 5
                      }
                  }
              ]
          },
          {
              "color": "black",
              "priceArray": [
                  {
                      "128GB": {
                          "price": 97900,
                          "productAvailability": 3
                      },
                      "64GB": {
                          "price": 110900,
                          "productAvailability": 14
                      }
                  }
              ]
          },
          {
              "color": "midnightGreen",
              "priceArray": [
                  {
                      "128GB": {
                          "price": 101900,
                          "productAvailability": 7
                      },
                      "64GB": {
                          "price": 117900,
                          "productAvailability": 11
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1002",
      "productName": "Vivo U10",
      "productBrand": "Vivo",
      "battery": 5000,
      "productCategory": {
          "main": "electronics",
          "sub": "mobiles"
      },
      "productSellers": [
          "SuperComNet",
          "Flashtech Retail",
          "Appario Retail"
      ],
      "productPrice": [
          {
              "color": "electricblue",
              "priceArray": [
                  {
                      "32GB": {
                          "price": 8990,
                          "productAvailability": 20
                      },
                      "64GB": {
                          "price": 9990,
                          "productAvailability": 13
                      }
                  }
              ]
          },
          {
              "color": "black",
              "priceArray": [
                  {
                      "32GB": {
                          "price": 97900,
                          "productAvailability": 3
                      },
                      "64GB": {
                          "price": 110900,
                          "productAvailability": 14
                      }
                  }
              ]
          },
          {
              "color": "midnightGreen",
              "priceArray": [
                  {
                      "64GB": {
                          "price": 117900,
                          "productAvailability": 11
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1003",
      "productName": "OPPO Reno 2",
      "productBrand": "Dell",
      "battery": 4500,
      "productCategory": {
          "main": "electronics",
          "sub": "mobiles"
      },
      "productSellers": [
          "Flashtech Retail",
          "Truenet Commerce",
          "Appario Retail"
      ],
      "productPrice": [
          {
              "oceanblue": [
                  {
                      "128GB": {
                          "price": 33990,
                          "productAvailability": 10
                      }
                  }
              ],
              "black": [
                  {
                      "128GB": {
                          "price": 97900,
                          "productAvailability": 3
                      },
                      "256GB": {
                          "price": 110900,
                          "productAvailability": 14
                      }
                  }
              ],
              "midnightGreen": [
                  {
                      "256GB": {
                          "price": 117900,
                          "productAvailability": 11
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1004",
      "productName": "Asus VivoBook S430FA-EB039T",
      "productBrand": "Asus",
      "battery": {
          "backup": "6 Hours",
          "cells": 3
      },
      "productProcessor": {
          "name": "Core i5",
          "generation": "8th Gen"
      },
      "productCategory": {
          "main": "electronics",
          "sub": "laptop"
      },
      "productSellers": [
          "Flashtech Retail"
      ],
      "operatingSystem": {
          "Architecture": "64Bit",
          "OSName": "Windows 10 Home"
      },
      "productPrice": [
          {
              "oceanblue": [
                  {
                      "14inch": {
                          "price": 48990,
                          "productAvailability": 10
                      }
                  }
              ],
              "black": [
                  {
                      "14inch": {
                          "price": 49900,
                          "productAvailability": 3
                      },
                      "15inch": {
                          "price": 50900,
                          "productAvailability": 14
                      }
                  }
              ],
              "midnightGreen": [
                  {
                      "15inch": {
                          "price": 52900,
                          "productAvailability": 14
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1005",
      "productName": "HP Pavilion Gaming Laptop",
      "productBrand": "HP",
      "battery": {
          "backup": "8 Hours",
          "cells": 3
      },
      "productProcessor": {
          "name": "Core i5",
          "generation": "8th Gen"
      },
      "productCategory": {
          "main": "electronics",
          "sub": "laptop"
      },
      "productSellers": [
          "Flashtech Retail",
          "Appario Retail"
      ],
      "operatingSystem": {
          "Architecture": "64Bit",
          "OSName": "Windows 10 Home"
      },
      "productPrice": [
          {
              "lightgrey": [
                  {
                      "14inch": {
                          "price": 52990,
                          "productAvailability": 3
                      }
                  }
              ],
              "black": [
                  {
                      "14inch": {
                          "price": 47990,
                          "productAvailability": 7
                      },
                      "15inch": {
                          "price": 53990,
                          "productAvailability": 16
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1006",
      "productName": "Apple MacBook Air",
      "productBrand": "Apple",
      "battery": {
          "backup": "12 Hours",
          "cells": 3
      },
      "productProcessor": {
          "name": "Core i5",
          "generation": "5th Gen"
      },
      "productCategory": {
          "main": "electronics",
          "sub": "laptop"
      },
      "productSellers": [
          "Truenet Commerce",
          "Appario Retail",
          "SuperComNet"
      ],
      "operatingSystem": {
          "Architecture": "64Bit",
          "OSName": "Windows 10 Home"
      },
      "productPrice": [
          {
              "silver": [
                  {
                      "13inch": {
                          "price": 64990,
                          "productAvailability": 13
                      }
                  }
              ],
              "black": [
                  {
                      "13inch": {
                          "price": 67990,
                          "productAvailability": 7
                      }
                  }
              ],
              "gold": [
                  {
                      "13inch": {
                          "price": 62990,
                          "productAvailability": 16
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1007",
      "productName": "Nilkamal Fern Dining Set",
      "productBrand": "Nilkamal",
      "productCategory": {
          "main": "Home and Furnitures",
          "sub": "Dinning Set"
      },
      "productSellers": [
          "athome by Nilkamal",
          "OmniTechRetail"
      ],
      "productPrice": [
          {
              "wood": [
                  {
                      "4seater": {
                          "price": 22090,
                          "productAvailability": 5
                      },
                      "6seater": {
                          "price": 25090,
                          "productAvailability": 0
                      }
                  }
              ],
              "metal": [
                  {
                      "4seater": {
                          "price": 32090,
                          "productAvailability": 8
                      },
                      "6seater": {
                          "price": 35090,
                          "productAvailability": 12
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1008",
      "productName": "RoyalOak Rover Dining Set",
      "productBrand": "RoyalOak",
      "productCategory": {
          "main": "Home and Furnitures",
          "sub": "Dinning Set"
      },
      "productSellers": [
          "SMHOMEGALLERY",
          "NationalFurnitures"
      ],
      "productPrice": [
          {
              "wood": [
                  {
                      "8seater": {
                          "price": 33250,
                          "productAvailability": 7
                      },
                      "6seater": {
                          "price": 34545,
                          "productAvailability": 2
                      }
                  }
              ],
              "metal": [
                  {
                      "4seater": {
                          "price": 39990,
                          "productAvailability": 4
                      },
                      "6seater": {
                          "price": 41499,
                          "productAvailability": 15
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1009",
      "productName": "FUNTERIOR Leatherette Natural Sofa Set",
      "productBrand": "FUNTERIOR",
      "productCategory": {
          "main": "Home and Furnitures",
          "sub": "Sofa"
      },
      "productSellers": [
          "Funterior",
          "SMHOMEGALLERY"
      ],
      "productPrice": [
          {
              "wood": [
                  {
                      "4seater": {
                          "price": 61996,
                          "productAvailability": 12
                      },
                      "6seater": {
                          "price": 68750,
                          "productAvailability": 0
                      }
                  }
              ],
              "woadwithfoam": [
                  {
                      "4seater": {
                          "price": 79990,
                          "productAvailability": 12
                      },
                      "6seater": {
                          "price": 81499,
                          "productAvailability": 9
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1010",
      "productName": "Voltas 1.5 ton AC",
      "productBrand": "Voltas",
      "productCategory": {
          "main": "Electronics",
          "sub": "Air Conditioners"
      },
      "productSellers": [
          "Appario Retail",
          "Flashstar Commerce"
      ],
      "productPrice": [
          {
              "inverter": [
                  {
                      "1ton": {
                          "price": 34999,
                          "productAvailability": 21
                      },
                      "2ton": {
                          "price": 36750,
                          "productAvailability": 13
                      }
                  }
              ],
              "fixedspeed": [
                  {
                      "2ton": {
                          "price": 29450,
                          "productAvailability": 5
                      },
                      "3ton": {
                          "price": 31325,
                          "productAvailability": 2
                      }
                  }
              ]
          }
      ]
  },
  {
      "productId": "P1011",
      "productName": "Whirlpool AC",
      "productBrand": "Whirlpool",
      "productCategory": {
          "main": "Electronics",
          "sub": "Air Conditioners"
      },
      "productSellers": [
          "OmniTechRetail",
          "SMHOMEGALLERY"
      ],
      "productPrice": [
          {
              "inverter": [
                  {
                      "1ton": {
                          "price": 34999,
                          "productAvailability": 21
                      },
                      "2ton": {
                          "price": 37750,
                          "productAvailability": 13
                      }
                  }
              ],
              "tripleinverter": [
                  {
                      "2ton": {
                          "price": 42450,
                          "productAvailability": 5
                      },
                      "3ton": {
                          "price": 44325,
                          "productAvailability": 2
                      }
                  }
              ]
          }
      ]
  }
]

// Save product data to the database
const saveProducts = async () => {
  try {
    for (let productData of products) {
      const newProduct = new Product(productData);
      await newProduct.save();
      console.log(`Product ${productData.productName} saved successfully!`);
    }
  } catch (err) {
    console.error('Error saving product:', err);
  }
};

// Run the function to save products when the server starts
saveProducts();

// Routes for CRUD operations
app.get('/products', async (_req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

app.get('/products/category/mobiles', async (_req, res) => {
  try {
    const products = await Product.find({ 'productCategory.sub': 'mobiles' });
    res.json(products);
  } catch (err) {
    res.status(500).send('Error fetching mobile products');
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    res.json(product);
  } catch (err) {
    res.status(500).send('Error fetching product');
  }
});

app.get('/products/laptops', async (_req, res) => {
  try {
    const products = await Product.find({ 'productCategory.sub': 'laptop' }).select('productName');
    res.json(products);
  } catch (err) {
    res.status(500).send('Error fetching laptops');
  }
});

// Add a route for dynamically adding new products via POST requests
app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send('Error adding new product');
  }
});

// Start the server
const port = 2000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
