import React from "react";
import { Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";
import { userRoutes } from "@/models/models.js";
import NoPage from "@/components/NoPage/NoPage.jsx";

function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path={userRoutes.NOT_FOUND} element={<NoPage />} />
    </Routes>
  );
}

// Add prop validation for the 'children' prop
RoutesWithNotFound.propTypes = {
  children: PropTypes.any,
};

export default RoutesWithNotFound;
