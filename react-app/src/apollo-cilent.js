import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient ({
    url:'https://coherent-sole-61.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura=admin-secret':
            'cC5qXeBz2wDQM08d5DFgSSvFqiZfl5NCN1H1cvbwZZHg45PvE6gwxN0nFLHCXxxy'
    },
})

export default client;