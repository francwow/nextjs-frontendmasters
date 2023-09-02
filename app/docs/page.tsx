import HomeBtn from '@/components/HomeBtn';
import styles from './style.module.css';

const DocsPage = () => {
  return (
    <div className={`${styles.title} ${styles.underline}`}>
      /Docs, styled with css modules (style.module.css)
      <HomeBtn name="home" href="/" />
    </div>
  );
};

export default DocsPage;
