import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css' 


function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> React Petrol stations</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Stations</Link>
                    </li>
                    <li>
                        <Link to='/new-station'>New Station</Link>
                    </li>
                    <li>
                        <Link to='/my-stations'>My Stations</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default MainNavigation;