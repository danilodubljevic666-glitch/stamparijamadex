import './Contact.css';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function Contact(){

return(
    <>
    <div className="contact-container">

            <h1 className='contact-title'>Štamparija Madex </h1>
<div className='contact-info'>
    <div className='contact-div'><CiPhone className='contact-icons'/> 069/048-009 &nbsp;/&nbsp; 068/048-655</div>
    <div  className='contact-div'><MdOutlineEmail className='contact-icons'/> mladendubljevic@yahoo.com</div>
    <div  className='contact-div'><FaFacebook className='contact-icons'/> Štamparija Madex</div>
    
</div>

<div className='author'>&copy;&nbsp;Štamparija Madex 2025 </div>
    </div>

    
    
    </>
)


}

export default Contact;