const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const server = newApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

const app = express();
app.use(express.urlencoded({ etended: false }));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, //needs to be filled))
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, ()=> {
            console.log(`API server running on port ${PORT}!`);
        })
    })
}

startApolloServer(typeDefs, resolvers);