// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import dogHero from "../../assets/dog.jpg";
// import scoobyzLogo from "../../assets/logo2.png";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollIntro = () => {
//   const sectionRef = useRef(null);

//   const dogRef = useRef(null);
//   const overlayRef = useRef(null);
//   const introRef = useRef(null);

//   const logoRef = useRef(null);
//   const logoGlowRef = useRef(null);

//   const previewRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=3200",
//           scrub: 1.2,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Initial state
//       gsap.set(dogRef.current, {
//         scale: 1,
//       });

//       gsap.set(overlayRef.current, {
//         opacity: 0,
//       });

//       gsap.set(introRef.current, {
//         opacity: 1,
//       });

//       gsap.set(logoRef.current, {
//         opacity: 0,
//         scale: 0.25,
//       });

//       gsap.set(logoGlowRef.current, {
//         opacity: 0,
//         scale: 0.5,
//       });

//       gsap.set(previewRef.current, {
//         yPercent: 110,
//       });

//       // --------------------------------
//       // DOG ZOOM
//       // --------------------------------

//       timeline.to(
//         dogRef.current,
//         {
//           scale: 3,
//           duration: 2,
//           ease: "none",
//         },
//         0,
//       );

//       // Dark overlay

//       timeline.to(
//         overlayRef.current,
//         {
//           opacity: 0.35,
//           duration: 1,
//         },
//         0.5,
//       );

//       // --------------------------------
//       // TEXT DISAPPEARS
//       // --------------------------------

//       timeline.to(
//         introRef.current,
//         {
//           opacity: 0,
//           y: -80,
//           duration: 0.7,
//         },
//         1.2,
//       );

//       // --------------------------------
//       // DOG DISAPPEARS
//       // --------------------------------

//       timeline.to(
//         dogRef.current,
//         {
//           scale: 5,
//           opacity: 0,
//           duration: 1.2,
//           ease: "power2.in",
//         },
//         1.7,
//       );

//       // --------------------------------
//       // LOGO APPEARS
//       // --------------------------------

//       timeline.to(
//         logoRef.current,
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           ease: "power3.out",
//         },
//         2.1,
//       );

//       // Logo glow

//       timeline.to(
//         logoGlowRef.current,
//         {
//           opacity: 0.7,
//           scale: 1,
//           duration: 1,
//         },
//         2.2,
//       );

//       // --------------------------------
//       // LOGO ZOOM
//       // --------------------------------

//       timeline.to(
//         logoRef.current,
//         {
//           scale: 5,
//           opacity: 0,
//           duration: 1.4,
//           ease: "power2.inOut",
//         },
//         3.2,
//       );

//       timeline.to(
//         logoGlowRef.current,
//         {
//           scale: 5,
//           opacity: 0,
//           duration: 1.3,
//         },
//         3.2,
//       );

//       // --------------------------------
//       // APP SECTION COMES FROM BOTTOM
//       // --------------------------------

//       timeline.to(
//         previewRef.current,
//         {
//           yPercent: 0,
//           duration: 1.4,
//           ease: "power3.out",
//         },
//         3.8,
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <section ref={sectionRef} className="apps-scroll-section">
//         {/* DOG */}

//         <div className="apps-image-wrapper">
//           <img
//             ref={dogRef}
//             src={dogHero}
//             alt="Happy dog"
//             className="apps-dog-image"
//           />

//           <div ref={overlayRef} className="apps-image-overlay" />
//         </div>

//         {/* INTRO */}

//         {/* <div ref={introRef} className="apps-intro">
//           <span>THE SCOOBYZ APP</span>

//           <h1>
//             Better care.
//             <br />
//             Happier pets.
//           </h1>

//           <p>Scroll to discover</p>
//         </div> */}
//         <div ref={introRef} className="apps-intro">
//           <span className="eyebrow">SCOOBYZ APPS</span>

//           <h1>
//             Everything your dog
//             <br />
//             needs, <em>at home.</em>
//           </h1>

//           <p>
//             Whether you're looking for trusted care for your pet or running a
//             pet-care business, there's a Scoobyz app made for you.
//           </p>
//         </div>

