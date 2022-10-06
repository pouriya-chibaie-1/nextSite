import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState,useEffect } from "react";
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
const AuthRegister = () => {
    useEffect(()=>{
    })
    const style = useStyles()
    return (<>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ color: "#1976D2", fontFamily: "Vazir" }}>ثبت نام </h1>
            <TextField style={{ width: "70%" }} className={style.root} variant="standard" label="شماره تماس" />
            <Button style={{ fontFamily: "Vazir", margin: "30px 0px" }} variant="contained">ارسال</Button>
        </div>
    </>);
}
export default AuthRegister;
