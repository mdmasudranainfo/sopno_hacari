import { NavBar } from "@/components/admin/navbar/Navbar";
import PrivateRoute from "@/route/PrivateRoute";

const layout = ({ children }) => {
  return (
    <PrivateRoute>
      <NavBar />
      {children}
    </PrivateRoute>
  );
};

export default layout;
