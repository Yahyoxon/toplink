import Dashboard from "../../Components/Dashboard/Dashboard";
import "../../App.css";
import AdminProfil from "../../Components/AdminProfil/AdminProfil";
import { useContext } from "react";
import { Context } from "../../Context/ThemeContext";

const AdminProfilePage = () => {
  const [theme] = useContext(Context);
  return (
    <section
      className={`edit-page
              adminProfile-page  
              adminProfile-page-${theme}`}
    >
      <main className="main">
        <div className="container">
          <Dashboard />
          <AdminProfil />
        </div>
      </main>
    </section>
  );
};

export default AdminProfilePage;
