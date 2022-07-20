/*
    This is just a welcome page with some information about the web app
*/

import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <p className={styles.text_info}>This is <span className={styles.title}>Alca Reddit App</span>, a task given by Alcatraz Bulgaria!</p>
            <p className={styles.text_info}>A bit Info:</p>
            <ul>
                <li className={styles.text_info}>It uses ReactJs for the frontend and Koa.js for the backend</li>
                <li className={styles.text_info}>It has 2 main functionalities, the user can create a thread and view all threads that are created</li>
                <li className={styles.text_info}>The threads are stored in the cloud-based MongoDB Database</li>
            </ul>
            <div className="row mt-6 text-center">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 p-2">
                    <Link to={"/create-thread"} className="btn btn-danger">Create Thread</Link>
                </div>
                <div className="col-sm-4 p-2">
                    <Link to={"/thread-list"} className="btn btn-danger">Thread List</Link>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
};

export default WelcomePage;