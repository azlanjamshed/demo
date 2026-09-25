// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const FoundersSection = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".founders-eyebrow", {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(".founders-title", {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });

//       gsap.from(cardsRef.current, {
//         opacity: 0,
//         y: 80,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 65%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="founders-section">
//       <div className="founders-container">
//         {/* HEADER */}
//         <div className="founders-header">
//           <span className="founders-eyebrow">THE PEOPLE BEHIND SCOOBYZ</span>

//           <h2 className="founders-title">
//             Built with purpose.
//             <br />
//             <em>Driven by people.</em>
//           </h2>

//           <p className="founders-intro">
//             Scoobyz is built by people who care deeply about technology, pets,
//             and creating better experiences for everyone involved in pet care.
//           </p>
//         </div>

//         {/* FOUNDERS */}
//         <div className="founders-grid">
//           {/* SOUMIL */}
//           <article
//             ref={(el) => (cardsRef.current[0] = el)}
//             className="founder-card"
//           >
//             <div className="founder-number">01</div>

//             <div className="founder-profile">
//               <div className="founder-avatar">SS</div>

//               <div>
//                 <h3>Soumil Singh</h3>

//                 <span className="founder-role">Co-Founder</span>
//               </div>
//             </div>

//             <div className="founder-divider" />

//             <h4>Product, Brand & Marketing</h4>

//             <p className="founder-description">
//               Soumil drives the vision, product, brand, and growth direction of
//               Scoobyz, bringing together technology, customer experience, and
//               market positioning.
//             </p>

//             <p className="founder-description">
//               He leads the development of the Scoobyz product from concept to
//               execution, while shaping the brand's identity, positioning, and
//               marketing strategy. His role spans product vision, customer
//               experience, brand building, and business growth.
//             </p>

//             <div className="founder-education">
//               <span>EDUCATION</span>

//               <p>
//                 B.Tech in Information Technology
//                 <br />
//                 Delhi
//               </p>
//             </div>
//           </article>

//           {/* KUNAL */}
//           <article
//             ref={(el) => (cardsRef.current[1] = el)}
//             className="founder-card"
//           >
//             <div className="founder-number">02</div>

//             <div className="founder-profile">
//               <div className="founder-avatar">KK</div>

//               <div>
//                 <h3>Kunal Kashyap</h3>

//                 <span className="founder-role">Co-Founder</span>
//               </div>
//             </div>

//             <div className="founder-divider" />

//             <h4>Operations, Supply & Service Excellence</h4>

//             <p className="founder-description">
//               Kunal leads the operational engine of Scoobyz, ensuring the
//               company's services are delivered reliably, consistently, and at
//               scale.
//             </p>

//             <p className="founder-description">
//               He oversees supply-chain management, service- provider
//               coordination, quality standards, and on-time service delivery,
//               while driving team expansion and operational capacity.
//             </p>

//             <div className="founder-education">
//               <span>EDUCATION</span>

//               <p>
//                 Master's in Business Management
//                 <br />
//                 Supply Chain Management, Liverpool, London
//               </p>
//             </div>
//           </article>
//         </div>
//       </div>

//       <style>{`

//         /* ========================================
//            SECTION
//         ======================================== */

//         .founders-section {
//           position: relative;
//           width: 100%;
//           background: #f5ede2;
//           overflow: hidden;
//           padding: 150px 0;
//           color: #1f2a33;
//         }

//         /* ========================================
//            CONTAINER
//         ======================================== */

//         .founders-container {
//           width: 84%;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         /* ========================================
//            HEADER
//         ======================================== */

//         .founders-header {
//           max-width: 850px;
//           margin-bottom: 100px;
//         }

//         .founders-eyebrow {
//           display: block;

//           margin-bottom: 25px;

//           font-family: Arial, sans-serif;

//           font-size: 10px;

//           font-weight: 700;

//           letter-spacing: 0.25em;

//           color: #446040;
//         }

//         .founders-title {
//           margin: 0;

//           font-family: Georgia, serif;

//           font-size: clamp(55px, 7vw, 105px);

//           font-weight: 400;

//           line-height: 0.9;

//           letter-spacing: -0.055em;
//         }

//         .founders-title em {
//           font-style: italic;
//         }

//         .founders-intro {
//           max-width: 600px;

//           margin-top: 40px;

//           font-family: Arial, sans-serif;

