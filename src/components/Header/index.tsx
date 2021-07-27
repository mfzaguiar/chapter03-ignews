import Link from 'next/link';

import { AcitiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
        <nav>
          <AcitiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </AcitiveLink>
          <AcitiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </AcitiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
