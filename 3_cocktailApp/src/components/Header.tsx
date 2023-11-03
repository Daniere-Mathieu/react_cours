import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
      }

    return (
        <header className="header">
          <h1 className="header-title" onClick={handleClick} >CocktailApp</h1>
         
        </header>
      );
}
export default Header;