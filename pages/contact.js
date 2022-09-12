import style from '../styles/contact.module.scss'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import Image from 'next/image';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Formik, useFormik } from 'formik';
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
const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "اجباری";
  } else if (values.fullName.length > 20) {
    errors.fullName = 'نام ونام خانوادگی باید 20 کاراکتر یا کمتر باشد';
  }

  if (!values.phone) {
    errors.phone = "اجباری";
  } else if (values.phone.length > 12) {
    errors.phone = 'شماره تماس  باید 11 کاراکتر';
  }

  if (!values.email) {
    errors.email = "اجباری";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'ادرس ایمیل نامعتر است';
  }
  if (!values.subject) {
    errors.subject = "اجباری";
  } else if (values.subject.length < 5 || values.subject.length > 30) {
    errors.subject = 'موضوع کمتر از پنج کاراکتر یا بیشتراز 30 کاراکتراست';
  }
  if (!values.message) {
    errors.message = "اجباری";
  } else if (values.message.length < 29 ) {
    errors.message = 'پیام باید بیشتر از 30 کاراکتر باشد'
  }

  return errors;
};

const ContactUs = () => {

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    }, validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
            <form onSubmit={formik.handleSubmit} >

              <div className={style.divContainInput}>
                {/* input fullName */}
                <TextField value={formik.values.fullName}
                 id="fullName" name="fullName" onChange={formik.handleChange} 
                 className={`${classes.root} ${style.inputContact}`}
                  label="نام و نام خانوادگی" variant="standard" />

                {formik.errors.fullName ? <div className={style.validateError}>{formik.errors.fullName}</div> : null}


                {/* input phone */}
                <TextField value={formik.values.phone} id="phone" name="phone" 
                onChange={formik.handleChange} className={`${classes.root} ${style.inputContact}`} 
                label="شماره تماس" variant="standard" />
               
                {formik.errors.phone ? <div className={style.validateError}>{formik.errors.phone}</div> : null}
              </div>
              <div className={style.divContainInput}>
                {/* input email  */}
                <TextField validateError={Formik} value={formik.values.email} id="email" name="email" onChange={formik.handleChange} className={`${classes.root} ${style.inputContact}`} label="ایمیل" variant="standard" />
              {formik.errors.email ? <div className={style.validateError}>{formik.errors.email}</div> : null}
               
               {/* input subject */}
                <TextField value={formik.values.subject} id="subject" name="subject" onChange={formik.handleChange} className={`${classes.root} ${style.inputContact}`} label="موضوع" variant="standard" />
                {formik.errors.subject ? <div className={style.validateError}>{formik.errors.subject}</div> : null}
              </div>
             
             
              <div className={style.divTextArea}>
                {/* input message */}
                <TextField id="message" name="message" variant="standard" value={formik.values.message}  onChange={formik.handleChange} 
                rows={3} className={classes.root} fullWidth label="پیام" multiline />

                {formik.errors.message ? <div className={style.validateError}>{formik.errors.message}</div> : null}</div>
            
              <button type="submit" className={style.submitBtn}>ارسال پیام</button>
            </form>

          </div>
          <div className={style.right}>
            <div className={style.divIconRight}><h2 >اطلاعات تماس</h2> <h2>نقشه موقعیت</h2></div>
            <div className={style.divIconRight}><img src="/call.svg" /><h4 >  <a href="tel:+989382960927">09382960927</a></h4>  </div>
            <div className={style.divIconRight}><img src='/location.svg' /><h4 >تهران شهر قدس خیابان سرقنات پاساژ<br /> میلاد واحد 84</h4></div>
            <div className={style.divIconRight}><img src='/mail.svg' /><h4 ><a href="mailto:pouriya.chibaie.dev@gmail.com">pouriya.chibaie.dev@gmail.com</a></h4></div>
            <div className={style.divIconRight}><img src='/web.svg' /><h4 ><a href="https:ekaseb.com">www.ekaseb.com</a></h4></div>
            <div className={style.socialMediaDiv}>
              <Image src='/whatsapp.svg' width={35} height={35} />
              <Image src='/instagram.svg' width={35} height={35} />
              <Image src='/linkdin.svg' width={35} height={35} />
              <TelegramIcon sx={{ color: "white", width: "40px", height: "40px" }} />
            </div>
          </div>

        </div>

      </div>
    </div>
  </>);
}

export default ContactUs;