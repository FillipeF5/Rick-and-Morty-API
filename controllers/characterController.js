const api = require('../api')
const res = require("express/lib/response");


const characterController = {
    index: async (req, res) => {
        try {
            const { data } = await api.get(`character`);

            res.render("index", { data: data.results });

        } catch (error) {
            console.log(error);
            res.render("error", { error: error.message });
        }
    },

    buscando: async (req, res) => {
        try {
            const { data } = await api.get(`character`);

            const { characterInput } = req.body;
            const todosPersonagens = data.results;

            const nome = todosPersonagens.find(characterInput == todosPersonagens.name);

            console.log({ nome, nome: data });


        } catch (error) {
            console.log(error);
            res.render("error", { error: error.message });
        }
    },

    varios: async (req, res) => {
        try {
            const { id } = req.params;
            const { data } = await api.get(`character/${id}`);
            // console.log(data);
            return res.render('varios', { data: data })
        } catch (error) {
            console.log(error);
            res.render("error", { error: error.message })
        }
    },

    buscarPersonagem: async (req, res) => {
        try {
            const { id } = req.params;
            const { data } = await api.get(`character/${id}`);
            console.log(data);
            res.render("personagem", { data: data });

        } catch (error) {
            console.log(error);
            res.render("error", { error: error.message });
        }
    }
};

module.exports = characterController;