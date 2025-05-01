let usuarios = [
    {userID: 1, name: "Fulano", email: "fulano@teste.com"},
    {userID: 2, name: "Ciclano", email: "cilano@teste.com"}
]

class UserController {
    static getAll(req, res) {
        if (usuarios.length === 0) {
            return res.status(404).json({message: "No users found"});
        }
        res.status(200).json(usuarios);
    }

    static getById(req, res) {
        const usuarioId = parseInt(req.params.id);

        const usuario = usuarios.find(u => u.userID === usuarioId);
        if (!usuario) {
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(usuario);
    }    

}

module.exports = UserController;
