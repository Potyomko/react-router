import { useParams, useLoaderData, Outlet, Link} from "react-router-dom"
export default function Book() {
const {bookId} = useParams();
const {image, title, author, aboutAuthor, description, rating} = useLoaderData();
    return (
        <div className="thumb">
            <img src={image} alt="" />
            <h2>Book {bookId}</h2>
            <h1>{title} - {author}</h1>
            <p>{description}</p>
            <p>{rating}</p>

            <Link to={`/books/${bookId}/author`}> Про автора</Link>
            <Outlet context={aboutAuthor}/>
        </div>
    )
}
