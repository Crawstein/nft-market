import { NavLink, Link } from 'react-router-dom';
import HeaderLot from './HeaderLot';
import InfoBlock from '../InfoBlock/InfoBlock';
import HeaderStats from './HeaderStats';



const headerStatsData = {
    artwork: 8.9,
    artist: 65.3,
    collection: 87.2
}

function Header(props) {
    
    return (
        <header id='header' className='header'>
            <div className="container">
                <div className="header__menu">
                    <nav className="header__nav">
                        <NavLink to="/" className="nav__link" >Marketplace</NavLink>
                        <NavLink to="/artists" className="nav__link" >Artists</NavLink>
                        <NavLink to="/community" className="nav__link" >Community</NavLink>
                        <NavLink to="/collections" className="nav__link" >Collections</NavLink>
                    </nav>
                    <Link to='/contact' className="header__button button">Contact</Link>
                </div>
                <div className="header__content">
                    <div className="header__info">
                        <InfoBlock {...props.infoBlockData}/>
                        <HeaderStats {...headerStatsData}/>
                    </div>
                    <HeaderLot />
                </div>
            </div>

        </header>
    )
}

export default Header