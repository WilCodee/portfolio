const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img
            className="img_circle"
            src="https://yt3.ggpht.com/yti/ANoDKi637NyctiFkwTohMayhyFK7H7f1r8v4UtEqwP9dHA=s108-c-k-c0x00ffffff-no-rj"
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Inicio</a>
          <a className="navbar-item">Sobre mi</a>
          <a className="navbar-item">Skills</a>
          <a className="navbar-item">Proyectos</a>
          <a className="navbar-item">Contacto</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
