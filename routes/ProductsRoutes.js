import express from 'express'
const router = express.Router()

import {
    sendCartItems, updateCartItems, getCartItems, emptyCartItems
} from '../controllers/prodController.js'

router.route('/').post(sendCartItems).get(getCartItems).delete(emptyCartItems)
router.route('/').patch(updateCartItems)

export default router; 