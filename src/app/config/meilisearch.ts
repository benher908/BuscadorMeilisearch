import { MeiliSearch } from "meilisearch";

export const client = new MeiliSearch({
        host:'http://172.236.225.88',
        apiKey:'a39f8477da24b1ae3b9394e646d63fd3caf9bdde8120ef1d90576ba3535d'
    })

export const  meiliIndex=client.index('movies');
