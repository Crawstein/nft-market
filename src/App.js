import { useSelector } from "react-redux";
import CreateAndSell from "./components/CreateAndSell/CreateAndSell";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Popular from "./components/Popular/Popular";
import ResponsiveProtection from "./components/ResponsiveProtection/ResponsiveProtection";
import Subscribe from "./components/Subscribe/Subscribe";
import WeeklyArts from "./components/WeeklyArts/WeeklyArts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const infoBlockData = useSelector(state => state.toolkit.infoBlockData)
  return (
    <div>
      {window.innerWidth < 1450 ? (
        <ResponsiveProtection />
      ) : (
        <>
          <Header infoBlockData={infoBlockData[0]} />
          <WeeklyArts />
          <CreateAndSell infoBlockData={infoBlockData[1]} />
          <Popular />
          <Subscribe infoBlockData={infoBlockData[2]} />
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={5}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      )}

    </div>
  );
}

export default App;
