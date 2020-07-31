const jwt = require('jsonwebtoken');
var tokenString = 'utils';
verificarToken = (token) => {
    try {
        let data = jwt.verify(token, tokenString, { algorithms: 'RS256' });
        return data;
    } catch (error) {
        return null;
    }
}

wachiman = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        let resultado = verificarToken(token);
        if (resultado) {
            next();
        } else {
            res.status(401).json({
                ok: false,
                mensaje: 'No esta autorizado para realizar la soliciitud'
            })
        }
    } else {
        res.status(401).json({
            ok: false,
            mensaje: 'Necesitar estar autenticado para realiazr esta operación'
        })
    }
}


module.exports = {
    verificarToken,
    wachiman
}

