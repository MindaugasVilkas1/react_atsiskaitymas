import Nav from "../components/nav";
import img from '../images/logo.jpg'
import style from '../styles/registration.module.css'
import styles from '../styles/form.module.css'
import Button from "../components/Button";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
const Login = () => {
    const [isPending, setIsPending] = useState(false)
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const reg = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        setIsPending(true)
        fetch('http://localhost:5000/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reg)
        })
            .then(res => res.json())
            .then(res => {
                setIsPending(false)
                if (res.err) return alert(res.err)
                if (res.token) {
                    localStorage.setItem('Token', res.token)
                    navigate('/home')
                }
            })
    }
    return (
        <>
            <Nav
                img={img}
                link1={<Link to={'/login'}>Login</Link>}
                link2={<Link to={'/'}>Register</Link>}

            />
            <div className={style.registration}>
                <div className={style.registerTitle}>
                    <h2>Login</h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}>
                    <label>Email</label>
                    <input
                        type="text"
                        required
                        name="email"

                    />
                    <label>Password</label>
                    <input
                        type="text"
                        required
                        name="password"
                    />
                    {!isPending &&
                        <Button
                            title="Login"
                        />}
                    {isPending &&
                        <Button
                            disabled
                            title="Connecting..."
                        />}
                </form>
            </div>
        </>

    );
}

export default Login;