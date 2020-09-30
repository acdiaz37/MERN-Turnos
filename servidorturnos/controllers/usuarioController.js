const Usuario = require('../models/Usuario')

exports.crearUsuario = async (req,res) => {
    console.log(req.body)

    //extraer email y password
    const { email, password} = req.body;


    try {
        //revisa que el usuario sea unico
        let usuario = await Usuario.findOne({email});
        
        if (usuario){
            return res.status(400).json({
                msg:'El correo suministrado ya se encuentra registrado'
            });
        }

        //crea el nuevo usuario
        usuario = new Usuario(req.body)

        //guardar usuario
        await usuario.save();

        //mensaje de confirmacion
        res.json({
            msg:'Guardado satisfactoriamente en base de datos'
        })

        
    } catch (error) {
        //mensaje de error
        console.log(error);
        res.estatus(400).send('Hubo un error')
        
    }
}