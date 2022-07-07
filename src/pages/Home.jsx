import Nav from "../components/nav";
import { Link } from "react-router-dom";
import img from '../images/logo.jpg'
import { useState } from "react";
import { useEffect } from "react";
import styles from '../styles/homePage.module.css'
import BlogList from '../components/blogList'
const Home = () => {
    //use state
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)
    //useEffect
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        //fetch get data
        fetch('http://localhost:5000/api/blog')
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setisPending(false)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
            })

    }
    return (
        <div>
            <Nav
                img={img}
                link1={<Link to={'/home'}>Home</Link>}
                link2={<Link to={'/add'}>Add</Link>}
            />
            <div className={styles.homePage}>
                <h1>Blogs</h1>
                {error && <div>{error}</div>}
                {isPending && <div> Loading... </div>}
                <div className={styles.cards}>
                {data ?
                 data.map(blog => (
                <BlogList
                key={blog.id}
                blog={blog}
                />
                 ))
                 : <div>The is no data</div>  
                }
                </div>
            </div>

        </div>

    );
}

export default Home;