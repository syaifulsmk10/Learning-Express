// const { get } = require("../routes/categories");

exports.getALLCategories = (req, res) => {
    // console.log(req.requestTime)
    res.status(200).json({
        status: "success",

    })
}

exports.storeCategory = (req, res)=>{
    let name = req.body.name;
    let description = req.body.description;

    if(!name || !description){
        res.status(400).json({
            status : "fail",
            error : "validasi eror"
        });
    }

    return res.status(200).json({
        status: "success",
        message: "validasi berhasil"
    })
}