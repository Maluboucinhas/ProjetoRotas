import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className="Nav">
        <Link to="/">Home</Link>
        <Link to="/produto">Produto</Link>
        <Link to="/error">Error</Link>
    </section>
  )
}

export default Header
