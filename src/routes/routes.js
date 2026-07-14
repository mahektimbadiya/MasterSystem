import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./homePage";
import CompanySection from "./companySection";

export default function RouteWraper() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/compony" element={<CompanySection />} />
    </Routes>
  )
}