//           font-size: 15px;

//           line-height: 1.8;

//           color: #5f625f;
//         }

//         /* ========================================
//            GRID
//         ======================================== */

//         .founders-grid {
//           display: grid;

//           grid-template-columns: repeat(2, minmax(0, 1fr));

//           gap: 30px;
//         }

//         /* ========================================
//            CARD
//         ======================================== */

//         .founder-card {
//           position: relative;

//           padding: 55px;

//           min-height: 650px;

//           background: #fefefe;

//           border: 1px solid rgba(31, 42, 51, 0.12);

//           display: flex;

//           flex-direction: column;

//           transition:
//             transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
//             box-shadow 0.5s ease;

//           overflow: hidden;
//         }

//         .founder-card:hover {
//           transform: translateY(-10px);

//           box-shadow:
//             0 25px 70px rgba(31, 42, 51, 0.10);
//         }

//         /* ========================================
//            NUMBER
//         ======================================== */

//         .founder-number {
//           position: absolute;

//           top: 35px;

//           right: 40px;

//           font-family: Georgia, serif;

//           font-size: 14px;

//           color: #446040;

//           letter-spacing: 0.1em;
//         }

//         /* ========================================
//            PROFILE
//         ======================================== */

//         .founder-profile {
//           display: flex;

//           align-items: center;

//           gap: 22px;
//         }

//         .founder-avatar {
//           width: 75px;
//           height: 75px;

//           border-radius: 50%;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           background: #446040;

//           color: white;

//           font-family: Georgia, serif;

//           font-size: 22px;

//           letter-spacing: -0.04em;
//         }

//         .founder-profile h3 {
//           margin: 0;

//           font-family: Georgia, serif;

//           font-size: 34px;

//           font-weight: 400;

//           letter-spacing: -0.04em;
//         }

//         .founder-role {
//           display: block;

//           margin-top: 5px;

//           font-family: Arial, sans-serif;

//           font-size: 10px;

//           text-transform: uppercase;

//           letter-spacing: 0.18em;

//           color: #446040;
//         }

//         /* ========================================
//            DIVIDER
//         ======================================== */

//         .founder-divider {
//           width: 100%;

//           height: 1px;

//           background: rgba(31, 42, 51, 0.12);

//           margin: 45px 0 35px;
//         }

//         /* ========================================
//            ROLE
//         ======================================== */

//         .founder-card h4 {
//           margin: 0 0 25px;

//           max-width: 500px;

//           font-family: Arial, sans-serif;

//           font-size: 14px;

//           font-weight: 700;

//           line-height: 1.5;

//           letter-spacing: 0.02em;
//         }

//         /* ========================================
//            DESCRIPTION
//         ======================================== */

//         .founder-description {
//           margin: 0 0 18px;

//           max-width: 600px;

//           font-family: Arial, sans-serif;

//           font-size: 13px;

//           line-height: 1.8;

//           color: #5f625f;
//         }

//         /* ========================================
//            EDUCATION
//         ======================================== */

//         .founder-education {
//           margin-top: auto;

//           padding-top: 35px;
//         }

//         .founder-education span {
//           display: block;

//           margin-bottom: 12px;

//           font-family: Arial, sans-serif;

//           font-size: 9px;

//           font-weight: 700;

//           letter-spacing: 0.22em;

//           color: #446040;
//         }

//         .founder-education p {
//           margin: 0;

//           font-family: Arial, sans-serif;

//           font-size: 12px;

//           line-height: 1.7;

//           color: #5f625f;
//         }

//         /* ========================================
//            TABLET
//         ======================================== */

//         @media (max-width: 900px) {

//           .founders-section {
//             padding: 110px 0;
//           }

//           .founders-container {
//             width: 88%;
//           }

//           .founders-header {
//             margin-bottom: 70px;
//           }

//           .founders-grid {
//             grid-template-columns: 1fr;

//             gap: 25px;
//           }

//           .founder-card {
//             min-height: auto;

//             padding: 45px;
//           }

//         }

//         /* ========================================
//            MOBILE
//         ======================================== */

//         @media (max-width: 600px) {

//           .founders-section {
//             padding: 90px 0;
//           }

//           .founders-container {
//             width: 88%;
//           }

//           .founders-title {
//             font-size: 52px;
//           }

//           .founders-intro {
//             font-size: 13px;

