import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import ThemeeProvider from "./Context/Theme";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import Invoices from "./Pages/Invoices/Invoices";
import Form from "./Pages/Form/Form";
import Calendar from "./Pages/Calendar/Calendar";
import FAQ from "./Pages/FAQ/FAQ";
import BarChart from "./Pages/BarChart/BarChart";
import PieChart from "./Pages/PieChart/PieChart";
import LineChart from "./Pages/LineChart/LineChart";
import Geography from "./Pages/Geography/Geography";
import Contacts from "./Pages/Contacts/Contacts";
import NotFound from "./Pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ThemeeProvider>
          {" "}
          <App />{" "}
        </ThemeeProvider>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bar" element={<BarChart />} />
      <Route path="/pie" element={<PieChart />} />
      <Route path="/line" element={<LineChart />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
