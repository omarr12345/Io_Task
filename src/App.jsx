import { Route, Routes } from "react-router-dom";
// Layouts
import Header from "./Layouts/Header/Header";

// Pages
import ClassesPage from "./Pages/ClassesPage/ClassesPage";
import ClientsPage from "./Pages/ClientsPage/ClientsPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SideBar from "./Layouts/SideBar/SideBar";
import ClassDetailsPage from "./Pages/ClassDetailsPage/ClassDetailsPage";

const App = () => {
  return (
    <>
      <Header />

      <div className="container-lg">
        <div className="custom-p">
          <div className="custom-side">
            <SideBar />
          </div>

          <div className="custom-body">
            <Routes>
              <Route path="/" element={<ClientsPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/clients/:id" element={<ProfilePage />} />
              <Route path="/classes/:id" element={<ClassDetailsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
