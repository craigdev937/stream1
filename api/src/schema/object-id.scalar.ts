import { GraphQLScalarType, Kind } from "graphql";
import { ObjectId } from "mongodb";

export const ObjectIdScalar = new GraphQLScalarType({
    name: "ObjectId",
    description: "Mongo id scalar type",
    parseValue(value: string) {
        // client from input variable.
        return new ObjectId(value);
    },
    serialize(value: ObjectId) {
        // value sent to the client.
        return value.toHexString();
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            // value from the client query.
            return new ObjectId(ast.value);
        }
        return null;
    },
});


