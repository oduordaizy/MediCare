const jwt = require('jsonwebtoken');

const auth = (allowedRoles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);            

            if(allowedRoles.length > 0 && !allowedRoles.includes(decoded.role)) {
                return res.status(403).json({message: 'Unauthorized'})
            }
            req.user = decoded;
            next();

        } catch (error) {
            return res.status(401).json({message: 'Invalid token'})
        }
    }
}

module.exports = auth;