const mongoose = require('mongoose');
const monoosePaginate = require("mongoose-paginate");

// const Joi = require('@hapi/joi');

// const ProductSchema = Joi.object({
//     primeiroNome: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(20)
//     .required(),

//     segundoNome: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(20)
//     .required(),

//     porcentagem : Joi.number()
//     .integer()
//     .min ( 1 )
//     .max ( 100 )
//     .required(),
// })

const ProductSchema = new mongoose.Schema({
    primeiroNome: {
        type: String,
        required: true
    },
    segundoNome: {
        type: String,
        required: true
    },
    porcentagem: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(monoosePaginate);
mongoose.model('Pessoa',ProductSchema);