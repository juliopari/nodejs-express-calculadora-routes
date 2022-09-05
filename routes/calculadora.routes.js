const express = require('express');
const router = express.Router();

router.post('/sumar', (req, res) => {

  const body = req.body;
  const result = body.numero1 + body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/restar', (req, res) => {

  const body = req.body;
  const result = body.numero1 - body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/multiplicar', (req, res) => {

  const body = req.body;
  const result = body.numero1 * body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

router.post('/dividir', (req, res) => {

  const body = req.body;
  const result = body.numero1 / body.numero2;

  if(body.numero2 === 0){
    res.status(500).json(
      {
        mensaje: 'División entre 0 no permitida'
      }
    );
  }else{
    res.status(200).json(
      {
        resultado: result
      }
    );
  }

});

module.exports = router;
