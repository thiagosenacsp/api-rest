import cachorro from "../models/Cachorro.js";

class CachorroController {

    // get all
    // static = usar métodos de uma classe sem instanciar a classe
    static async listarCachorros (req, res) {
        const listaCachorros = await cachorro.find({})
        res.status(200).json(listaCachorros);
    }

};

export default CachorroController;