import axios from "axios";

export const fetchBooks = async () => {
    try {
        const data = await axios.get('http://localhost:3004/books');
        const books = await data.data;
        return books;
    } catch (error) {
        console.log(error);
    }
}

export const fetchBooksById = async ({params}) => {
    try {
        const data = await axios.get(`http://localhost:3004/books/${params.bookId}`);
        const book = await data.data;
        return book;
    } catch (error) {
        console.log(error);
    }
}