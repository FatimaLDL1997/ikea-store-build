import express from 'express'
const router = express.Router()

import {
    getSearchedItems
} from '../controllers/itemsController.js'
router.route('/').get(getSearchedItems)                                                                                     

export default router; 