//         {/* LOGO */}

//         <div ref={logoGlowRef} className="apps-logo-glow" />

//         <img
//           ref={logoRef}
//           src={scoobyzLogo}
//           alt="Scoobyz"
//           className="apps-logo"
//         />

//         {/* BOTTOM APP PREVIEW */}

//         <div ref={previewRef} className="apps-preview">
//           <div>
//             <span>OUR APPS</span>

//             <h2>
//               Pet care,
//               <br />
//               now in your pocket.
//             </h2>

//             <p>
//               One app for pet parents.
//               <br />
//               One app for pet-care professionals.
//             </p>
//           </div>

//           <div className="apps-preview-arrow">↓</div>
//         </div>
//       </section>

//       {/* =================================
//           CSS FOR THIS COMPONENT
//       ================================= */}

//       <style>{`

//         .apps-scroll-section {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           min-height: 700px;
//           overflow: hidden;
//         //   background: #f5ede2;
//         background:#FEFEFE;
//         }

//         /* DOG IMAGE */

//         .apps-image-wrapper {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//         }

//         .apps-dog-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           will-change: transform, opacity;
//         }

//         .apps-image-overlay {
//           position: absolute;
//           inset: 0;
//         //   background: #1f2a33;
//         background: #FEFEFE;
//           opacity: 0;
//           will-change: opacity;
//           pointer-events: none;
//         }

//         /* INTRO */

//         .apps-intro {
//           position: absolute;
//           z-index: 10;

//         //   left: 7%;
//           bottom: 12%;

//           color: white;

//           will-change: opacity, transform;
//         }

//         .apps-intro span {
//           display: block;

//           margin-bottom: 20px;

//           font-family: Arial, sans-serif;
//           font-size: 10px;
//           font-weight: 700;

//           letter-spacing: 0.25em;
//         }

//         .apps-intro h1 {
//           margin: 0;

//           font-family: Georgia, serif;
//           font-size: clamp(55px, 7vw, 105px);

//           font-weight: 400;
//           line-height: 0.88;

//           letter-spacing: -0.05em;
//         }

//         .apps-intro p {
//           margin-top: 35px;

//           font-family: Arial, sans-serif;
//           font-size: 10px;

//           text-transform: uppercase;
//           letter-spacing: 0.18em;
//         }

//         /* LOGO */

//         .apps-logo {
//           position: absolute;

//           z-index: 30;

//           top: 50%;
//           left: 50%;

//         //   width: 180px;

//           transform: translate(-50%, -50%);

//         //   object-fit: contain;
//         object-fit:cover;

//           will-change: transform, opacity;
//         }

//         .apps-logo-glow {
//           position: absolute;

//           z-index: 20;

//           top: 50%;
//           left: 50%;

//           width: 320px;
//           height: 320px;

//           transform: translate(-50%, -50%);

//           border-radius: 50%;

//           background: rgba(245, 237, 226, 0.3);

//           filter: blur(80px);

//           pointer-events: none;
//         }

//         /* PREVIEW */

//         .apps-preview {
//           position: absolute;

//           z-index: 50;

//           left: 0;
//           bottom: 0;

//           width: 100%;
//           min-height: 45%;

//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           padding: 60px 8%;

//           box-sizing: border-box;

//           background: #f5ede2;

//           border-top: 1px solid rgba(31,42,51,0.15);
//         }

//         .apps-preview span {
//           font-family: Arial, sans-serif;

//           font-size: 10px;
//           font-weight: 700;

//           letter-spacing: 0.22em;

//           color: #446040;
//         }

//         .apps-preview h2 {
//           margin: 15px 0 0;

//           font-family: Georgia, serif;

//           font-size: clamp(45px, 6vw, 80px);

//           font-weight: 400;

//           line-height: 0.9;

//           letter-spacing: -0.04em;
//         }

//         .apps-preview p {
//           margin-top: 25px;

//           font-family: Arial, sans-serif;

//           font-size: 14px;

//           line-height: 1.8;

