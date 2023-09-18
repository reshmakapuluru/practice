import React from "react";
import axios from "axios";
function Books(){
    var[books,setBooks]=React.useState([])
    React.useEffect(()=>{
        axios.get('http://localhost:4000/books').then((res)=>{
            console.log(res.data)
            // setBooks([...res.data])
        })
    })
    return(
        <div>
            <h1>Books</h1>
            <ul>
                {
                    books.length>0 && books.map((book)=>{
                        return <li>{book.author}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Books;