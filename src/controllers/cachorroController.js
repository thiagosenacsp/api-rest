import cachorro from "../models/Cachorro.js";

class CachorroController {

    // get all
    // static = usar métodos de uma classe sem instanciar a classe
    static async listarCachorros (req, res) {
        const listaCachorros = await cachorro.find({})
        res.status(200).json(listaCachorros);
    };

    static async cadastrarCachorro (req, res) {
        try {
            const novoCachorro = await cachorro.create(req.body)
            res.status(201).json({ message: "Criado com sucesso", cachorro: novoCachorro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
        }
    }

};

export default CachorroController;