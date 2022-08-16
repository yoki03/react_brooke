import React, {Component} from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import './styles.css';
import emailjs from 'emailjs-com';
import imgContact from "../assets/imgContact.jpg";

function Contact(){
    const initialValues = { from_name:"", from_email:"", message:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(isSubmit);

        if (isSubmit === true){
            emailjs.sendForm('service_lweahhb', 'template_vaxeoe8', e.target, '_xpqxkJmW0yWmOZ_i')
                .then((result) => {
                    console.log(result.text);
                    setIsSubmit(false);
                }, (error) => {
                    console.log(error.text);
                });
                form.current.reset();
            }
        };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && !isSubmit) {
            console.log(formValues);
            setIsSubmit(true);
        }
    },[formErrors])    

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.from_name) {
            errors.from_name = "sender name is required!";
        }
        if (!values.from_email) {
            errors.from_email = "email is required!";
        } else if ( !regex.test(values.from_email ) ){
            errors.from_email = "This is not a valid email";
        } 
        return errors;
    };

    return(
        <div>
            <div className="contact" id="contact">
                <div>
                    <p className="quote">Let's Talk</p><br></br>

                    <form ref={form} onSubmit={sendEmail}>
                    <label for="fname">Name</label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="from_name" 
                        placeholder="Your name.." 
                        value={ formValues.from_name } 
                        onChange={ handleChange }
                    />
                    <p className="err">{ formErrors.from_name }</p>

                    <label for="lname">Email</label>
                    <input 
                        type="text" 
                        id="lname" 
                        name="from_email" 
                        placeholder="Your email.." 
                        value={ formValues.from_email } 
                        onChange={ handleChange }
                    />
                    <p className="err">{ formErrors.from_email }</p>

                    <label for="lname">Message</label><br></br>
                    <textarea 
                        id="subject" 
                        name="message" 
                        placeholder="  Write something.."
                        value={ formValues.message } 
                        onChange={ handleChange }>
                    </textarea>
                    <button type="submit" Value="Send"><b>Submit</b></button>
                    </form>
                </div>
                <div class='imgs'>
                    <img src={imgContact} width="600" height="700" alt="Mask-Group" />
                </div>
            </div>
        </div>
    )
}

export default Contact;