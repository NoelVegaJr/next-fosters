import { useRouter } from 'next/router'
import Link from 'next/link';
const SideNav = (props) => {
  const router = useRouter();
  const logoutHandler = async () => {
    await fetch('/api/auth/logout')
    router.push('/')
  }

  const closeSideNavHandler = () => {
    props.closeSideNav()
  }

  return (
    <>
      <div onClick={closeSideNavHandler} className={`h-full w-full fixed mt-20 top-0 left-0 bg-violet-100 bg-opacity-50 ease-in-out duration-500 ${props.classes}`}/>
      <div className={`h-full w-3/4 fixed top-0 left-0 mt-20 bg-slate-900 ${props.classes} ease-in-out duration-700 `}>
        <ul className="text-violet-100 text-lg font-semibold">
        {/* {session && <li className="border-b border-b-violet-900 hover:bg-violet-800"><Link href="/profile"><a onClick={closeSideNavHandler} className="block p-4">Profile</a></Link></li>}
          {!session && <li className="border-b border-b-violet-900 hover:bg-violet-800"><Link href="/login"><a onClick={closeSideNavHandler} className="block p-4">Login</a></Link></li>}
          {!session && <li className="border-b border-b-violet-900 hover:bg-violet-800"><Link href="/register"><a onClick={closeSideNavHandler} className="block p-4">Register</a></Link></li>} */}
          <li className="border-b border-b-violet-900 hover:bg-violet-800"><Link href="/adopt"><a onClick={closeSideNavHandler} className="block p-4">Adopt</a></Link></li>
          <li className="border-b border-b-violet-900 hover:bg-violet-800"><Link href="/foster"><a onClick={closeSideNavHandler} className="block p-4">Foster</a></Link></li>
          {<li className="border-b border-b-violet-900 hover:bg-violet-800"><button onClick={logoutHandler} className="p-4 w-full text-left">Logout</button></li>}
        </ul>
      </div>
    </>

    // </div>
  )
}

export default SideNav