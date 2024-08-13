// FeedbackForm.js
import React from 'react';
import './feedbackform.css'; // Import the CSS file

const FeedbackForm = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src="https://tse4.mm.bing.net/th?id=OIP.FYFGjd_rt8l3rgwrjJkCxQHaE4&pid=Api&P=0&h=180" alt="Toystore" />
      </div>
      <div className="form-section">
        <h2 className="font-semibold text-1xl sm:text-0xl md:text-2xl lg:text-2xl">Feedback Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" required></textarea>

          <button type="submit" className="bg-purple-900 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
