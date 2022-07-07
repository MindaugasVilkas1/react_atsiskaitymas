import Nav from "../components/nav";
import img from '../images/logo.jpg'
import style from '../styles/registration.module.css'
import styles from '../styles/form.module.css'
import Button from "../components/Button";
import {Link} from 'react-router-dom'
const Login = () => {
    
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
                <form className={styles.form}>
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
                    <Button
                    title="Login"
                    />
                </form>
            </div>
        </>

    );
}

export default Login;