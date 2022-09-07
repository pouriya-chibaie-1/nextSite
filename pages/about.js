import {useContext}from 'react'
import {Context} from '../context/context'
const About = () => {
    const contextGet=useContext(Context)
    console.log(contextGet);
    return (<>
    <h1>ABOUT JS</h1>
    </>  );
}
 
export default About;