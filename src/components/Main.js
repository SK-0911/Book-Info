import { useState } from "react";
import Searchbar from "./Searchbar";
import Allbooks from "./Allbooks";

export default function Main() {
    const [searchedBooks, setSearchedBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Searchbar setSearchedBooks={setSearchedBooks} setIsLoading={setIsLoading} />

            {isLoading && 
                <div className="bg-dark text-white display-4" style={{position: 'absolute', top:'45vh', left:'45vw', backdropFilter: 'blur(2px)'}}>Loading...</div>
            }
            
            {searchedBooks && 
                <div style={{width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, backdropFilter: 'blur(2px)'}}></div>
            }
            
            <Allbooks searchedBooks={searchedBooks} />
        </>
        
    );
}