//             margin-top: 30px;
//           }

//           .founder-card {
//             padding: 32px;

//             min-height: auto;
//           }

//           .founder-number {
//             top: 25px;

//             right: 25px;
//           }

//           .founder-avatar {
//             width: 60px;
//             height: 60px;

//             font-size: 18px;
//           }

//           .founder-profile h3 {
//             font-size: 28px;
//           }

//           .founder-divider {
//             margin: 35px 0 28px;
//           }

//           .founder-card h4 {
//             font-size: 13px;
//           }

//           .founder-description {
//             font-size: 12px;
//           }

//         }

//       `}</style>
//     </section>
//   );
// };

// export default FoundersSection;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    id: 1,
    name: "Soumil Singh",
    initials: "SS",
    role: "Co-Founder",
    department: "Product, Brand & Marketing",
    description: [
      "Soumil drives the vision, product, brand, and growth direction of Scoobyz, bringing together technology, customer experience, and market positioning.",
      "He leads the development of the Scoobyz product from concept to execution, while shaping the brand's identity, positioning, and marketing strategy. His role spans product vision, customer experience, brand building, and business growth.",
    ],
    education: {
      degree: "B.Tech in Information Technology",
      location: "Delhi",
    },
  },

  {
    id: 2,
    name: "Kunal Kashyap",
    initials: "KK",
    role: "Co-Founder",
    department: "Operations, Supply & Service Excellence",
    description: [
      "Kunal leads the operational engine of Scoobyz, ensuring the company's services are delivered reliably, consistently, and at scale.",
      "He oversees supply-chain management, service-provider coordination, quality standards, and on-time service delivery, while driving team expansion and operational capacity.",
    ],
    education: {
      degree: "Master's in Business Management",
      specialization: "Supply Chain Management",
      location: "Liverpool, London",
    },
  },
];

const FoundersSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founders-eyebrow", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".founders-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="founders-section">
      <div className="founders-container">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="founders-header">
          <span className="founders-eyebrow">THE PEOPLE BEHIND SCOOBYZ</span>

          <h2 className="founders-title">
            Built with purpose.
            <br />
            <em>Driven by people.</em>
          </h2>

          <p className="founders-intro">
            Scoobyz is built by people who care deeply about technology, pets,
            and creating better experiences for everyone involved in pet care.
          </p>
        </div>

        {/* ========================================
            FOUNDERS
        ======================================== */}

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <article
              key={founder.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="founder-card"
            >
              {/* NUMBER */}

              <div className="founder-number">
                {String(founder.id).padStart(2, "0")}
              </div>

              {/* PROFILE */}

              <div className="founder-profile">
                <div className="founder-avatar">{founder.initials}</div>

                <div>
                  <h3>{founder.name}</h3>

                  <span className="founder-role">{founder.role}</span>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="founder-divider" />

              {/* DEPARTMENT */}

              <h4>{founder.department}</h4>

              {/* DESCRIPTION */}

              {founder.description.map((paragraph, index) => (
                <p key={index} className="founder-description">
                  {paragraph}
                </p>
              ))}

              {/* EDUCATION */}

              <div className="founder-education">
                <span>EDUCATION</span>

                <p>
                  {founder.education.degree}

                  {founder.education.specialization && (
                    <>
                      <br />
                      {founder.education.specialization}
                    </>
                  )}

                  <br />

                  {founder.education.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================================
          CSS
      ======================================== */}

      <style>{`

        /* ========================================
           SECTION
        ======================================== */

        .founders-section {
          position: relative;

          width: 100%;

          background: #f5ede2;

          overflow: hidden;

          padding: 150px 0;

          color: #1f2a33;
        }


        /* ========================================
           CONTAINER
        ======================================== */

        .founders-container {
          width: 84%;

          max-width: 1400px;

          margin: 0 auto;
        }


        /* ========================================
           HEADER
        ======================================== */

        .founders-header {
          max-width: 850px;

          margin-bottom: 100px;
        }


        .founders-eyebrow {
          display: block;

          margin-bottom: 25px;

          font-family: Arial, sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.25em;

          color: #446040;
        }


        .founders-title {
          margin: 0;

          font-family: Georgia, serif;

          font-size: clamp(55px, 7vw, 105px);

          font-weight: 400;

          line-height: 0.9;

          letter-spacing: -0.055em;
        }


        .founders-title em {
          font-style: italic;
        }


        .founders-intro {
          max-width: 600px;

          margin-top: 40px;

          font-family: Arial, sans-serif;

          font-size: 15px;

          line-height: 1.8;

          color: #5f625f;
        }


        /* ========================================
           GRID
        ======================================== */

        .founders-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 30px;
        }


        /* ========================================
           CARD
        ======================================== */

        .founder-card {
          position: relative;

          padding: 55px;

          min-height: 650px;

          background: #fefefe;

          border: 1px solid
            rgba(31, 42, 51, 0.12);

          display: flex;

          flex-direction: column;

          transition:
            transform 0.5s
              cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s ease;

          overflow: hidden;
        }


        .founder-card:hover {
          transform: translateY(-10px);

          box-shadow:
            0 25px 70px
            rgba(31, 42, 51, 0.10);
        }


        /* ========================================
           NUMBER
        ======================================== */

        .founder-number {
          position: absolute;

          top: 35px;

          right: 40px;

          font-family: Georgia, serif;

          font-size: 14px;

          color: #446040;

          letter-spacing: 0.1em;
        }


        /* ========================================
           PROFILE
        ======================================== */

        .founder-profile {
          display: flex;

          align-items: center;

          gap: 22px;
        }


        .founder-avatar {
          width: 75px;

          height: 75px;

          flex-shrink: 0;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #446040;

          color: white;

          font-family: Georgia, serif;

          font-size: 22px;

          letter-spacing: -0.04em;
        }


        .founder-profile h3 {
          margin: 0;

          font-family: Georgia, serif;

          font-size: 34px;

          font-weight: 400;

          letter-spacing: -0.04em;
        }


        .founder-role {
          display: block;

          margin-top: 5px;

          font-family: Arial, sans-serif;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 0.18em;

          color: #446040;
        }


        /* ========================================
           DIVIDER
        ======================================== */

        .founder-divider {
          width: 100%;

          height: 1px;

          background: rgba(31, 42, 51, 0.12);

          margin: 45px 0 35px;
        }


        /* ========================================
           DEPARTMENT
        ======================================== */

        .founder-card h4 {
          margin: 0 0 25px;

          max-width: 500px;

          font-family: Arial, sans-serif;

          font-size: 14px;

          font-weight: 700;

          line-height: 1.5;

          letter-spacing: 0.02em;
        }


        /* ========================================
           DESCRIPTION
        ======================================== */

        .founder-description {
          margin: 0 0 18px;

          max-width: 600px;

          font-family: Arial, sans-serif;

          font-size: 13px;

          line-height: 1.8;

          color: #5f625f;
        }


        /* ========================================
           EDUCATION
        ======================================== */

        .founder-education {
          margin-top: auto;

          padding-top: 35px;
        }


        .founder-education span {
          display: block;

          margin-bottom: 12px;

          font-family: Arial, sans-serif;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.22em;

          color: #446040;
        }


        .founder-education p {
          margin: 0;

          font-family: Arial, sans-serif;

          font-size: 12px;

          line-height: 1.7;

          color: #5f625f;
        }


        /* ========================================
           TABLET
        ======================================== */

        @media (max-width: 900px) {

          .founders-section {
            padding: 110px 0;
          }

          .founders-container {
            width: 88%;
          }

          .founders-header {
            margin-bottom: 70px;
          }

          .founders-grid {
            grid-template-columns: 1fr;

            gap: 25px;
          }

          .founder-card {
            min-height: auto;

            padding: 45px;
          }

        }


        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 600px) {

          .founders-section {
            padding: 90px 0;
          }

          .founders-container {
            width: 88%;
          }

          .founders-title {
            font-size: 52px;
          }

          .founders-intro {
            font-size: 13px;

            margin-top: 30px;
          }

          .founder-card {
            padding: 32px;

            min-height: auto;
          }

          .founder-number {
            top: 25px;

            right: 25px;
          }

          .founder-avatar {
            width: 60px;

            height: 60px;

            font-size: 18px;
          }

          .founder-profile h3 {
            font-size: 28px;
          }

          .founder-divider {
            margin: 35px 0 28px;
          }

          .founder-card h4 {
            font-size: 13px;
          }

          .founder-description {
            font-size: 12px;
          }

        }

      `}</style>
    </section>
  );
};

export default FoundersSection;