//           color: #5f625f;
//         }

//         .apps-preview-arrow {
//           width: 55px;
//           height: 55px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border: 1px solid rgba(31,42,51,0.25);

//           font-size: 22px;

//           color: #446040;
//         }

//         /* MOBILE */

//         @media (max-width: 768px) {

//           .apps-scroll-section {
//             min-height: 600px;
//           }

//           .apps-intro {
//             left: 6%;
//             bottom: 10%;
//           }

//           .apps-intro h1 {
//             font-size: 54px;
//           }

//           .apps-logo {
//             width: 140px;
//           }

//           .apps-preview {
//             min-height: 42%;

//             padding: 35px 6%;
//           }

//           .apps-preview h2 {
//             font-size: 45px;
//           }

//           .apps-preview-arrow {
//             display: none;
//           }
//         }

//       `}</style>
//     </>
//   );
// };

// export default ScrollIntro;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dog1 from "../../assets/dog.jpg";
import dog2 from "../../assets/dog2.jpg";
import dog3 from "../../assets/dog3.jpg";
import scoobyzLogo from "../../assets/logo2.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollIntro = () => {
  const sectionRef = useRef(null);

  const dog1Ref = useRef(null);
  const dog2Ref = useRef(null);
  const dog3Ref = useRef(null);

  const overlayRef = useRef(null);
  const introRef = useRef(null);

  const logoRef = useRef(null);
  const logoGlowRef = useRef(null);

  const previewRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ========================================
      // INITIAL STATES
      // ========================================

      gsap.set(dog1Ref.current, {
        opacity: 1,
        scale: 1,
      });

      gsap.set(dog2Ref.current, {
        opacity: 0,
        scale: 1.1,
      });

      gsap.set(dog3Ref.current, {
        opacity: 0,
        scale: 1.1,
      });

      gsap.set(overlayRef.current, {
        opacity: 0,
      });

      gsap.set(introRef.current, {
        opacity: 1,
        y: 0,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.25,
      });

      gsap.set(logoGlowRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(previewRef.current, {
        yPercent: 110,
      });

      // ========================================
      // MASTER TIMELINE
      // ========================================

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          // More scroll space because
          // we now have 3 dogs + logo + preview
          end: "+=5000",

          scrub: 1.2,

          pin: true,

          anticipatePin: 1,
        },
      });

      // ========================================
      // DOG 1
      // ========================================

      timeline.to(
        dog1Ref.current,
        {
          scale: 1.8,
          duration: 2,
          ease: "none",
        },
        0,
      );

      // Dark overlay slowly appears
      timeline.to(
        overlayRef.current,
        {
          opacity: 0.25,
          duration: 1,
        },
        0.5,
      );

      // ========================================
      // INTRO TEXT DISAPPEARS
      // ========================================

      timeline.to(
        introRef.current,
        {
          opacity: 0,
          y: -80,
          duration: 0.7,
          ease: "power2.out",
        },
        1.2,
      );

      // ========================================
      // DOG 1 DISAPPEARS
      // ========================================

      timeline.to(
        dog1Ref.current,
        {
          opacity: 0,
          scale: 2.2,
          duration: 0.6,
          ease: "power2.in",
        },
        1.8,
      );

      // ========================================
      // DOG 2 APPEARS
      // ========================================

      timeline.fromTo(
        dog2Ref.current,
        {
          opacity: 0,
          scale: 1.15,
        },
        {
          opacity: 1,
          scale: 1.8,
          duration: 2,
          ease: "none",
        },
        2,
      );

      // ========================================
      // DOG 2 DISAPPEARS
      // ========================================

      timeline.to(
        dog2Ref.current,
        {
          opacity: 0,
          scale: 2.2,
          duration: 0.6,
          ease: "power2.in",
        },
        3.8,
      );

      // ========================================
      // DOG 3 APPEARS
      // ========================================

      timeline.fromTo(
        dog3Ref.current,
        {
          opacity: 0,
          scale: 1.15,
        },
        {
          opacity: 1,
          scale: 1.8,
          duration: 2,
          ease: "none",
        },
        4,
      );

      // ========================================
      // DOG 3 DISAPPEARS
      // ========================================

      timeline.to(
        dog3Ref.current,
        {
          opacity: 0,
          scale: 2.2,
          duration: 0.6,
          ease: "power2.in",
        },
        5.8,
      );

      // ========================================
      // LOGO APPEARS
      // ========================================

      timeline.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        6,
      );

      // ========================================
      // LOGO GLOW
      // ========================================

      timeline.to(
        logoGlowRef.current,
        {
          opacity: 0.7,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        6.1,
      );

      // ========================================
      // LOGO STAYS
      // ========================================
      //
      // IMPORTANT:
      // We intentionally DON'T zoom the logo out.
      //
      // The logo remains visible while the user
      // continues scrolling.
      //
      // ========================================

      // Small pause before app preview
      timeline.to(
        {},
        {
          duration: 1,
        },
        7,
      );

      // ========================================
      // APP PREVIEW COMES FROM BOTTOM
      // ========================================

      timeline.to(
        previewRef.current,
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        7.8,
      );

      // ========================================
      // LOGO MOVES SLIGHTLY UP
      // ========================================
      //
      // Optional:
      // As the app preview comes up, move the logo
      // slightly upward so the transition feels natural.
      //
      // ========================================

      timeline.to(
        logoRef.current,
        {
          y: -80,
          scale: 0.75,
          duration: 1.2,
          ease: "power3.inOut",
        },
        8,
      );

      timeline.to(
        logoGlowRef.current,
        {
          y: -80,
          scale: 0.75,
          opacity: 0.3,
          duration: 1.2,
          ease: "power3.inOut",
        },
        8,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ========================================
          MAIN SCROLL SECTION
      ======================================== */}

      <section ref={sectionRef} className="apps-scroll-section">
        {/* ========================================
            DOG IMAGES
        ======================================== */}

        <div className="apps-image-wrapper">
          {/* DOG 1 */}
          <img
            ref={dog1Ref}
            src={dog1}
            alt="Happy dog"
            className="apps-dog-image"
          />

          {/* DOG 2 */}
          <img
            ref={dog2Ref}
            src={dog2}
            alt="Happy dog"
            className="apps-dog-image"
          />

          {/* DOG 3 */}
          <img
            ref={dog3Ref}
            src={dog3}
            alt="Happy dog"
            className="apps-dog-image"
          />

          {/* OVERLAY */}
          <div ref={overlayRef} className="apps-image-overlay" />
        </div>

        {/* ========================================
            INTRO
        ======================================== */}

        <div ref={introRef} className="apps-intro">
          <span className="eyebrow">SCOOBYZ APPS</span>

          <h1>
            Everything your dog
            <br />
            needs, <em>at home.</em>
          </h1>

          <p>
            Whether you're looking for trusted care for your pet or running a
            pet-care business, there's a Scoobyz app made for you.
          </p>
        </div>

        {/* ========================================
            LOGO GLOW
        ======================================== */}

        <div ref={logoGlowRef} className="apps-logo-glow" />

        {/* ========================================
            LOGO
        ======================================== */}

        <img
          ref={logoRef}
          src={scoobyzLogo}
          alt="Scoobyz"
          className="apps-logo"
        />

        {/* ========================================
            APP PREVIEW
        ======================================== */}

        <div ref={previewRef} className="apps-preview">
          <div>
            <span>OUR APPS</span>

            <h2>
              Pet care,
              <br />
              now in your pocket.
            </h2>

            <p>
              One app for pet parents.
              <br />
              One app for pet-care professionals.
            </p>
          </div>

          <div className="apps-preview-arrow">↓</div>
        </div>
      </section>

      {/* ========================================
          CSS
      ======================================== */}

      <style>{`
        /* ========================================
           MAIN SECTION
        ======================================== */

        .apps-scroll-section {
          position: relative;

          width: 100%;
          height: 100vh;

          min-height: 700px;

          overflow: hidden;

        //   background: #fefefe;
        background:#F7EEE4;
        }


        /* ========================================
           DOG IMAGE WRAPPER
        ======================================== */

        .apps-image-wrapper {
          position: absolute;

          inset: 0;

          overflow: hidden;
        }


        /* ========================================
           DOG IMAGES
        ======================================== */

        .apps-dog-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          will-change: transform, opacity;
        }


        /* ========================================
           IMAGE OVERLAY
        ======================================== */

        .apps-image-overlay {
          position: absolute;

          inset: 0;

          background: #fefefe;

          opacity: 0;

          will-change: opacity;

          pointer-events: none;
        }


        /* ========================================
           INTRO
        ======================================== */

        .apps-intro {
          position: absolute;

          z-index: 10;

        //   left: 7%;

          bottom: 12%;

        //   max-width: 800px;

           color: white;
        

          will-change: opacity, transform;
        }


        .apps-intro span {
          display: block;

          margin-bottom: 20px;

          font-family: Arial, sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.25em;
        }


        .apps-intro h1 {
          margin: 0;

          font-family: Georgia, serif;

          font-size: clamp(55px, 7vw, 105px);

          font-weight: 400;

          line-height: 0.88;

          letter-spacing: -0.05em;
        }


        .apps-intro h1 em {
          font-style: italic;
        }


        .apps-intro p {
          max-width: 500px;

          margin-top: 35px;

          font-family: Arial, sans-serif;

          font-size: 13px;

          line-height: 1.6;

          letter-spacing: 0.03em;
        }


        /* ========================================
           LOGO
        ======================================== */

        .apps-logo {
          position: absolute;

          z-index: 30;

          top: 50%;
          left: 50%;

        //   width: 180px;

          transform: translate(-50%, -50%);

        //   object-fit: contain;

          will-change: transform, opacity;
        }


        /* ========================================
           LOGO GLOW
        ======================================== */

        .apps-logo-glow {
          position: absolute;

          z-index: 20;

          top: 50%;
          left: 50%;

          width: 320px;
          height: 320px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

           background: rgba(245, 237, 226, 0.3);
       

          filter: blur(80px);

          pointer-events: none;

          will-change: transform, opacity;
        }


        /* ========================================
           APP PREVIEW
        ======================================== */

        .apps-preview {
          position: absolute;

          z-index: 50;

          left: 0;

          bottom: 0;

          width: 100%;

          min-height: 45%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 60px 8%;

          box-sizing: border-box;

           background: #f5ede2;

          border-top: 1px solid rgba(31, 42, 51, 0.15);

          will-change: transform;
        }


        .apps-preview span {
          font-family: Arial, sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.22em;

          color: #446040;
        }


        .apps-preview h2 {
          margin: 15px 0 0;

          font-family: Georgia, serif;

          font-size: clamp(45px, 6vw, 80px);

          font-weight: 400;

          line-height: 0.9;

          letter-spacing: -0.04em;
        }


        .apps-preview p {
          margin-top: 25px;

          font-family: Arial, sans-serif;

          font-size: 14px;

          line-height: 1.8;

          color: #5f625f;
        }


        /* ========================================
           ARROW
        ======================================== */

        .apps-preview-arrow {
          width: 55px;
          height: 55px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid rgba(31, 42, 51, 0.25);

          font-size: 22px;

          color: #446040;
        }


        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 768px) {

          .apps-scroll-section {
            min-height: 600px;
          }


          .apps-intro {
            left: 6%;

            right: 6%;

            bottom: 10%;
          }


          .apps-intro h1 {
            font-size: 54px;
          }


          .apps-intro p {
            font-size: 11px;

            max-width: 90%;
          }


          .apps-logo {
            width: 140px;
          }


          .apps-logo-glow {
            width: 240px;

            height: 240px;
          }


          .apps-preview {
            min-height: 42%;

            padding: 35px 6%;
          }


          .apps-preview h2 {
            font-size: 45px;
          }


          .apps-preview p {
            font-size: 12px;
          }


          .apps-preview-arrow {
            display: none;
          }
        }

      `}</style>
    </>
  );
};

export default ScrollIntro;
