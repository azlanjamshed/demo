// import { useLayoutEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import StoreButtons from "./StoreButtons";

// import customerApp from "../../assets/hero.png";
// import customerBooking from "../../assets/hero.png";

// import partnerApp from "../../assets/hero.png";
// import partnerBooking from "../../assets/hero.png";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);

//   const customerTextRef = useRef(null);
//   const customerPhonesRef = useRef(null);

//   const partnerTextRef = useRef(null);
//   const partnerPhonesRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(customerTextRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: customerTextRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(customerPhonesRef.current, {
//         y: 150,
//         opacity: 0,
//         rotate: -5,
//         duration: 1.2,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: customerPhonesRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(partnerTextRef.current, {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: partnerTextRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(partnerPhonesRef.current, {
//         y: 150,
//         opacity: 0,
//         rotate: 5,
//         duration: 1.2,
//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: partnerPhonesRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <section ref={sectionRef} className="apps-showcase">
//         {/* =============================
//             CUSTOMER
//         ============================= */}

//         <div className="apps-product customer-product">
//           <div ref={customerTextRef} className="apps-product-content">
//             <span className="apps-label">SCOOBYZ APP</span>

//             <h2>
//               For the ones
//               <br />
//               who call them
//               <br />
//               family.
//             </h2>

//             <p>
//               Find trusted pet-care professionals, book services, make secure
//               payments and stay connected — all in one app.
//             </p>

//             <StoreButtons
//               appStoreUrl="#"
//               playStoreUrl="https://play.google.com/store/apps/details?id=com.scobys.scoooobys"
//             />
//           </div>

//           <div ref={customerPhonesRef} className="apps-phone-wrapper">
//             <div className="apps-phone apps-phone-back">
//               <img src={customerBooking} alt="Customer booking" />
//             </div>

//             <div className="apps-phone apps-phone-main">
//               <img src={customerApp} alt="Scoobyz customer app" />
//             </div>
//           </div>
//         </div>

//         {/* =============================
//             PARTNER
//         ============================= */}

//         <div className="apps-product partner-product">
//           <div ref={partnerPhonesRef} className="apps-phone-wrapper">
//             <div className="apps-phone apps-phone-back partner-back">
//               <img src={partnerBooking} alt="Partner bookings" />
//             </div>

//             <div className="apps-phone apps-phone-main">
//               <img src={partnerApp} alt="Scoobyz Partner app" />
//             </div>
//           </div>

//           <div ref={partnerTextRef} className="apps-product-content">
//             <span className="apps-label">SCOOBYZ PARTNER</span>

//             <h2>
//               For the people
//               <br />
//               who care
//               <br />
//               for them.
//             </h2>

//             <p>
//               Manage bookings, services, customers and earnings with the Scoobyz
//               Partner app.
//             </p>

//             <StoreButtons
//               appStoreUrl="#"
//               playStoreUrl="https://play.google.com/store/apps/details?id=com.differ2099.scoob"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =================================
//           CSS FOR THIS COMPONENT
//       ================================= */}

//       <style>{`

//         .apps-showcase {
//           width: 100%;
//           overflow: hidden;
//           background: #f5ede2;
//         }

//         /* PRODUCT */

//         .apps-product {
//           min-height: 900px;

//           display: grid;

//           grid-template-columns:
//             0.8fr
//             1.2fr;

//           align-items: center;

//           gap: 50px;

//           padding: 120px 8%;

//           box-sizing: border-box;

//           border-bottom:
//             1px solid
//             rgba(31,42,51,0.13);
//         }

//         .partner-product {
//           grid-template-columns:
//             1.2fr
//             0.8fr;
//         }

//         /* CONTENT */

//         .apps-product-content {
//           max-width: 520px;
//         }

//         .apps-label {
//           display: block;

//           margin-bottom: 20px;

//           font-family: Arial, sans-serif;

//           font-size: 10px;

//           font-weight: 700;

//           letter-spacing: 0.22em;

//           color: #446040;
//         }

