import Link from 'next/link';
import headerStyles from './Header.module.scss';

const Header = ({menu}) => {

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
            {menu.map((item) => {
              return <li key={item.id}><Link href={'/categories/'+item.slug}>{item.name}</Link></li>;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
