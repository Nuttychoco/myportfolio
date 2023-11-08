import React from 'react'
import './email.css'

const Email = () => {

    
    return (
        <section>
            <div>

                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" id="name" placeholder="Name:" required></input>
                    <input type="email" id="email" placeholder="Email id:" required></input>
                    <input type="text" id="phone" placeholder="Phone no.:" required></input>
                    <textarea id="message" rows="4" placeholder="How can we help you ?"></textarea>

                    <input id="submit" type="submit"></input>


                </form>




                </div>

        </section>


    )
}

export default Email