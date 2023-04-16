import asyncHandler from "../service/asyncHandler";

// sign a new user in the database
export const signUp = asyncHandler(async(req,res)=>{
    // get the data from the user
    const {name,email,password} = req.body;

    //: validations

    if(!name ||!email || !password){
        throw new CustomError("Please enter all the required fields",400)
    }


    User
})