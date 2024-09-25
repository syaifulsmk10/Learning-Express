// const { get } = require("../routes/categories");

const getALLUsers = (req, res) => {
    const data = {
        id: 1,
        name: "syaiful",
        email: "ipul@ipul.com",
        address: "Jakarta"
    }


    res.json({
        message: 'Get All users success',
        data: data
    })
}


const createNewUser = (req, res) => {

    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

const updateUSER = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser)
    res.json({
        message: 'Update New User Success',
        data: req.body
    });
}

module.exports = {
    getALLUsers,
    createNewUser,
    updateUSER
}

