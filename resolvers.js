exports.resolvers = {
    Query:{
        getAllRecipes:async(root,args,{Recipe}) => {
            const allRecipes= await Recipe.find().sort({ createdDate: "desc" });
            return allRecipes
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
    }

    

}