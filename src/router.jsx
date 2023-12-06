import { createBrowserRouter } from "react-router-dom";
import { App } from "components/App";
import { Home } from 'components/pages/Home';
import { BookList } from 'components/pages/BookList';
import { fetchBooks, fetchBooksById } from 'service/fetchBooks';
import { Book } from 'components/pages/Book';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/books',
                element: <BookList />,
                loader: fetchBooks,
            },
            {
                path: '/books/:bookId',
                element: <Book/>,
                loader: fetchBooksById,
            }
        ]
    }
])