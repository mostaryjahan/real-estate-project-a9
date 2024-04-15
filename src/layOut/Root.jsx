import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import useAuth from "../Hook/useAuth";
const Root = () => {
  const {  loading } = useAuth();
  if(loading){
    return <div className="flex justify-center mt-10 items-center"><span className="loading loading-spinner loading-lg "></span></div>

  }
  
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      
     
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
