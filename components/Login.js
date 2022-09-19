import { Formik } from 'formik';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LoginBox,checkDivStyle,buttonFormStyle,divContainer,divContainerFlex,inputStyle,pushToLogOrReg,titleForm} from "./LoginStyle"
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
// const useStyles = makeStyles({
//   root: {
//     "& .MuiInputBase-input": { fontFamily: "Vazir ", color: "black", fontSize: "13px", position: "relative" },
//     "& .MuiFormLabel-root": { fontFamily: "Vazir ", fontSize: "13px", width: "100%", },
//     "& label.Mui-focused": { fontFamily: "Vazir ", textAlign: "right", width: "100%" },
//     "& label": {
//       transformOrigin: "top right",
//       right: 0,
//     }
//   }
// });
const  AuthLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => {
 setShowPassword(!showPassword)
  };
    // const muiStyles=useStyles()
  return ( <>
       
        <div
          style={LoginBox}
          className="w-80 h-108 mobile:w-full mobile:h-full"
        >
          <h1 style={titleForm}>ورود</h1>
          <Formik 
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         }
         if (!values.password) {
           errors.password = 'Required';
         }
          else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => { }   }
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} style={{width:"100%" ,display:"flex",alignItems:"center",flexDirection:"column",fontFamily:"Vazir"}}>
         
         {/* className={muiStyles.root} */}
           <TextField   variant='standard' label="ایمیل" sx={{width:"70%",margin:"30px 0px",fontFamily:"Vazir"}}/>
           {<span style={{color:"red"}}>{errors.email && touched.email && errors.email}</span>}
         
         <FormControl sx={{width:"70%",margin:"30px 0px"}}>

         <InputLabel  htmlFor="standard-adornment-password">Password</InputLabel>
          <Input 
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
         </FormControl>

           {<span style={{color:"red",marginRight:"220px"}}>{errors.password && touched.password && errors.password}</span>}
           <button type="submit"  style={buttonFormStyle} disabled={isSubmitting}>
            ارسال
           </button>
         </form>
       )}
     </Formik>
          
         
          
          
          <h4 onClick={"pushToRegister"} style={pushToLogOrReg}>
            Not a member? Sign up now
          </h4>

          {/* <button style={buttonFormStyle} onClick={pushToRegister}>REGISTER</button> */}
        </div>
     
    </> );
}
 
export default AuthLogin;