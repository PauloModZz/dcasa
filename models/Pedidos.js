const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  numeroPedido: { type: Number, required: true, unique: true },
  cantidad: { type: Number, required: true },
  modelo: { type: String, required: true },
  marcaHilo: { type: String, required: true },
  codigoHilo: { type: String, required: true },
  material: { type: String, required: true },
  estado: {
    type: String,
    enum: ['en proceso', 'terminado', 'entregado', 'cancelado'],
    default: 'en proceso'
  },
  fechaCreacion: { type: Date, default: Date.now },
  notas: { type: String }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
