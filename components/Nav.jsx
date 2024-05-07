import { Link } from "react-scroll"

const links = [
    {
        path:'inicio',
        name:'inicio',
        offset: -50,
    },
    {
        path:'menu',
        name:'menú',
        offset: -50,
    },
    {
        path:'about',
        name:'Quienes somos',
        offset: -150,
    },
    {
        path:'contactanos',
        name:'contactanos',
        offset: 0,
    },
]

const Nav = ({containerStyles, linkStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
            return (
            <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}>{link.name}</Link>)
        })}
    </nav>
  )
}

export default Nav