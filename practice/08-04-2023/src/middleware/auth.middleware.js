


import config from "../config.js";
import CustomError from "../utils/customError.js"



export const isLogggedIn = asyncHandler(async(req,res,next)=>{
    let token;

    if(req.cookies.token ||(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))){
        token = req.cookies.token || req.headers.authorization.split(" ")[1];

        // token = "Bearer hkjhkjhkj"

    }
    if(!token){
        throw new CustomError("Not authorized to access this resource",401);
    }
    try{
        const decodedJwtPayLoad = JWT.verify(token, config.JWT_SECRET);
        req.user = await User.findById(decodedJwtPayLoad._id,"name email role")
    } catch (error){
            // not done here
    }
})


export const authorize = (...requiredRoles) => asyncHandler( async(req, res, next) => {
    if (!requiredRoles.includes(req.user.role)) {
        throw new CustomError("you are not authorized to access this resource");
    }
    next ();
})
