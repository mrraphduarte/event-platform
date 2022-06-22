import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4oxhgjg1dgp01z44rby2795/master',
    cache: new InMemoryCache()
})