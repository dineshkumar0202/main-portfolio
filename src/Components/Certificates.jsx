import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const certificatePages = [
  {
    heading: 'CubeAi Solution Pvt Ltd',
    text: `Heardeing the certificate of 2020
and the completed the corees`,
    img: 'https://storage.googleapis.com/a1aa/image/fb432320-6ae2-4258-0089-8b4a7f288a3d.jpg',
  },
  {
    heading: 'CubeAi Solution Pvt Ltd',
    text: `Heardeing the certificate of 2021
and the completed the corees`,
    img: 'https://placehold.co/320x220/png?text=Certificate+2021',
  },
  {
    heading: 'Certificate 2022',
    text: `Heardeing the certificate of 2022
and the completed the corees`,
    img: 'https://placehold.co/320x220/png?text=Certificate+2022',
  },
];

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const total = certificatePages.length;

  const handleNext = () => {
    if (current < total - 1) setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const { heading, text, img } = certificatePages[current];

  return (
    <div className="cert-body">
      <h1 className="cert-title">Certificates</h1>

      <div className="cert-book">
        {/* Left Page */}
        <div className="cert-page left">
          <h2>{heading}</h2>
          <p>
            {text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="page-notch" />
        </div>

        {/* Spiral Binding */}
        <div className="spiral">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="spiral-hole" />
          ))}
        </div>

        {/* Right Page */}
        <div className="cert-page right">
          <img src={img} alt={heading} />
          <div className="page-notch" />
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-arrows">
        <button onClick={handlePrev} disabled={current === 0} className="arrow-button">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} disabled={current === total - 1} className="arrow-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Certificates;
