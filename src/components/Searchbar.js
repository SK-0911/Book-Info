import { useRef } from "react";

export default function Searchbar({setSearchedBooks, setIsLoading}) {
    const inputRef = useRef(null);

    const buttonClickHandler = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://openlibrary.org/search.json?title=${inputRef.current.value}&limit=50`)
            const data = await response.json();
            setSearchedBooks(data);
            inputRef.current.value = ``;
            setIsLoading(false);
        } catch(error) {
            console.log(`Error: ${error}`);
        }
        
    }

    return (
        <div className="contianer-fluid" style={{width: "100vw"}}>
            <div className="form-control d-flex col-7 m-auto" style={{height: "50px"}}>
                <input ref={inputRef} className="form-control" type="text" placeholder="Search Book" />
                <button onClick={buttonClickHandler} className="btn btn-primary">Search</button>
            </div>
        </div>
    );
}