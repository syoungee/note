import styles from './layout.module.css';
import Link from 'next/link';

export default function Prodcut({ children }: { children: RecordingState.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
