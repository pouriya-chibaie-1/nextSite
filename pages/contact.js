import style from '../styles/contact.module.scss'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TelegramIcon from '@mui/icons-material/Telegram';
const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": { fontFamily: "Vazir ", color: "black", fontSize: "13px", position: "relative" },
    "& .MuiFormLabel-root": { fontFamily: "Vazir ", fontSize: "13px", width: "100%", },
    "& label.Mui-focused": { fontFamily: "Vazir ", textAlign: "right", width: "100%" },
    "& label": {
      transformOrigin: "top right",
      right: 0,
    }
  }
});

const ContactUs = () => {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const classes = useStyles();
  useEffect(() => {
    console.log(`fullname : ${fullName}  
phone :${phone}
email : ${email} 
subject: ${subject} 
 message:${message}`);
  }, [fullName, phone, email, subject, message])
  return (<>
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.divOpacity}></div>
      </div>
      <div className={style.content}>
        <div className={style.divInContent}>ّ
          <div className={style.left}>
            <h1>یک پیام بگذارید
            </h1>
            <div className={style.divContainInput}>
              <TextField onChange={(e) => setFullName(e.target.value)} className={`${classes.root} ${style.inputContact}`} 
                label="نام و نام خانوادگی" variant="standard" />
              <TextField onChange={(e) => setPhone(e.target.value)} className={`${classes.root} ${style.inputContact}`}  label="شماره تماس" variant="standard" />
            </div>
            <div className={style.divContainInput}>
              <TextField onChange={(e) => setEmail(e.target.value)} className={`${classes.root} ${style.inputContact}`}  label="ایمیل" variant="standard" />
              <TextField onChange={(e) => setSubject(e.target.value)} className={`${classes.root} ${style.inputContact}`}  label="موضوع" variant="standard" />
            </div>
            <div className={style.divTextArea}><TextField onChange={(e) => setMessage(e.target.value)} variant="standard" rows={2} className={classes.root} fullWidth label="پیام" multiline /></div>
            <button className={style.submitBtn}>ارسال پیام</button>
          </div>
          <div className={style.right}>
            <div className={style.divIconRight}><h2 >اطلاعات تماس</h2> <h2>نقشه موقعیت</h2></div>
            <div className={style.divIconRight}><img src="/call.svg" /><h4 >  <a href="tel:+989382960927">09382960927</a></h4>  </div>
            <div className={style.divIconRight}><img src='/location.svg' /><h4 >تهران شهر قدس خیابان سرقنات پاساژ<br /> میلاد واحد 84</h4></div>
            <div className={style.divIconRight}><img src='/mail.svg' /><h4 ><a href="mailto:pouriya.chibaie.dev@gmail.com">pouriya.chibaie.dev@gmail.com</a></h4></div>
            <div className={style.divIconRight}><img src='/web.svg' /><h4 ><a href="https:ekaseb.com">www.ekaseb.com</a></h4></div>
            <div className={style.socialMediaDiv}>
              <Image src='/whatsapp.svg'  width={35} height={35} />
              <Image src='/instagram.svg' width={35} height={35}/>
              <Image src='/linkdin.svg' width={35} height={35}/>
              <TelegramIcon sx={{color:"white",width:"40px",height:"40px"}}/>
            </div>
          </div>

        </div>

      </div>
    </div>
  </>);
}

export default ContactUs;