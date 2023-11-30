import { createBrowserRouter } from "react-router-dom";
import { App } from "components/App";
import { Home } from 'components/pages/Home';
import { BookList } from 'components/pages/BookList';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: '/books',
                element: <BookList/>
            }
        ]
    }
])