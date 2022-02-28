import {
   BrowserRouter,
   BrowserRouter as Router,
   Route,
   Routes,
} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";

const HatsPage = (props) => {
   console.log(props);
   return <p> This is hats Page </p>;
};

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/" element={<ShopPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
