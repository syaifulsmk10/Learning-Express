const express = require("express");
const router = express.Router()

const {getALLCategories, storeCategory} = require('../controllers/categoryController')



router.get('/', getALLCategories)
router.post('/', storeCategory)

// routing
// router.get('/', (req,res)=> {
//     res.json({
//         message: "hello word"
//     })
// })

router.post('/', (req, res)=> {
    res.send("berhasil post")
});


router.get('/:nama', (req, res)=> {
    res.send(`ini endpoint dari route params ${req.params.nama}`)
}); 


module.exports = router;