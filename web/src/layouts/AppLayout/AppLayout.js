import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <>
      <header>
        <div id="navbar" className="container">
          <div id="logo">
            <Link to={routes.home()}>Super coloc</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
              <li>
                <Link to={routes.expenseTypes()}>Expense types</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
