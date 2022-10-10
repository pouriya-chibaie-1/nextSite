import React from 'react';
import styles from '../styles/footer.module.scss';
import Link from 'next/link';
const Footer = () => {
    const style1 = { textAlign: "right", display: "flex", flexDirection: "column" }
        ;
    return (<>
        <div className={styles.container}>
            <div className={styles.contentFooter}>
                <div className={styles.footerSection}>

                    <Link href={`/`} ><a className={styles.linkStyle}>خانه</a></Link>
                    <Link href={`/facilities`}><a className={styles.linkStyle}>امکانات</a></Link>
                    <Link href={`/stores`}><a className={styles.linkStyle}>فروشگاه ها</a></Link>
                    <Link href={`/rent`} ><a className={styles.linkStyle}>خرید و اجاره </a></Link>
                </div>
                <div className={styles.footerSection}>

                    <Link href={`/about`}><a className={styles.linkStyle}>معرفی</a></Link>
                    <Link href={`https://ekaseb.com`}><a className={styles.linkStyle}>باشگاه مشتریان</a></Link>
                    <Link href={`/news`}><a className={styles.linkStyle}>اخبار و اطلاعیه ها</a></Link>
                    <Link href={`/contact`}><a className={styles.linkStyle}>تماس با ما</a></Link>
                </div>
                <div className={styles.footerSection}>
                    <Link href={`/a`} ><a className={styles.linkStyle}>تهران شهرستان قدس ، خیابان آزادی پاساژ میلاد</a></Link>
                    <Link href={`/b`} ><a className={styles.linkStyle}>اطلاعات تماس:09382960927</a></Link>
                    <Link href={`/c`} ><a className={styles.linkStyle}>پست الکترونیکی:pouriya.chibaie.dev@gmail.com</a></Link>
                </div>
                <div className={styles.footerSection}>
                    <img src='/milladmap.png' style={{width:"200px",height:"200px"}} />
                </div>
            </div>
            <div>
            <h4 style={{color:"white",background:"#2b2b2b",display:"flex",justifyContent:"center"}}>تمامی حقوق مادی این وب سایت متعلق به مجتمع تجاری میلاد می باشد</h4>
            </div>
        </div>
    </>);
}

export default Footer;