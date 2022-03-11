const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //  Query Params http://localhost:3000/users?limit=3&offset=3
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  };
});

module.exports = router;