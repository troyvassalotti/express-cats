const express = require('express');
const router = express.Router();
const cats = require('../data/cats');

router.get('/', (req, res) => {
    res.render('index', {
        cats,
        title: 'All About Cats'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About This Site'
    })
})

router.get('/cats/:page', (req, res) => {
    const {page} = req.params;
    const cat = cats.filter(item=>Object.values(item).includes(page))[0];
    const remi = cats.filter(item=>Object.values(item).includes("Remi"))[0];
    const sophie = cats.filter(item=>Object.values(item).includes("Sophie"))[0];

    res.render('cat', {
        cat,
        remi,
        sophie,
        title: cat.title
    })
})

module.exports = router;