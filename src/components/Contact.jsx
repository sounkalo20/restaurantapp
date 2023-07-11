import React from "react";

export default function Contact() {
  return (
    <section class="contact-page-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-map-marked"></i>
                </div>
                <div class="contact-info-text">
                  <h2>address</h2>
                  <span>1215 Lorem Ipsum, Ch 176080 </span>
                  <span>Chandigarh , INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info-text">
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-info-text">
                  <h2>office time</h2>
                  <span>Mon - Thu 9:00 am - 4.00 pm</span>
                  <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="contact-page-form" method="post">
              <h2>Get in Touch</h2>
              <form action="contact-mail.php" method="post">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div class="col-md-12 message-input">
                    <div class="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="single-input-fieldsbtn">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

