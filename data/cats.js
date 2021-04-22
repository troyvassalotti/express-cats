const cats = [
    {
        title: 'Sophie',
        description: 'Read more about Sophie.',
        date: "2017-01-18",
        weight: "7.75 lbs",
        personality: "Sweet but Dumb",
        get url() {return this.title.split(' ').join('-').toLowerCase()}
    },
    {
        title: 'Remi',
        description: 'Learn all about Remi.',
        date: "2020-02-08",
        weight: "9 lbs",
        personality: "Spicy but proper",
        get url() {return this.title.split(' ').join('-').toLowerCase()}
    }
]

module.exports = cats;