import styles from '../styles/homePage.module.css'
const BlogList= ({ blog }) => {
    return (
       
            <div className={styles.card}>
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>

            </div>
    );
}

export default BlogList;