import Link from 'next/link';
import headerStyles from './Header.module.scss';
import fetcher from '../../lib/fetcher';
import { getCats } from '../../lib/api';
import { useEffect, useState } from 'react';

const Header = () => {

  // const [menuItems, setMenuItems] = useState([]);

  // useEffect(async () => {
  //   const response = await fetcher(getCats);

  //   const kbCats = response.data.kbsTax.nodes;

  //   setMenuItems(kbCats);
  // }, []);

  // console.log(menuItems, "menuItems")

  return (
    <div className={headerStyles.header}>
      <div className="wrapper">
        <Link href="/" className={headerStyles.logo}>
          <a>
            <img src="/logo.svg" alt="Knowledge Base" height="40"></img>
          </a>
        </Link>

        <nav className={headerStyles.nav}>
          <ul>
            {/* {menuItems.map((item) => {
              return <li key={item.id}><Link href={'/categories/'+item.slug}>{item.name}</Link></li>;
            })} */}
            {/* <li>
              <Link href="/">Back to home</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
