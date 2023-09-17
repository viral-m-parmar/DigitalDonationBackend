const UserModel = require("../model/userModel");
const bcrypt = require('bcryptjs');

module.exports.signup = async function(req,res){

    let pass = req.body.password;
    let encpass = bcrypt.hashSync(pass.toString(),10);
    console.log(encpass); 
    req.body.password = encpass;

    let user = UserModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        contactNum:req.body.contactNum,
        address:req.body.address,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode,
        activeInd:1,
        role:req.body.role
    })

    let data = await user.save()
    res.json({data:data,msg:"Signup Done",rcode:200})
}

module.exports.login = async function(req,res){

    let email = req.body.email
    let password = req.body.password

    let user = await UserModel.findOne({email:email})

    if(user){
        if(bcrypt.compareSync(password.toString(),user.password) == true){
            res.json({data:user,msg:"Login Done",rcode:200})
        }
        else{
            res.json({data:req.body,msg:"Invalid Credential",rcode:-9})
        }
    }
}

