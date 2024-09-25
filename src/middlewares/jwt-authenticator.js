import jwtService from "../services/jwt-service"

const jwtAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(jwtService.verifyAccesToken(token))   { 
            next()
        } else {
            throw new Error("")
        }
    } catch (error) {
        res.sendStatus(401);
    }
}

export default jwtAuth