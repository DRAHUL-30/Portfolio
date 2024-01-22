import { useEffect, Fragment } from "react";
import "./App.css";
import "./index.css";
import { SignalFilled } from "@ant-design/icons";
import { Layout } from "./Components/Layouts/Layout";

const App = () => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <Fragment>
      {
        window.navigator.onLine ? <Layout /> : <p className="text-[20px] text-red-400 py-4 text"><span className="px-3"><SignalFilled /></span>Please Check Your Internet Connection ....</p>
      }
    </Fragment>
  );
};

export default App;