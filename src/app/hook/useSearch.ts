"use client";
import { useState } from "react";
import { client, meiliIndex } from "../config/meilisearch";
import { error } from "console";

export const useSearch =()=>{
    const [searchResult,setSearchResult] = useState([]);


    const searchMovies = async (e: React.ChangeEvent<HTMLInputElement>) =>{
        const query = e.target.value;

        try{
            const  results = await meiliIndex.search(query);
            console.log(results.hits);
            setSearchResult(results.hits)
        }catch(error){
            console.error("Error de busqueda",error)
        }
    };

    return{
        searchResult,
        searchMovies,
    };
}