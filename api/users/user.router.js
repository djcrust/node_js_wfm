const router = require('express').Router();

const {
  getUsers,
  getUserId,
} = require('./user.controller');

router.get('/', getUsers); 
router.get('/:id', getUserId); 

module.exports = router;