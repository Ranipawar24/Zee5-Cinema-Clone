// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BsCaretRightFill } from "react-icons/bs";
// import movie1 from "../Assets/movie1.webp";
// import movie3 from "../Assets/movie3.webp";
// import movie2 from "../Assets/movie2.webp";
// import movie4 from "../Assets/movie4.webp";
// import smallMovie1 from "../Assets/smallMovie1.webp";
// import smallMovie2 from "../Assets/smallMovie2.webp";
// import smallMovie3 from "../Assets/smallMovie3.webp";
// import smallmovie4 from "../Assets/smallmovie4.webp";
// import { Link } from "react-router-dom";

// const imageUrls = [
//   movie1,
//   movie3,
//   movie2,
//   movie4,
//   smallMovie1,
//   smallMovie3,
//   smallmovie4,
//   smallMovie2,
//   // Add more image URLs as needed
// ];

// function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="home-container">
//       <section className="slider">
//         <Scrollbar imageUrls={imageUrls} />
//       </section>

//       {carouselHomeData.map((item, index) => (
//         <div className="tranding-nu" key={index}>
//           <div className="cc-header">
//             <h2>{item.heading}</h2>
//             {/* A dynamic Link to more */}
//             <Link
//               to={`/more/${encodeURIComponent(item.apiEndpoint)}/${
//                 item.filterType
//               }/${encodeURIComponent(item.heading)}`}
//               className="m-btn"
//             >
//               More <FaChevronRight />
//             </Link>
//           </div>
//           <Carousel
//             apiEndpoint={item.apiEndpoint}
//             filterType={item.filterType}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;
