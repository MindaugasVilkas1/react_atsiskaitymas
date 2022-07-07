import Nav from "../components/nav";
import img from '../images/logo.jpg'
import style from '../styles/registration.module.css'
import styles from '../styles/form.module.css'
import Button from "../components/Button";
const Login = () => {
    return ( 
        <>
        <Nav
        img={img}
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
                    <Button />
                </form>
            </div>
        </>
        
     );
}
 
export default Login;