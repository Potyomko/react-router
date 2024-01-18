import { useOutletContext } from "react-router-dom";

const Author = () => {
   const aboutAuthor =  useOutletContext();
    return <h5>{aboutAuthor}</h5>
}
export default Author;