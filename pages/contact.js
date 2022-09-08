import style from '../styles/contact.module.scss'
import TextField from '@mui/material/TextField';
const ContactUs = () => {
    return (<>
<div className={style.container}>
<div className={style.header}></div>
<div className={style.content}>
<div className={style.divInContent}>
<div className={style.left}>
<h1>یک پیام بگذارید
</h1>
<div>   
<TextField   className={style.textField} inputProps={{style:{textAlign:"center"}}}label="نام و نام خانوادگی" variant="standard" />
    <TextField className={style.textField} inputProps={{style:{textAlign:"center"}}} label="شماره تماس" variant="standard" />
</div>
<div>
    <TextField className={style.textField} inputProps={{style:{textAlign:"center"}}} label="ایمیل" variant="standard" />
    <TextField className={style.textField} inputProps={{style:{textAlign:"center"}}} label="موضوع" variant="standard" /> 
</div>
<div>
<TextField
          id="outlined-multiline-flexible"
          label="پیام"
          multiline
          variant="standard"
          rows={2}
fullWidth        />
</div>
<button className={style.submitBtn}>ارسال پیام</button>
</div>
<div className={style.right}></div>
</div>

</div>
</div>
    </>  );
}
 
export default ContactUs;