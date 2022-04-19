const api = require('../api')
const res = require("express/lib/response");

const characterController = {
    index: async (req, res) => {                        
        try {
            const { id } = req.params;
            const { data } = await api.get(`character/${id}`);
            // console.log(data);
            return res.render('index', {data: data})
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
            res.render("personagem", {data: data});

        } catch (error) {
            console.log(error);
            res.render("error", { error: error.message });
        }
    }
};

module.exports = characterController;