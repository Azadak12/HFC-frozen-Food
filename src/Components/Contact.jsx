
import "../Styles/Contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
        <p>We woud love to hear from you! Reach out via WhatsApp, email, or fill out the form below.</p>
      </header>

      <div className="contact-methods">
        <div className="method">
          <h2>Call Us</h2>
          <p>For immediate assistance, call us at:</p>
          <p><strong>+123 456 7890</strong></p>
        </div>
        <div className="method">
          <h2>Email Us</h2>
          <p>Have questions or feedback? Email us at:</p>
          <p><strong><a href="mailto:support@myhfc.com">support@myhfc.com</a></strong></p>
        </div>
        <div className="method">
          <h2>WhatsApp</h2>
          <p>Chat with us on WhatsApp:</p>
          <p><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><strong>Chat Now</strong></a></p>
        </div>
      </div>

      <h2>Contact Form</h2>
      <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <footer>
        <p>&copy; 2024 myHFC Fronxen Food. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
