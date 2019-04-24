exports.resolvers = {
    Query:{
        getAllRecipes:() => {}
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