exports.typeDefs = `

type Recipe {
    _id:ID
    name:String!
    imageUrl:String!
    category:String!
    instructions:String!
    description:String!
    createdDate:String
    likes:Int
    username:String
}

type User {
    _id:ID,
    username:String! @unique,
    password:String!
    email:String
    joinDate: String
    favorites:[Recipe]
}

type Token {
    token:String!
}

type Query {
    getAllRecipes:[Recipe],
    getAllUsers:[User],
    getCurrentUser: User,
    getRecipe(_id: ID!): Recipe,
    searchRecipes(searchTerm: String): [Recipe]
}

type Mutation {
    addRecipe(name:String!, imageUrl:String!, description:String! category: String!, instructions: String!, username: String): Recipe,
    signupUser(username:String!, email:String!, password:String!):Token
    signinUser(username: String!, password: String!): Token
}


`