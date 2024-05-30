import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <hr className='line'></hr>
            <p>If you like to get in contact, you can reach out to me using the following methods</p>
            <section className='contact-menu'>
                <div className='email'>
                    <h3>Email</h3>
                    <a href='mailto:ezadhaziq99@gmail.com'>ezadhaziq99@gmail.com</a>
                </div>
                <div className='github'>
                    <h3>Github</h3>
                    <a href='https://github.com/ezad99'>ezad99</a>
                </div>
                <div className='linkedin'>
                    <h3>LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/ezadzamily/'>Ezad Zamily</a>
                </div>
            </section>
        </div>
    )
}

export default Contact;