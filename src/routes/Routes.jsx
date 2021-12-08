import React, { Suspense } from "react";
import { Route, Routes  } from "react-router-dom";
import loading from "../assets/loading.gif";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import About from "../pages/About/About";

const Construction = React.lazy(() => import( "../pages/Construction/Construction"));
const Home = React.lazy(() => import( "../pages/Home/Home"));

const FallBackIcon = <div style={{width:"100%" , height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}> 
  <img width="50px" src={loading} alt="loading .."/>
</div>;

const AllRoutes = () => (
    <Suspense fallback={FallBackIcon}>
      <Routes >
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/projects" element={<Construction/>} />
        <Route  path="/blog" element={<Construction/>} />
        <Route  path="/contact" element={<Construction/>} />
        <Route path = "*" element={<NotFoundPage/>} />
      </Routes >
    </Suspense>
);

export default AllRoutes;