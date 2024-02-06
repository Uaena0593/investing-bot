import express from 'express'
import path from 'path'
var router = express.Router();
router.get('/', (req, res) => {
  res.render('htmlAuth')
});

export default router