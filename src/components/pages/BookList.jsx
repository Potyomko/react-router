import { NavLink, useLoaderData, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBooks } from "service/fetchBooks";

export function BookList() {
    const books = useLoaderData();
    const goBack = useNavigate();
    
    return (
        <div>
        <button type='button 'onClick={()=>goBack(-1)}>Go back</button>
        <h1>BookList</h1>
        {books && <ul className="bookList">
           {books.map(({id, title, author})=>(
            <li key={id}> 
              <NavLink to={`/books/${id}`}>{id} - {title} - {author}</NavLink>
            </li>
           ))}
        </ul>}        
        </div>
    )
}