import { createBrowserRouter } from "react-router-dom";
import { fetchBooks, fetchBooksById } from "service/fetchBooks";
import { lazy } from "react";

/**
 * передача другу посилання на конкретну книгу 
 * робимо вкладені маршрути як елементи поточної сторінки
 * useNavigate для імітації логінізації
 * useLocation для передачі стейту попередньої локації
 */
const App = lazy(() => import('./components/App'));
const Home = lazy(() => import('./pages/Home'));
const BookList = lazy(() => import('./pages/BookList'));
const Book = lazy(() => import('./pages/Book'));
const Author = lazy(()=>import('./components/Author'))
const NotFound = lazy(()=>import('./pages/NotFound'))
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/books',
                element: <BookList/>,
                loader: fetchBooks,
            },
            {
                path: '/books/:bookId',
                element: <Book/>,
                loader: fetchBooksById,
                children: [
                    {
                        path: '/books/:bookId/author',
                        element: <Author />,
                    }
                ]
            }
            ]      
    }
])