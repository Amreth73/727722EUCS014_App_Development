import React from "react";

const NewsletterForm = () => (
  <div className="newsletter-form">
    <h3>Newsletter</h3>
    <form>
      <input type="email" placeholder="Mail" />
      <button type="submit">Subscribe</button>
    </form>
    <p>
      Feel free to place your Mail_ID and Subscribe to our Newsletter here. So
      that, you can receive our exciting Updates and Offers with no wait!
    </p>
  </div>
);

export default NewsletterForm;