//         .apps-product-content h2 {
//           margin: 0;

//           font-family: Georgia, serif;

//           font-size:
//             clamp(
//               50px,
//               5.5vw,
//               82px
//             );

//           font-weight: 400;

//           line-height: 0.9;

//           letter-spacing: -0.045em;
//         }

//         .apps-product-content p {
//           max-width: 470px;

//           margin: 30px 0;

//           font-family: Arial, sans-serif;

//           font-size: 15px;

//           line-height: 1.9;

//           color: #5f625f;
//         }

//         /* PHONES */

//         .apps-phone-wrapper {
//           position: relative;

//           height: 620px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           perspective: 1200px;
//         }

//         .apps-phone {
//           position: absolute;

//           overflow: hidden;

//           background: #1f2a33;

//           border: 7px solid #1f2a33;

//           border-radius: 36px;

//           box-shadow:
//             0 30px 70px
//             rgba(31,42,51,0.18);

//           transition:
//             transform 0.5s ease;
//         }

//         .apps-phone img {
//           display: block;

//           width: 100%;
//           height: 100%;

//           object-fit: cover;

//           border-radius: 28px;
//         }

//         .apps-phone-main {
//           z-index: 3;

//           width: 280px;
//           height: 570px;

//           transform: rotate(0deg);
//         }

//         .apps-phone-back {
//           z-index: 2;

//           left: 15%;

//           width: 245px;
//           height: 500px;

//           transform:
//             translateY(30px)
//             rotate(-9deg);
//         }

//         .partner-back {
//           left: auto;
//           right: 15%;

//           transform:
//             translateY(30px)
//             rotate(9deg);
//         }

//         .apps-phone-wrapper:hover
//         .apps-phone-main {
//           transform:
//             translateY(-10px);
//         }

//         .apps-phone-wrapper:hover
//         .apps-phone-back {
//           transform:
//             translateY(20px)
//             rotate(-14deg)
//             translateX(-20px);
//         }

//         /* MOBILE */

//         @media (max-width: 900px) {

//           .apps-product,
//           .partner-product {
//             grid-template-columns: 1fr;

//             padding:
//               90px 6%;
//           }

//           .apps-product-content {
//             max-width: 600px;
//           }

//           .apps-phone-wrapper {
//             min-height: 600px;
//           }

//           .partner-product
//           .apps-phone-wrapper {
//             order: 2;
//           }

//           .partner-product
//           .apps-product-content {
//             order: 1;
//           }

//         }

//         @media (max-width: 600px) {

//           .apps-product,
//           .partner-product {
//             min-height: auto;

//             padding:
//               80px 6%;
//           }

//           .apps-product-content h2 {
//             font-size: 54px;
//           }

//           .apps-phone-wrapper {
//             height: 520px;
//           }

//           .apps-phone-main {
//             width: 220px;
//             height: 450px;

//             border-radius: 30px;
//           }

//           .apps-phone-back {
//             width: 190px;
//             height: 390px;

//             left: 3%;
//           }

//           .partner-back {
//             left: auto;
//             right: 3%;
//           }

//         }

//       `}</style>
//     </>
//   );
// };

