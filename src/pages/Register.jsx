import styles from '../styles/form.module.css'
import style from '../styles/registration.module.css'
import img from '../images/logo.jpg'
import Button from "../components/Button"
import Nav from '../components/nav'

const Register = () => {
    return (
        <>
        <Nav
        img={img}
        />
            <div className={style.registration}>
                <div className={style.registerTitle}>
                    <h2>Registration Form </h2>
                </div>
                <form className={styles.form}>
                    <label>Email</label>
                    <input
                        type="text"
                        required
                        name="email"

                    />
                    <label>Repeat Email</label>
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

export default Register;