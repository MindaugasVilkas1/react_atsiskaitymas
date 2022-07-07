
import styles from '../styles/nav.module.css'

const Nav = ({img, link1, link2}) => {
    return ( 
        <nav className={styles.navigationBar}>
            <div>
            <img alt="logo" src={img}/>
            </div>
            <div className={styles.links}>
            <button>{link1}</button>
            <button>{link2}</button>
            </div>

        </nav>
     );
}
 
export default Nav;