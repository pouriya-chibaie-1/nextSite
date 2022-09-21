import { Formik } from 'formik';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoginBox, checkDivStyle, buttonFormStyle, divContainer, divContainerFlex, inputStyle, pushToLogOrReg, titleForm } from "./LoginStyle"
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": { fontFamily: "Vazir ", color: "black", fontSize: "13px", position: "relative" },
    "& .MuiFormLabel-root": { fontFamily: "Vazir ", fontSize: "13px", width: "100%", },
    "& label.Mui-focused": { fontFamily: "Vazir ", textAlign: "right", width: "100%" },
    "& .MuiInputLabel-root": { fontFamily: "Vazir ", textAlign: "right", width: "100%" },
    "& .MuiFormControl-root": { fontFamily: "Vazir ", textAlign: "right", width: "100%" },
    "& label": {
      transformOrigin: "top right",
      right: 0,
    }
  }
});
const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };
  const regExp = /^09[0|1|2|3|9][0-9]{8}$/;

  const muiStyles = useStyles()
  return (<>

    <div
      style={LoginBox}    >
      <h1 style={titleForm}>ورود</h1>
      <Formik
        initialValues={{ phoneNumber: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.phoneNumber) {
            errors.phoneNumber = 'اجباری';
          }
          else if (!values.phoneNumber.match(regExp)) {
            errors.phoneNumber = 'شماره تماس نامعتبر است';
          }
          if (!values.password) {
            errors.password = 'اجباری';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => { }}
      >
        {({ 
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", fontFamily: "Vazir" }}>

            <TextField className={`${muiStyles.root}`} variant='standard'
              label="شماره موبایل" sx={{ width: "70%", margin: "30px 0px", fontFamily: "Vazir", textAlign: "right" }}
              value={values.phoneNumber}
              onChange={handleChange('phoneNumber')}
            />
            {<span style={{ color: "red" }}>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</span>}

            <FormControl sx={{ width: "70%", margin: "30px 0px", direction: "rtl" }}>

              <InputLabel sx={{ width: "100%", fontFamily: "Vazir", width: "100vw", textAlign: "right" }} className={`${muiStyles.root}`} htmlFor="standard-adornment-password">رمز عبور</InputLabel>
              <Input
                className={`${muiStyles.root}`}
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            {<span style={{ color: "red" }}>{errors.password && touched.password && errors.password}</span>}
            <button type="submit" style={buttonFormStyle} disabled={isSubmitting}>
              ارسال
            </button>
          </form>
        )}
      </Formik>
    </div>

  </>);
}

export default AuthLogin;