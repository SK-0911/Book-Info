import Bookcards from "./Bookcards";

export default function Allbooks({searchedBooks}) {
    console.log(searchedBooks);
    return (
        <div 
            className="container-fluid"
            style={{
                width: '100vw',
                position: 'absolute',
                marginTop: '25vh',
                height: 0,
                marginLeft: `${searchedBooks? '0vw': '100vw'}`,
                transition: `margin-left 1s ease`
            }}
        
        
        >

            <div className="col-10 m-auto" style={{height: '65vh', overflowY: 'scroll'}}>
                {
                    searchedBooks? <Bookcards searchedBooks={searchedBooks}/>:null
                }
            </div>
        </div>
    )
}