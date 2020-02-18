const mongoose = require("mongoose");
const Pessoa = mongoose.model("Pessoa");



module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const pessoas = await Pessoa.paginate({},{ page, limit: 2 });
        return res.json(pessoas);
    },

    async criarPessoa(req, res){
        const pessoa = await Pessoa.create(req.body);
        return res.json(pessoa);
    },

    async detalhes(req, res){
        const pessoa = await Pessoa.findById(req.params.id);
        return res.json(pessoa);
    },

    async updatePessoa(req, res){
        const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body,{new: true});
        return res.json(pessoa);
    },

    async deletaPessoa(req, res){
        await Pessoa.findByIdAndRemove(req.params.id);
        return res.send();
    }
    
    
}