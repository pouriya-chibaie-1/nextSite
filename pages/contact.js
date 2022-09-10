import style from '../styles/contact.module.scss'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": { fontFamily: "Vazir", color: "black", fontSize: "13px",position:"relative" },
    "& .MuiFormLabel-root": { fontFamily: "Vazir", fontSize: "13px", width:"100%"},
    "& label.Mui-focused":{position: "absolute",right: "-25%",textAlign:"right",width:"100%"}
  }
});
const ContactUs = () => {
  const classes = useStyles();

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
              <TextField className={classes.root} style={{width:"45%"}} 
               label="نام و نام خانوادگی" variant="standard"/>
              <TextField className={classes.root} style={{width:"45%"}}label="شماره تماس"  variant="standard"/>
            </div>
            <div className={style.divContainInput}>
              <TextField className={classes.root}style={{width:"45%"}} label="ایمیل"ص variant="standard"/>
              <TextField className={classes.root} style={{width:"45%"}}label="موضوع" variant="standard"/>
            </div>
            <div className={style.divTextArea}><TextField variant="standard" rows={2} className={classes.root} fullWidth label="موضوع"multiline /></div>
            <button className={style.submitBtn}>ارسال پیام</button>
          </div>
          <div className={style.right}></div>
        </div>

      </div>
    </div>
  </>);
}

export default ContactUs;