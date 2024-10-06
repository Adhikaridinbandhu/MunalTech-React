import React from "react";
import step1Image from "../images/howSection/step-1.jpg";
import step2Image from "../images/howSection/step-2.jpg";
import step3Image from "../images/howSection/step-3.jpg";
import step4Image from "../images/howSection/step-4.jpg";

const HowItWorks = () => {
  return (
    <section className="container how-section-wrapper">
      <div className="how-section-header">
        <span className="sub-heading">How we service</span>
        <h2 className="secondary-heading">
          Your smart lifestyle is just 4 steps away
        </h2>
      </div>

      <div className="how-step-wrapper">
        <div className="how-step-heading-1">
          <h3 className="how-content-heading">
            <span className="step-number">1</span>Select convenient plan for you
          </h3>
          <p className="how-content-para">
            Explore and select among the plans which best fit for your place. We
            will make sure to provide you with the preferred plan you chose by
            reaching out as fast as possible.
          </p>
        </div>
        <img className="how-step-image-1" src={step1Image} alt="Step 1" />
      </div>

      <div className="how-step-wrapper how-step-wrapper-2-4">
        <div>
          <img className="how-step-image-2-4" src={step2Image} alt="Step 2" />
        </div>
        <div className="how-step-heading-2">
          <h3 className="how-content-heading">
            <span className="step-number">2</span>Review and examine your place
          </h3>
          <p className="how-content-para">
            Our expert team of architects will examine your preferred place by
            visiting and scanning every corner of each room and develop a
            sitemap.
          </p>
        </div>
      </div>

      <div className="how-step-wrapper how-step-wrapper-3">
        <div className="how-step-heading-3">
          <h3 className="how-content-heading">
            <span className="step-number">3</span>Design fitting install
            structure
          </h3>
          <p className="how-content-para">
            The sitemap developed by the architect will be reviewed to ensure
            the best and most appropriate installations for your place by expert
            professionals.
          </p>
        </div>
        <img className="how-step-image-3" src={step3Image} alt="Step 3" />
      </div>

      <div className="how-step-wrapper how-step-wrapper-2-4">
        <div>
          <img className="how-step-image-2-4" src={step4Image} alt="Step 4" />
        </div>
        <div className="how-step-heading-4">
          <h3 className="how-content-heading">
            <span className="step-number">4</span>Install preferred system
          </h3>
          <p className="how-content-para">
            Finally, we will deliver the best home or office experience by
            installing a smart system at your place. Now, you’ll never use
            things in the old boring ways again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
