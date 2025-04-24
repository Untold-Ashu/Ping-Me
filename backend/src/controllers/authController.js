import User from '../model/user.model.js';
import bcrypt from 'bcrypt';


export const RegisterController = async (req, res) => {
    try {
        const { fullName,userName,password,confirmPassword,gender } = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({ message: 'Password and confirm password do not match' });
    }
    const user = await User.findOne({ userName });
    if(user){
        return res.status(400).json({ message: 'User already exists' }); 
    }
//hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

//generate profile pic
const boyProfilePic = `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}&radius=10&backgroundType=solid,gradientLinear&randomizeIds=true&earringsProbability=100&backgroundColor=ffdfbf,b6e3f4,c0aede,d1d4f9,ffd5dc`;
const girlProfilePic = `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}&radius=10&backgroundType=solid,gradientLinear&randomizeIds=true&earringsProbability=100&backgroundColor=ffdfbf,b6e3f4,c0aede,d1d4f9,ffd5dc`;


    const newUser = await User.create(
    { fullName,
    userName,
    password:hashedPassword,
    profilePic:gender === 'male' ? boyProfilePic : girlProfilePic,
    gender 
    });
    res.status(201).json(newUser);

    if(newUser){
        generateTokenAndSetCookies(newUser._id,res);
        res.status(201).json({
            success:true,
            message:"User registered successfully",
            user:newUser //will change the fields in the response if did not use toJSON()
        });
    }
    else {
        res.status(400).json({ error: "Invalid user data" });
    }
    } catch (error) {
        console.log("Error in register controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }

}

export const LoginController = async (req, res) => {
    try {
       const {username,password} = req.body;
       const user = await User.findOne({userName:username});
       if(!user){
        return res.status(400).json({ message: 'User not found' });
       }
       const isPasswordCorrect = await bcrypt.compare(password,user?.password|| "");
       if(!isPasswordCorrect){
        return res.status(400).json({ message: 'Invalid password' });
       }
       generateTokenAndSetCookies(user._id,res);
       res.status(200).json({
        success:true,
        message:"User logged in successfully",
        user:user//will change the fields in the response if did not use toJSON()
       });
    }
    catch(error){
        console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export const LogoutController = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({
            success:true,
            message:"User logged out successfully"
        });
    } catch (error) {
        console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}


