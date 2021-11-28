import React, { Suspense } from "react";
import { Route, Routes  } from "react-router-dom";
import loading from "../assets/loading.gif";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Construction = React.lazy(() => import( "../pages/Construction/Construction"));
const FallBackIcon = <div style={{background:"red", width:"100px"}}> Loading ... <br/> <img src={loading} alt="dd"/></div>;

const Routes1 = () => (
    <Suspense fallback={FallBackIcon}>
      <Routes >
        <Route  path="/" element={<Construction/>} />
        <Route  path="/about" element={<Construction/>} />
        <Route  path="/project" element={<Construction/>} />
        <Route  path="/blog" element={<Construction/>} />
        <Route  path="/contact" element={<Construction/>} />
        <Route path = "*" element={<NotFoundPage/>} />
      </Routes >
    </Suspense>
);

export default Routes1;