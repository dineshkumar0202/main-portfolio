import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import C1 from '../assets/certificate-1.png';
import C2 from '../assets/certificate-2.png';

const certificatePages = [
  {
    heading: 'CubeAi Solution Pvt Ltd',
    text: `Heardeing the certificate of 2020
and the completed the corees`,
    img: { src: C1, alt: 'Certificate 2020' },
  },
  {
    heading: 'Pinacal',
    text: `Heardeing the certificate of 2021
and the completed the corees`,
    img: { src: C2, alt: 'Certificate 2021' },
  },
  {
    heading: 'Certificate 2022',
    text: `Heardeing the certificate of 2022
and the completed the corees`,
    img: {
      src: 'https://placehold.co/320x220/png?text=Certificate+2022',
      alt: 'Certificate 2022',
    },
  },
];

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('');
  const [nextPage, setNextPage] = useState(null);
  const total = certificatePages.length;

  const handleNext = () => {
    if (current < total - 1 && !animating) {
      setDirection('right');
      setNextPage(current + 1);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setAnimating(false);
        setNextPage(null);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (current > 0 && !animating) {
      setDirection('left');
      setNextPage(current - 1);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => prev - 1);
        setAnimating(false);
        setNextPage(null);
      }, 600);
    }
  };

  const { heading, text, img } = certificatePages[current];
  const next =
    nextPage !== null ? certificatePages[nextPage] : null;

  // Animation classes
  const leftPageClass =
    'cert-page left ' +
    (animating
      ? direction === 'right'
        ? 'turning-left'
        : 'turning-right'
      : '');

  const rightPageClass =
    'cert-page right ' +
    (animating
      ? direction === 'right'
        ? 'turning-left'
        : 'turning-right'
      : '');

  const nextLeftPageClass =
    'cert-page left ' +
    (animating
      ? direction === 'right'
        ? 'entering-right'
        : 'entering-left'
      : '');

  const nextRightPageClass =
    'cert-page right ' +
    (animating
      ? direction === 'right'
        ? 'entering-right'
        : 'entering-left'
      : '');

  return (
    <div className="cert-body">
      <h1 className="cert-title">Certificates</h1>
      <div className="cert-book">
        <div className="cert-pages-wrapper">
          {/* Current Pages */}
          {!animating && (
            <>
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
              <div className="spiral">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="spiral-hole" />
                ))}
              </div>
              <div className="cert-page right">
                <img src={img.src} alt={img.alt} />
                <div className="page-notch" />
              </div>
            </>
          )}

          {/* Animating Out Pages */}
          {animating && (
            <>
              <div className={leftPageClass}>
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
              <div className="spiral">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="spiral-hole" />
                ))}
              </div>
              <div className={rightPageClass}>
                <img src={img.src} alt={img.alt} />
                <div className="page-notch" />
              </div>
              {/* Next Pages (entering) */}
              {next && (
                <>
                  <div className={nextLeftPageClass} style={{ position: 'absolute', left: 0, top: 0 }}>
                    <h2>{next.heading}</h2>
                    <p>
                      {next.text.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <div className="page-notch" />
                  </div>
                  <div className={nextRightPageClass} style={{ position: 'absolute', right: 0, top: 0 }}>
                    <img src={next.img.src} alt={next.img.alt} />
                    <div className="page-notch" />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* Navigation */}
      <div className="nav-arrows">
        <button onClick={handlePrev} disabled={current === 0 || animating} className="arrow-button">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} disabled={current === total - 1 || animating} className="arrow-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Certificates;