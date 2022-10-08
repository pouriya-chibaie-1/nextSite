import React from 'react';
import styles from '../styles/footer.module.scss';

const Footer = () => {
   const style={textAlign:"right",display:"flex",flexDirection:"column",justifyContent:'center'}

    return (<>
    <div className={styles.container}>
        <div style={{width:"90%",height:"100%",margin:"auto",direction:"rtl",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
            <div style={{textAlign:"right",display:"flex",flexDirection:"column",justifyContent:'center'}}>
                <ul>
                    <ol>خانه</ol>
                    <ol>امکانات</ol>
                    <ol>فروشگاه ها</ol>
                    <ol>خرید و اجاره </ol>
                </ul></div>
            <div style={style}><ul>
           
           <ol>معرفی</ol>
            <ol>باشگاه مشتریان</ol>
            <ol>اخبار و اطلاعیه ها</ol>
            <ol>تماس با ما</ol>
            </ul></div>
            <div style={style}>
                <ul>
                    <ol>تهران شهرستان قدس ، خیابان آزادی پاساژ میلاد</ol>
                    <ol>اطلاعات تماس:09382960927</ol>
                    <ol>پست الکترونیکی:pouriya.chibaie.dev@gmail.com</ol>
                    <ol></ol>
                </ul>
            </div>
            <div style={style}>
                <img src='/milladmap.png'/>
            </div>
        </div>
        <img src='/'/>
    </div>
    </>  );
}
 
export default Footer;