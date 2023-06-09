const express = require('express')
const {
    createWishlist,
    getWishlists,
    getWishlist,
    deleteWishlist,
    updateWishlist
}= require('../controllers/wishlistController')


const router = express.Router()

//GET all wishlists
router.get('/', getWishlists)

//GET a single wishlist
router.get('/:id', getWishlist)


//POST a new wishlist
router.post('/', createWishlist)
    
//DELETE a wishlist 
router.delete('/:id', deleteWishlist)

//UPDATE a wishlist
router.patch('/:id', updateWishlist)



module.exports = router