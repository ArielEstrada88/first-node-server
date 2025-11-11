const getHome = (req, res) => {
    res.send("Goofy Rooster!");
};

const getTTech = (req, res) => {
    res.send("Tooele Tech is Awesome!");
};

module.exports = { getHome, getTTech };