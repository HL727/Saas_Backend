//bring in prisma and cookie

const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

//user signup
exports.signup = async(req, res, next)=>{
    try{
        const {first_name, last_name, email, password} = req.body
        const user = await prisma.user.create({
            data:{
                first_name,
                last_name,
                email,
                password,
            }
        })
        //send user a token
        cookieToken(user, res)

    }
    catch(error){
        throw new Error(error)
    }
}
