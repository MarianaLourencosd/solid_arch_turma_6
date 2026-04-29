const jwt = require('jsonwebtoken')
const { checkUser } = require('../controllers/UserController')

const checkToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: 'Acesso Negado'
        })
    }

    const token = getToken(req)

try{
    const verify = jwt.verify(token,'fatec-turma6-a2026')
    req.user = verified
    next()
}catch{
}
}

module.exports = checkToken