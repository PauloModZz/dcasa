const mongoose = require('mongoose');

// Definir el esquema para los pedidos
const pedidoSchema = new mongoose.Schema({
  numeroPedido: {
    type: Number,
    required: true,
    unique: true, // Asegura que no haya dos pedidos con el mismo número
  },
  cantidad: {
    type: Number,
    required: true, // La cantidad debe ser un número y es obligatoria
  },
  modelo: {
    type: String,
    required: true, // El modelo es obligatorio
  },
  marcaHilo: {
    type: String,
    required: true, // La marca del hilo es obligatoria
  },
  codigoHilo: {
    type: String,
    required: true, // El código del hilo es obligatorio
  },
  material: {
    type: String,
    required: true, // El material es obligatorio
  },
  estado: {
    type: String,
    enum: ['en proceso', 'terminado', 'entregado', 'cancelado'], // Los valores posibles del estado
    default: 'en proceso', // Si no se especifica, el valor por defecto será 'en proceso'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now, // La fecha de creación se establece automáticamente al momento de crear el pedido
  },
  notas: {
    type: String,
    default: '', // Las notas no son obligatorias, si no se proporcionan se establecerán como una cadena vacía
  },
});

// Crear el modelo de Pedido
const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
