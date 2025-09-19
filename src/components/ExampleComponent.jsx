// // ExampleComponent.tsx or ExampleComponent.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// export default function ExampleComponent() {
//   const boxRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (boxRef.current) {
//       gsap.fromTo(
//         boxRef.current,
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
//       );
//     }
//   }, []);

//   return (
//     <div className="p-8 space-y-8">
//       {/* Animated Box */}
//       <div
//         ref={boxRef}
//         className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center"
//       >
//         GSAP Box
//       </div>

//       {/* React Scroll Example */}
//       <nav className="flex space-x-4">
//         <Link
//           to="section1"
//           smooth={true}
//           duration={500}
//           className="cursor-pointer text-blue-600 underline"
//         >
//           Go to Section 1
//         </Link>
//         <Link
//           to="section2"
//           smooth={true}
//           duration={500}
//           className="cursor-pointer text-blue-600 underline"
//         >
//           Go to Section 2
//         </Link>
//         <button
//           onClick={() => scroll.scrollToTop()}
//           className="text-red-600 underline"
//         >
//           Scroll to Top
//         </button>
//       </nav>

//       {/* Scroll Target Sections */}
//       <div id="section1" className="h-screen bg-gray-200 flex items-center justify-center">
//         Section 1
//       </div>
//       <div id="section2" className="h-screen bg-gray-400 flex items-center justify-center">
//         Section 2
//       </div>
//     </div>
//   );
// }
