const express = require('express');
const router = express.Router();

router.get('/categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id,
    productId
  });
});

module.exports = router;