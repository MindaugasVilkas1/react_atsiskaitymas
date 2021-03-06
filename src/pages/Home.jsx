import Nav from "../components/nav";
import { Link} from "react-router-dom";
import img from '../images/logo.jpg'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../styles/homePage.module.css'
import BlogList from '../components/blogList'
const Home = () => {
    const navigate = useNavigate()
    //verify pages
    useEffect(() => {
        const token = localStorage.getItem('Token');
        fetch('http://localhost:5000/api/verify', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) {
                    localStorage.removeItem('Token');
                    return navigate('/');
                }
            }
            )
    },[navigate])
    //use state
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)
    //useEffect
  
    useEffect (() => {
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

    }, []);
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
                {isPending && <div className={styles.loading}><h1>Loading...</h1></div>}
                {data?.length
                    ? (
                        <div className={styles.cards}>
                            {data.map(blog =>
                                <BlogList
                                    key={blog.id}
                                    blog={blog}
                                />
                            )
                            }
                        </div>
                    ) : <div className={styles.noData}>
                        <h1>No Data to display</h1>
                    </div>
                }

            </div>

        </div>

    );
}

export default Home;