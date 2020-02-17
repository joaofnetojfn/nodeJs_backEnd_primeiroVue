const mongoose = require('mongoose');
const monoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
    primeiroNome: {
        type: String,
        required: true,
    },
    segundoNome: {
        type: String,
        required: true,

    },
    porcentagem: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(monoosePaginate);
mongoose.model('Pessoa',ProductSchema);