import express from 'express'
const router = express.Router()

import {
    sendFavItems,getFavItems,updateFavItems, emptyFavItems
    // sendCartItems, updateCartItems, getCartItems, emptyCartItems
} from '../controllers/favController.js'

router.route('/').post(sendFavItems).get(getFavItems).delete(emptyFavItems)
router.route('/').patch(updateFavItems)

export default router; 