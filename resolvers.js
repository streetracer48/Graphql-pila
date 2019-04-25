const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const createToken = (user, secret, expiresIn) => {
  const { username, email} = user;

  return jwt.sign({ username, email}, secret, {expiresIn});
}

exports.resolvers = {
    Query:{
        getAllRecipes:async(root,args,{Recipe}) => {
            const allRecipes= await Recipe.find().sort({ createdDate: "desc" });
            return allRecipes
        },
        getAllUsers:async(root,args,{User}) =>{
           const allUsers = await User.find().sort({createdDate: "desc"});

           return allUsers
        }
    },
    Mutation: {
        addRecipe: async (
          root,
          { name, imageUrl, description, category, instructions, username },
          { Recipe }
        ) => {
          const newRecipe = await new Recipe({
            name,
            imageUrl,
            description,
            category,
            instructions,
            username
          }).save();
          return newRecipe;
        },

        signupUser: async (root,{username, email, password},{User})=>
        {
          const user = await User.findOne({username});
          if(user){
            throw new Error("User already exists");
          }

          const newUser = await new User({
            username,
            email,
            password
          }).save();

          return {
            token: createToken(newUser,"helloooo","1hr")
          }

        }

        
    }

    

}