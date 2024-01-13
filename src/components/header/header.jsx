import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <div className="link">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <div className="link">Events</div>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <div className="link">About us</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Sed ut perspiciatis unde omnis</p>
      </div>

      
    </header>
  );
};
