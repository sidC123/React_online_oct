import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Smartphone',
            price: 599.99,
            image: 'https://example.com/smartphone.jpg' // Replace with actual smartphone image URL
        },
        {
            id: 2,
            name: 'Laptop',
            price: 999.99,
            image: 'https://example.com/laptop.jpg' // Replace with actual laptop image URL
        },
        {
            id: 3,
            name: 'Headphones',
            price: 149.99,
            image: 'https://example.com/headphones.jpg' // Replace with actual headphones image URL
        },
        {
            id: 4,
            name: 'Smartwatch',
            price: 249.99,
            image: 'https://example.com/smartwatch.jpg' // Replace with actual smartwatch image URL
        },
        {
            id: 5,
            name: 'Wireless Speaker',
            price: 79.99,
            image: 'https://example.com/speaker.jpg' // Replace with actual wireless speaker image URL
        }
    ];

    if (req.query.search) {
        const queryParams = req.query.search.toLowerCase()
        const filteredProduts = products.filter(product => product.name.toLocaleLowerCase().includes(queryParams))
        res.send(filteredProduts)
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, [3000]);

})

app.listen(port, () => {
    console.log('Server running on port ' + port);
})