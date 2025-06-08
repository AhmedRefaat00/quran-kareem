import styles from './Footer.module.css';
import logo from '../../assets/icons/logo.png';
const Footer = () => {
    return (
        <footer id='footer'>
            <div className={styles.logo}>
                <p>القرآن</p>
                <img src={logo} alt="logo" width={60} height={60} />
                <p>الكريم</p>

            </div>
            <div className={styles.azkar}>
                <h2>أذكار</h2>
                <ul>
                    <li>أذكار الصباح</li>
                    <li>أذكار المساء</li>
                    <li>أذكار النوم</li>
                    <li>أذكار الصلاة</li>
                    <li>أذكار الاستيقاظ</li>
                </ul>
            </div>
            <div className={styles.ahadith}>
                <h2>أحاديث</h2>
                <a href="https://hadeethenc.com/ar/browse/category/1">  القرآن الكريم وعلومه </a>
                <a href="https://hadeethenc.com/ar/browse/category/4"> الفقه وأصوله  </a>
                <a href="https://hadeethenc.com/ar/browse/category/7"> السيرة والتاريخ  </a>
                <a href="https://hadeethenc.com/ar/browse/category/2"> الحديث وعلومه  </a>
                <a href='https://hadeethenc.com/ar/browse/category/6'>الدعوة والحسبة</a>

            </div>
            <div className={styles.sections}>
                <h2>الأقسام</h2>
                <a href="#hero"> الرئيسية</a>
                <a href="#prayers"> مواعيد الصلاة </a>
                <a href="#azkar"> الأذكار </a>
                <a href="#quran"> القرآن الكريم </a>
                <a href="/"> الأحاديث </a>

            </div>
            <div className={styles.links}>
                <h2>مواقع مفيدة</h2>
                <a href='https://www.dar-alifta.org/ar'> دار الإفتاء المصرية</a>
                <a href='https://binothaimeen.net/'>موقع ابن عثيمين</a>
                <a href='https://alimamaltayeb.com/'>موقع الامام احمد الطيب</a>
                <a href='https://surahquran.com/'>موقع القرآن الكريم</a>
                <a href='https://www.islamic-society.org/'>الجمعية الإسلامية العالمية</a>

            </div>
            <div className={styles.copyright}>
                <p>تم تصميم وتطوير بواسطة
                    <a href="https://www.linkedin.com/in/ahmedrrefaat/" className={styles.developerLink} target="_blank" rel="noopener noreferrer"> أحمد رفعت  </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;