import Link from 'next/link';
import { withRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Mood Tracker', href: '/moodtracker' },
    { text: 'Community', href: '/community' },
    { text: 'Therapists', href: '/therapists' },
    // { text: 'Log In', href: '/login'},
    // { text: 'Sign Up', href: '/signup'},

    // { text: '', href: '' },
  ];
  const [ session, loading ] = useSession()

  return (

    <nav className="navbar">
      <div className="container">
        <Link href="/"><a className="logo">TEMPUS</a></Link>

        <ul className="nav-links">
          { navs.map(nav => (
            <li><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
          )) }
          {!session && <>
            <li>
              <a onClick={signIn} className={`nav-item ${ router.pathname == '/login' ? 'active' : '' }`}>Sign In</a>
            </li>
          </>}
          {session && <>
            <li>
              <a onClick={signOut} className={`nav-item ${ router.pathname == '/login' ? 'active' : '' }`}>Sign Out</a>
            </li>
          </>}

        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);