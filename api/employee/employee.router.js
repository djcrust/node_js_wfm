const router = require('express').Router();

const {
  getEmployees,
} = require('../employee/employee.controller');

router.get('/', getEmployees);

module.exports = router;