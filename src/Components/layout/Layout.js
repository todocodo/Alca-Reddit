// This would be the base layout component that would wrap everything

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';


const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );

};

export default Layout;