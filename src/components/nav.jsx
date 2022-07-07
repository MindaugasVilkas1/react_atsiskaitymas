import {Link} from 'react-router-dom'
import styles from '../styles/nav.module.css'

const Nav = ({img}) => {
    return ( 
        <nav className={styles.navigationBar}>
            <div>
            <img alt="logo" src={img}/>
            </div>
            <div className={styles.links}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/'}>Register</Link>
            </div>

        </nav>
     );
}
 
export default Nav;