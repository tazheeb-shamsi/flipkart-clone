//! components
import User from "../Schema/userSchema.js";
import Connection from "../DataBase/db.js";

//! Sign-up API
export const userSignUp = async (request, response) => {
  try {
    console.log(request.body.userName);
    const exist = await User.findOne({ userName: request.body.userName });
    if (exist) {
      return response.status(401).json({ message: "Username Already Exists!" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

//! login API
export const userLogin = async (request, response) => {
  try {
    const userName = request.body.userName;
    const password = request.body.password;

    let user = await User.findOne({ userName: userName, password: password});
    if (user){
      return response.status(200).json({ data : user });
    }else{
      return response.status(401).json(` Invalid Credentials`); 

    }
  } catch (error) {
    response.status(500).json("Error occurred", error.message);
  }
};