// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Footer from './pages/Footer';
import  Layout from './components/Layout';
import Home from "./pages/home";

// import Contact from './pages/Contact';
// import Press from './pages/Press'; // Importing the Press page
// import Podcasts from './pages/Podcasts/Podcasts'; // Importing the Podcasts page
// import PodcastDetail from './pages/Podcasts/PodcastDetail'; // Importing the PodcastDetail page
// import Layout from "./components/Layout"
// import Store from './pages/Merch/Store'; // Importing the Store page
// import StoreDetails from './pages/Merch/StoreDetails'; // Importing the StoreDetail page
// import GenreGrid from './pages/Merch/GenreGrid'; // Importing the GenreGrid page
// import MerchByGenre from './pages/Merch/MerchbyGenre'; // Importing
// import PodcastControl from './pages/Podcasts/PodcastControl'; // Importing the PodcastControl page
// //


// export default function App() {
//   return (
//      <BrowserRouter>
//       {/* <Navbar/> */}
//       <Routes>
//          <Route element={<Layout />}></Route>
//       </Routes>
//      </BrowserRouter>
//   )
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}



// import "./server"
// / Importing the server file to ensure server-side rendering is set up correctly

// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* <Navbar/> */}
//       <Routes>
//           <Route element={<Layout />}>
//             {/* <Route path="/" element={<Home />} />
//             <Route path="about" element={<About />} /> {/*  */}
//             {/* <Route path="contact" element={<Contact />} /> {/* l */}
//             {/* <Route path="press" element={<Press />} />  */}
//             {/* Podcasts routes */}
//             <Route path="podcasts" element={<Podcasts />} /> 
//             <Route path="podcasts/:id" element={<PodcastDetail />} /> {/*  */}
//             <Route path="podcasts/:id/listen" element={<PodcastControl />} /> {/*  */}


//             {/* Merch routes */}
//             <Route path="store" element={<Store />} />
//             <Route path="store/:id" element={<StoreDetails />} />
//             <Route path="store/genres" element={<GenreGrid />} />
//             <Route path="store/genre/:genre" element={<MerchByGenre />} />


            
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'






// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
