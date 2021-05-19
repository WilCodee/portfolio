import { connect } from 'react-redux'
import { navMobileSee, navMobileNotSee } from '../redux/actionCreator'

type stateTypes = {
  navMobileReducer: { nav: boolean }
}

type ownProps = {
  navMobileState: { nav: boolean }
  navSeeView: () => void
  navNotSeeView: () => void
}

const Navbar = ({ navMobileState, navSeeView, navNotSeeView }: ownProps) => {
  const { nav }: { nav: boolean } = navMobileState

  //active o oculta el navbar
  const navVisible = (): void => {
    nav ? navNotSeeView() : navSeeView()
  }

  //oculta el navbar cuando hace click en algun enlace
  const hideNavMobile = (): void => {
    navNotSeeView()
  }

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href=''>
          <img
            className='img_circle'
            src='https://yt3.ggpht.com/yti/ANoDKi637NyctiFkwTohMayhyFK7H7f1r8v4UtEqwP9dHA=s108-c-k-c0x00ffffff-no-rj'
          />
        </a>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={navVisible}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>
      <div
        id='navbarBasicExample'
        className={`navbar-menu navbar-mobile ${nav ? 'is-active' : ''} `}
      >
        <div className='navbar-start'>
          <a className='navbar-item'>Inicio</a>
          <a href='#about' onClick={hideNavMobile} className='navbar-item'>
            Sobre mi
          </a>
          <a href='#skills' onClick={hideNavMobile} className='navbar-item'>
            Skills
          </a>
          <a href='#proyects' onClick={hideNavMobile} className='navbar-item'>
            Proyectos
          </a>
          <a href='#contact' onClick={hideNavMobile} className='navbar-item'>
            Contacto
          </a>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state: stateTypes) => ({
  navMobileState: state.navMobileReducer,
})

const mapDispatchToProps = (dispatch: any) => ({
  navSeeView() {
    dispatch(navMobileSee())
  },
  navNotSeeView() {
    dispatch(navMobileNotSee())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
