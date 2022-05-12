function Header(){
    return(
        <header>
            {/* <NavLink to="/" exact={true}> </NavLink>
            <NavLink to="/register">Register</NavLink><br/>
            <NavLink to="/UserDetails/id">User Details</NavLink><br/>
            <NavLink to="/portfolio">Portfolio</NavLink><br/> */}

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link " aria-current="page" href="/">Login</a>
                    <a class="nav-link " href="/register">Register</a>
                    <a class="nav-link " href="/UserDetails/id">UserDetails</a>
                    <a class="nav-link " href="/portfolio">Portfolio</a>
                </div>
                </div>
            </div>
           
            </nav>
        </header>
    )

}
export default Header