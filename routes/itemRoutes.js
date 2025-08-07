const express = require('express');
const router = express.Router();

const{getItems,createItem, deleteItem, updateItem,markItem} = require('../controllers/itemController');
const { updateMany } = require('../models/item');

router.route('/').get(getItems).post(createItem);
router.route('/:id').delete(deleteItem);
router.route('/:id').put(updateItem);
router.route('/:id').patch(markItem);
module.exports =router;