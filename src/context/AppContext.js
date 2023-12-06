import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl';


export const AppContext=createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalpages,setTotalPages]=useState(null);



    async function setInfo(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        try{
            let info=await fetch(url);
            let output=await info.json();
            console.log(output);
            setPage(output.page);
            setPosts(output.posts);
            setTotalPages(output.totalPages);
        }
        catch(error){
            console.log("Error found");
        }
        setLoading(false);
    }

    useEffect(()=>{
        setInfo();
    },[])

    function clickHandler(page){
        setPage(page);
        setInfo(page);
    }

    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalpages,
        setTotalPages,
        setInfo,
        clickHandler
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}