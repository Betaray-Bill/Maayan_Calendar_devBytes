import React from 'react'
import "../Style/Contact.css"
import { FaFacebookF , FaTwitter, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";


function Contact() {
  return (
    <section className = "contact-section">
    <div className="go_back_cnt">
          <Link to="/">
                    <HiOutlineArrowNarrowLeft className="icon go_back_icon"/>
                </Link>
        </div>  
      <div className = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>Contact us</h2>
        <div className = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className = "text">Send your queries and feedback to code club core members. We will get in touch with you as soon as possible. We will be happy to hear to hear your feedback.</p>
      </div>


      <div className = "contact-body">
        <div className = "contact-info">
          <div>
            <span><i className = "fas fa-mobile-alt"></i></span>
            <span>Club Coordinator</span>
            <span>Phone Number</span>
            <span className = "text">98765-XXXXX</span>
          </div>
          <div>
            <span><i className = "fas fa-envelope-open"></i></span>
            <span>Club Coordinator</span>
            <span>E-mail</span>
            <span className = "text">mail@company.com</span>
          </div>
          <div>
            <span><i className = "fas fa-mobile-alt"></i></span>
            <span>Club Chairperson</span>
            <span>Phone No.</span>
            <span className = "text">98765-XXXXX</span>
          </div>
          <div>
            <span><i className = "fas fa-envelope-open"></i></span>
            <span>Club Chairperson</span>
            <span>E-mail</span>
            <span className = "text">mail@company.com</span>
          </div>
        </div>

        <div className= "contact-form">
          <form>
            <div>
              <input type = "text" className = "form-control" placeholder="First Name" />
              <input type = "text" className = "form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type = "email" className = "form-control" placeholder="E-mail" />
              <input type = "text" className = "form-control" placeholder="Phone"/>
            </div>
            <textarea rows = "5" placeholder="Queries and Feedback" className = "form-control"/>
            <input type = "submit" className = "send-btn" value = "send message" />
          </form>

          <div className="image">
            <img src ="" alt = "" />
          </div>
        </div>
      </div>

      <div className = "contact-footer">
        <h3>Follow Us</h3>
        <div className = "social-links">
          {/* <a href = "#" className = "fab fa-facebook-f"></a>
          <a href = "#" className = "fab fa-twitter"></a>
          <a href = "#" className = "fab fa-instagram"></a>
          <a href = "#" className = "fab fa-linkedin"></a>
          <a href = "#" className = "fab fa-youtube"></a> */}
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
    </section>
  )
}

export default Contact
