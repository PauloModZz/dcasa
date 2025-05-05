const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

// Crear pedido
router.post('/', async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modificar un pedido
router.put('/:id', async (req, res) => {
  try {
    const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un pedido
router.delete('/:id', async (req, res) => {
  try {
    await Pedido.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Pedido eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
