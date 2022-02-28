import {
   BrowserRouter,
   BrowserRouter as Router,
   Route,
   Routes,
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = (props) => {
   console.log(props);
   return <p> This is hats Page </p>;
};

function App() {
   return (
      <BrowserRouter>
         <div>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop/hats" element={<HatsPage />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
