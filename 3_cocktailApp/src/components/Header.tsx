import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
      }

    return (
        <header className="header">
          <h1 className="header-title" onClick={handleClick} >CocktailApp</h1>
         
          <nav className="header-nav">
                <Link to="/random" className='header-nav-link'>Random Cocktail</Link>
                <Link to="/advanced-search" className='header-nav-link'>Advanced Search</Link>
            </nav>
        </header>
      );
}
export default Header;