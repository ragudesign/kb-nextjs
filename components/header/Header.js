import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import headerStyles from './Header.module.scss'

const Header = () => {

    return (

        <div className={headerStyles.header}>

            <div className={headerStyles.wrapper}>

                <Link href="/" className={headerStyles.logo}>
                    <a>
                        <Image
                            src={Logo}
                            alt="FAQ Desk"
                            width={160}
                        />
                    </a>
                </Link>

                <nav className={headerStyles.nav}>
                    <ul>
                        <li>
                            <Link href="/">Back to home</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>

    )

}

export default Header