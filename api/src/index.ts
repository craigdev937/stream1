import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema, Query, Resolver } from "type-graphql";

@Resolver()
class HelloResolver {
    @Query(() => String)
    async hello() {
        return "Ful-stack GraphQL!"
    }
};

(async () => {
    const app: ApolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ HelloResolver ],
        })
    })

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}/graphql`);
        console.log("Press Ctrl + C to exit.");
    })
})();



