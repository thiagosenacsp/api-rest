import cachorro from "../models/Cachorro.js";

class CachorroController {

    // get all
    // static = usar métodos de uma classe sem instanciar a classe
    static async listarCachorros (req, res) {
        try {
            const listaCachorros = await cachorro.find({})
            res.status(200).json(listaCachorros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    };

    static async listarCachorroPorId (req, res) {
        try {
            const id = req.params.id;
            const cachorroEncontrado = await cachorro.findById(id)
            res.status(200).json(cachorroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do cachorro` });
        }
    };

    static async cadastrarCachorro (req, res) {
        try {
            const novoCachorro = await cachorro.create(req.body)
            res.status(201).json({ message: "Criado com sucesso", cachorro: novoCachorro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
        }
    };

    static async atualizarCachorro (req, res) {
        try {
            const id = req.params.id;
            await cachorro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do cachorro` });
        }
    };

    static async excluirCachorro (req, res) {
        try {
            const id = req.params.id;
            await cachorro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão do cachorro` });
        }
    };
};


export default CachorroController;