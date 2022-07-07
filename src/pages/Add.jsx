import Nav from "../components/nav";
import { Link } from "react-router-dom";
import img from '../images/logo.jpg'
const Add = () => {
    return ( 
        <>
          <Nav
                img={img}
                link1={<Link to={'/home'}>Home</Link>}
                link2={<Link to={'/add'}>Add</Link>}
            />
            <h1>Add Content</h1>
        </>
     );
}
 
export default Add;