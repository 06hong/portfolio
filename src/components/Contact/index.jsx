import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96873.54747552835!2d-74.01503747208248!3d40.64535309510842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1629675336372!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>347 227 9221</p>

      <h4>Email</h4>
      <p>honggaotech@gmail.com</p>

      <h4>Address</h4>
      <p>Brooklyn, NY</p>
    </div>
  );
};

export default About;