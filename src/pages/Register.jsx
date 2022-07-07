import styles from '../styles/form.module.css'
import style from '../styles/registration.module.css'
import img from '../images/logo.jpg'
import Button from "../components/Button"
import Nav from '../components/nav'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [isPending, setIsPending] = useState(false)
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const reg = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        setIsPending(true)
        fetch('http://localhost:5000/api/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reg)
        })
            .then(() => {
                console.log('new user added')
                setIsPending(false)
                navigate('/login')
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
                    <h2>Registration Form </h2>
                </div>
                <form onSubmit={handleSubmit}
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
                            title="Register"
                        />}
                    {isPending &&
                        <Button
                            disabled
                            title="Registering..."
                        />}
                </form>
            </div>
        </>
    );
}

export default Register;