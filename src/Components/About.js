import React from 'react'
import "../Style/About.css"
import { FaFacebookF , FaTwitter, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function About() {
    return (
        <div className="about_section">

        <div className="container_abt">
        <div className="go_back_abt">
          <Link to="/">
                    <HiOutlineArrowNarrowLeft className="icon go_back_icon"/>
                </Link>
        </div>  
        <div className="banner">
        <section className="home">
          <h1>Sairam Code Club</h1>
          <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
        </section>
        </div>
        <section className="about">
            <main>
            <div className="contentBx">
                <h2 className="heading">Club vision</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptates consequatur quod similique impedit mollitia eos dolore beatae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sit aliquid nobis facere molestiae voluptatem earum eligendi quaerat.</p>
            </div>
            <div className="content2">
                <h2 className="heading">Club Mission</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptates consequatur quod similique impedit mollitia eos dolore beatae!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sit aliquid nobis facere molestiae voluptatem earum eligendi quaerat.</p>
            </div>
            </main>
        </section>
        <section className="About">
            <h1>About the event calender</h1>
            <p className="lead2">The event calender includes a login for students and the club core members separtely.The core members can add the events information along with the poster and the form for registeration of the event and also the meet link. The calender displays the events in monthwise and it is made user friendly to make sure students can register for the event at ease. Only the admins are given access to add the events in the calender and students will have only view mode and event registration mode. </p>
        </section>
        <section className="service">
            <h1>Club's recent achievements</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
        </section>
        <div className = "contact-footer">
        <h3>Follow Us</h3>
        <div className = "social-links">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
        
        
      </div>
        </div>
    )
}

export default About
