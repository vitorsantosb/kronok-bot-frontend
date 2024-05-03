import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { userRoutes } from "@/models/routes.js";

import Dashboard from "@/pages/dashboard/Dashboard.jsx";

import Home from "@/pages/home/Home.jsx";
import Layout from "@/components/Layouts/Layout.jsx";
import RoutesWithNotFound from "@/utils/RoutesWithNotFound/RoutesWithNotFound.jsx";
import CreateCharacter from "@/components/Character/CreateCharacter.jsx";
import ListCharacter from "@/components/Character/ListCharacter.jsx";

function AppRoutes() {
    return (
        <Router>
            <RoutesWithNotFound>
                <Route element={<Layout />}>
                    <Route index exact path={"/"} element={<Home />} />
                    <Route path={userRoutes.DASHBOARD} element={<Dashboard />}></Route>
                    <Route path={userRoutes.CREATE_CHARACTER} element={<CreateCharacter />}></Route>
                    <Route path={userRoutes.LIST_CHARACTER} element={<ListCharacter />}></Route>
                </Route>
            </RoutesWithNotFound>
        </Router>
    );
}

export default AppRoutes;
