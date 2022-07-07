import Nav from "../components/nav";
import { Link } from "react-router-dom";
import img from '../images/logo.jpg'
import styles from '../styles/form.module.css'
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import style from '../styles/addPage.module.css'

// poss Content
const Add = () => {
    const [isPending, setIsPending] = useState(false)
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
        }
        setIsPending(true)
        fetch('http://localhost:5000/api/blog', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added')
                setIsPending(false)
                navigate('/home')
            })
    }
    return (
        <>
            <Nav
                img={img}
                link1={<Link to={'/home'}>Home</Link>}
                link2={<Link to={'/add'}>Add</Link>}
            />
            <div className={style.addPage}>
                <h1>Add Content</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}>
                    <label>Title</label>
                    <input
                        type="text"
                        required
                        name="title"

                    />
                    <label>Description</label>
                    <textarea
                        type="text"
                        required
                        name="description"
                    />
                    {!isPending &&
                        <Button
                            title="Add Blog"
                        />}
                    {isPending &&
                        <Button
                            disabled
                            title="Adding Blog..."
                        />}

                </form>
            </div>
        </>
    );
}

export default Add;