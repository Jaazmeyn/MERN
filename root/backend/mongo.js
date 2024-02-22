const MongoClient = require('mongodb').MongoClient;
//   const url = 'mongodb+srv://jasmin:f%MQfNfu*euej8hp@cluster0-g8eu9.mongodb.net/products_test?retryWrites=true&w=majority';
// const url = 'mongodb+srv://jasminblanda:K$pIoC3yL5$*8kWj@cluster0.ppqvvrj.mongodb.net/'
const url = 'mongodb+srv://jasminblanda:K$pIoC3yL5$*8kWj@cluster0.ppqvvrj.mongodb.net/products_test?retryWrites=true&w=majority&appName=Cluster0';
// `mongodb+srv://jasmin:f%MQfNfu*euej8hp@cluster0.ppqvvrj.mongodb.net/places_test?retryWrites=true&w=majority&appName=Cluster0`;

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };
    const client = new MongoClient(url); // tells mongo which server i want to connect but not initiate

    try {
        await client.connect(); // connection to server
        const db = client.db();//specific db/
        const result = await db.collection('products').insertOne(newProduct);//acces collection in db
    } catch (error){
        return res.json({message: 'Could not store data.'})
    };
    await client.close();

    res.json(newProduct);
};

const getProduct = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