// export default AppShowcase;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import customerApp from "../../assets/hero.png";
import partnerApp from "../../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------
      // INTRO ANIMATION
      // --------------------------------

      gsap.from(".apps-intro-content > *", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apps-intro",
          start: "top 80%",
        },
      });

      // --------------------------------
      // STRIPE ANIMATION
      // --------------------------------

      gsap.to(".app-stripe-inner", {
        x: -120,
        ease: "none",
        scrollTrigger: {
          trigger: ".app-stripe",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // --------------------------------
      // APP CONTENT
      // --------------------------------

      gsap.from(".customer-column .app-animate", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apps-products",
          start: "top 72%",
        },
      });

      gsap.from(".partner-column .app-animate", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apps-products",
          start: "top 72%",
        },
      });

      // --------------------------------
      // CUSTOMER PHONE
      // --------------------------------

      gsap.from(".app-phone-customer", {
        y: 100,
        rotate: -5,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".customer-phone-area",
          start: "top 78%",
        },
      });

      // --------------------------------
      // PARTNER PHONE
      // --------------------------------

      gsap.from(".app-phone-partner", {
        y: 100,
        rotate: 5,
        opacity: 0,
        duration: 1.3,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".partner-phone-area",
          start: "top 78%",
        },
      });

      // --------------------------------
      // CLOSING SECTION
      // --------------------------------

      gsap.from(".closing-box", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apps-closing",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="apps-page" ref={sectionRef}>
        {/* ==================================================
            INTRO
        ================================================== */}

        {/* <section className="apps-intro">
          <div className="apps-intro-content">
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
        </section> */}

        {/* ==================================================
            BLUE STRIPED BAR
        ================================================== */}

        <section className="app-stripe">
          <div className="app-stripe-inner">
            <span>FIND CARE</span>
            <span>BOOK SERVICES</span>
            <span>MANAGE BOOKINGS</span>
            <span>GROW YOUR BUSINESS</span>
            <span>STAY CONNECTED</span>

            <span>FIND CARE</span>
            <span>BOOK SERVICES</span>
            <span>MANAGE BOOKINGS</span>
            <span>GROW YOUR BUSINESS</span>
            <span>STAY CONNECTED</span>

            <span>FIND CARE</span>
            <span>BOOK SERVICES</span>
            <span>MANAGE BOOKINGS</span>
            <span>GROW YOUR BUSINESS</span>
            <span>STAY CONNECTED</span>
          </div>
        </section>

        {/* ==================================================
            BOTH APPS — ONE SECTION
        ================================================== */}

        <section className="apps-products">
          {/* ==================================================
              CUSTOMER / PET PARENT APP
          ================================================== */}

          <article className="app-column customer-column">
            {/* Header */}

            <div className="app-column-header app-animate">
              <span className="app-number">01</span>

              <span className="eyebrow">FOR PET PARENTS</span>

              <h2>
                Meet your
                <br />
                <em>pet's new</em>
                <br />
                favourite app.
              </h2>

              <p>
                Discover trusted pet-care professionals, explore services and
                book everything your dog needs — all in one place.
              </p>
            </div>

            {/* Phone */}

            <div className="app-phone-area customer-phone-area">
              <div className="phone-decoration app-animate">
                {/* <span>YOUR PET'S</span>

                <strong>HAPPY PLACE</strong> */}
              </div>

              <div className="phone app-phone-customer">
                <div className="phone-top"></div>

                <img src={customerApp} alt="Scoobyz customer app" />
              </div>
            </div>

            {/* Features */}

            <div className="app-features app-animate">
              <div>
                <span>01</span>
                Grooming
              </div>

              <div>
                <span>02</span>
                Walking
              </div>

              <div>
                <span>03</span>
                Boarding
              </div>

              <div>
                <span>04</span>
                Veterinary Care
              </div>
            </div>

            {/* Store Buttons */}

            <div className="download-area app-animate">
              <span className="download-label">DOWNLOAD THE APP</span>

              <div className="store-links">
                {/* App Store */}

                <a href="#" className="store-link">
                  <span className="store-icon">●</span>

                  <span>
                    <small>Download on the</small>
                    App Store
                  </span>
                </a>

                {/* Google Play */}

                <a
                  href="https://play.google.com/store/apps/details?id=com.scobys.scoooobys"
                  target="_blank"
                  rel="noreferrer"
                  className="store-link"
                >
                  <span className="store-icon">▶</span>

                  <span>
                    <small>GET IT ON</small>
                    Google Play
                  </span>
                </a>
              </div>
            </div>
          </article>

          {/* ==================================================
              PARTNER / VENDOR APP
          ================================================== */}

          <article className="app-column partner-column">
            {/* Header */}

            <div className="app-column-header app-animate">
              <span className="app-number">02</span>

              <span className="eyebrow">FOR PET-CARE PROFESSIONALS</span>

              <h2>
                Your business,
                <br />
                <em>made simpler.</em>
              </h2>

              <p>
                Manage bookings, services, schedules and customers from one
                simple place. Spend less time managing and more time caring.
              </p>
            </div>

            {/* Phone */}

            <div className="app-phone-area partner-phone-area">
              <div className="phone-decoration partner-decoration app-animate ">
                {/* <span>YOUR BUSINESS</span>

                <strong>YOUR WAY</strong> */}
              </div>

              <div className="phone app-phone-partner">
                <div className="phone-top"></div>

                <img src={partnerApp} alt="Scoobyz Partner app" />
              </div>
            </div>

            {/* Features */}

            <div className="app-features app-animate">
              <div>
                <span>01</span>
                Bookings
              </div>

              <div>
                <span>02</span>
                Schedule
              </div>

              <div>
                <span>03</span>
                Services
              </div>

              <div>
                <span>04</span>
                Earnings
              </div>
            </div>

            {/* Store Buttons */}

            <div className="download-area app-animate">
              <span className="download-label">DOWNLOAD THE APP</span>

              <div className="store-links">
                {/* App Store */}

                <a href="#" className="store-link">
                  <span className="store-icon">●</span>

                  <span>
                    <small>Download on the</small>
                    App Store
                  </span>
                </a>

                {/* Google Play */}

                <a
                  href="https://play.google.com/store/apps/details?id=com.differ2099.scoob"
                  target="_blank"
                  rel="noreferrer"
                  className="store-link"
                >
                  <span className="store-icon">▶</span>

                  <span>
                    <small>GET IT ON</small>
                    Google Play
                  </span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* ==================================================
            CLOSING SECTION
        ================================================== */}

        <section className="apps-closing">
          <div className="closing-box">
            <span className="eyebrow">ONE COMMUNITY</span>

            <h2>
              Two apps.
              <br />
              <em>One happy dog.</em>
            </h2>

            <p>
              Scoobyz brings pet parents and pet-care professionals together in
              one connected community.
            </p>
          </div>
        </section>
      </section>

      {/* ====================================================
          CSS
      ==================================================== */}

      <style>{`

        /* ==================================================
           BASE
        ================================================== */

        .apps-page {
          width: 100%;
          overflow: hidden;

          background: #f6eee3;
          color: #202b31;
        }


        /* ==================================================
           TYPOGRAPHY
        ================================================== */

        .eyebrow {
          display: block;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.2em;

          text-transform: uppercase;

          color: #446040;
        }


        /* ==================================================
           INTRO
        ================================================== */

        .apps-intro {
          width: 100%;

          padding:
            150px
            30px
            125px;

          text-align: center;
        }

        .apps-intro-content {
          max-width: 850px;
          margin: auto;
        }

        .apps-intro h1 {
          margin:
            18px
            0
            28px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              48px,
              6vw,
              82px
            );

          font-weight: 400;

          line-height: 0.96;

          letter-spacing: -0.055em;
        }

        .apps-intro h1 em {
          color: #5d7890;
          font-weight: 400;
        }

        .apps-intro p {
          max-width: 510px;

          margin: auto;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 13px;

          line-height: 1.85;

          color: #62635e;
        }


        /* ==================================================
           BLUE STRIP
        ================================================== */

        .app-stripe {
          height: 74px;

          overflow: hidden;

          background:
            repeating-linear-gradient(
              90deg,
              #b9d3e0 0px,
              #b9d3e0 7px,
              #dcebf0 7px,
              #dcebf0 14px
            );

          border-top:
            1px solid
            #a6c6d5;

          border-bottom:
            1px solid
            #a6c6d5;
        }

        .app-stripe-inner {
          width: max-content;

          height: 100%;

          display: flex;

          align-items: center;

          gap: 55px;

          padding-left: 40px;

          white-space: nowrap;
        }

        .app-stripe-inner span {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.16em;

          color: #3d6279;
        }


        /* ==================================================
           MAIN APPS SECTION
        ================================================== */

        .apps-products {
          width: 100%;
          max-width: 1380px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1fr
            1fr;

          border-left:
            1px solid
            #c9c2b6;

          border-right:
            1px solid
            #c9c2b6;

          border-bottom:
            1px solid
            #c9c2b6;
        }


        /* ==================================================
           APP COLUMN
        ================================================== */

        .app-column {
          min-width: 0;

          padding:
            70px
            55px
            60px;

          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .customer-column {
          background: #ebe3d6;

          border-right:
            1px solid
            #c9c2b6;
        }

        .partner-column {
          background: #f2eadf;
        }


        /* ==================================================
           APP HEADER
        ================================================== */

        .app-column-header {
          min-height: 330px;
        }

        .app-number {
          display: block;

          margin-bottom: 25px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 13px;

          font-style: italic;

          color: #7895a8;
        }

        .app-column h2 {
          margin:
            18px
            0
            25px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              42px,
              4.2vw,
              64px
            );

          font-weight: 400;

          line-height: 0.91;

          letter-spacing: -0.055em;
        }

        .app-column h2 em {
          color: #5d7890;

          font-weight: 400;
        }

        .app-column-header > p {
          max-width: 390px;

          margin: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12px;

          line-height: 1.85;

          color: #62635e;
        }


        /* ==================================================
           PHONE AREA
        ================================================== */

        .app-phone-area {
          position: relative;

          height: 500px;

          display: flex;

          justify-content: center;

          align-items: center;

          margin:
            10px
            -20px
            30px;

          overflow: hidden;
        }

        .app-phone-area::before {
          content: "";

          position: absolute;

          width: 330px;
          height: 330px;

          border-radius: 50%;

          background: #d9c9b5;

          opacity: 0.38;
        }

        .partner-phone-area::before {
          background: #b9d3e0;

          opacity: 0.48;
        }


        /* ==================================================
           PHONE DECORATION
        ================================================== */

        .phone-decoration {
          position: absolute;

          z-index: 1;

          width: 220px;
          height: 90px;

          padding: 18px ;
          

          display: flex;

          flex-direction: column;

          justify-content: center;

        //   background:
        //     repeating-linear-gradient(
        //       -45deg,
        //       #e3d1bd 0px,
        //       #e3d1bd 6px,
        //       #f1e3d4 6px,
        //       #f1e3d4 12px
        //     );

        //   border:
        //     1px solid
        //     #c9bba9;

          transform:
            translate(
              -105px,
              -120px
            );
        }

        .partner-decoration {
        //   background:
        //     repeating-linear-gradient(
        //       -45deg,
        //       #c7dce5 0px,
        //       #c7dce5 6px,
        //       #e4eff2 6px,
        //       #e4eff2 12px
        //     );

        //   border-color: #aec9d4;

          transform:
            translate(
              105px,
              -120px
            );
        }

        .phone-decoration span {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.17em;

          color: #557083;
        }

        .phone-decoration strong {
          margin-top: 6px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 20px;

          font-weight: 400;
        }


        /* ==================================================
           PHONE
        ================================================== */

        .phone {
          position: relative;

          z-index: 3;

          width: 230px;
          height: 465px;

          padding: 7px;

          background: #1e292e;

          border:
            1px solid
            #111a1e;

          border-radius: 27px;

          box-shadow:
            12px
            18px
            30px
            rgba(
              40,
              45,
              43,
              0.15
            );

          overflow: hidden;
        }

        .phone-top {
          position: absolute;

          z-index: 5;

          top: 11px;
          left: 50%;

          transform:
            translateX(-50%);

          width: 60px;
          height: 5px;

          border-radius: 10px;

          background: #111a1e;
        }

        .phone img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          border-radius: 21px;
        }


        /* ==================================================
           FEATURES
        ================================================== */

        .app-features {
          border-top:
            1px solid
            #c9c2b6;

          margin-top: auto;
        }

        .app-features div {
          display: flex;

          align-items: center;

          gap: 16px;

          padding: 11px 0;

          border-bottom:
            1px solid
            #c9c2b6;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 9px;

          font-weight: 600;

          text-transform: uppercase;

          letter-spacing: 0.08em;
        }

        .app-features span {
          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 11px;

          font-style: italic;

          color: #7895a8;
        }


        /* ==================================================
           DOWNLOAD AREA
        ================================================== */

        .download-area {
          padding-top: 30px;
        }

        .download-label {
          display: block;

          margin-bottom: 11px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          color: #446040;
        }

        .store-links {
          display: flex;

          gap: 7px;

          flex-wrap: wrap;
        }

        .store-link {
          min-width: 140px;

          height: 46px;

          padding:
            0
            12px;

          display: flex;

          align-items: center;

          gap: 8px;

          border:
            1px solid
            #6f716b;

          background: transparent;

          color: #202b31;

          text-decoration: none;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .store-link:hover {
          background: #446040;

          color: white;

          transform:
            translateY(-2px);
        }

        .store-icon {
          font-size: 12px;
        }

        .store-link span:last-child {
          display: flex;

          flex-direction: column;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 11px;

          font-weight: 700;
        }

        .store-link small {
          margin-bottom: 2px;

          font-size: 6px;

          font-weight: 400;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }


        /* ==================================================
           CLOSING SECTION
        ================================================== */

        .apps-closing {
          padding:
            120px
            25px;

          background:
            repeating-linear-gradient(
              90deg,
              #b9d3e0 0px,
              #b9d3e0 7px,
              #dcebf0 7px,
              #dcebf0 14px
            );

          border-bottom:
            1px solid
            #aec9d4;
        }

        .closing-box {
          max-width: 760px;

          margin: 0 auto;

          padding:
            70px
            50px;

          background: #f7efe4;

          border:
            1px solid
            #c9c0b3;

          text-align: center;

          box-shadow:
            0
            14px
            30px
            rgba(
              54,
              65,
              63,
              0.08
            );
        }

        .closing-box h2 {
          margin:
            18px
            0
            25px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              42px,
              5vw,
              65px
            );

          font-weight: 400;

          line-height: 0.94;

          letter-spacing: -0.05em;
        }

        .closing-box h2 em {
          color: #5d7890;

          font-weight: 400;
        }

        .closing-box p {
          max-width: 450px;

          margin: auto;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 12px;

          line-height: 1.8;

          color: #62635e;
        }


        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 900px) {

          .apps-products {
            grid-template-columns: 1fr;
          }

          .customer-column {
            border-right: none;

            border-bottom:
              1px solid
              #c9c2b6;
          }

          .app-column {
            padding:
              65px
              35px
              55px;
          }

        }


        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 600px) {

          .apps-intro {
            padding:
              100px
              22px
              80px;
          }

          .apps-intro h1 {
            font-size: 48px;
          }

          .app-stripe-inner {
            justify-content: flex-start;

            gap: 30px;

            padding-left: 25px;
          }

          .app-column {
            padding:
              55px
              22px
              45px;
          }

          .app-column-header {
            min-height: auto;
          }

          .app-column h2 {
            font-size: 46px;
          }

          .app-phone-area {
            height: 460px;

            margin-left: -10px;
            margin-right: -10px;
          }

          .phone {
            width: 205px;
            height: 415px;

            border-radius: 23px;
          }

          .phone img {
            border-radius: 18px;
          }

          .phone-decoration {
            width: 180px;
            height: 75px;

            transform:
              translate(
                -65px,
                -110px
              );
          }

          .partner-decoration {
            transform:
              translate(
                65px,
                -110px
              );
          }

          .app-phone-area::before {
            width: 290px;
            height: 290px;
          }

          .store-link {
            min-width: 135px;
          }

          .closing-box {
            padding:
              50px
              25px;
          }

        }

      `}</style>
    </>
  );
};

export default AppShowcase;
