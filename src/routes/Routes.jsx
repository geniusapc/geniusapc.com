import React, { Suspense } from "react";
import { Route, Routes  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const Construction = React.lazy(() => import( "../pages/Construction/Construction"));
const Home = React.lazy(() => import( "../pages/Home/Home"));

const FallBackIcon = <div style={{width:"100%" , height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
  <FontAwesomeIcon  className="windows"  size="2x"  icon={["fab", "windows"]} />
  <div>loading ...</div>
</div>;

const AllRoutes = () => (
    <Suspense fallback={FallBackIcon}>
      <Routes >
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/projects" element={<Construction/>} />
        <Route  path="/blog" element={<Construction/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route path = "*" element={<NotFoundPage/>} />
      </Routes >
    </Suspense>
);

export default AllRoutes;