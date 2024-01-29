import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <header className="border-b-[#e6ebf4] w-full flex justify-between items-center bg-whtie sm:px-8 px-4 py-4 border-b ">
        <Link to="/">
          <img className="w-28 object-contain" src={logo} alt="logo" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter px-4 py-2 rounded-md font-medium bg-[#6469ff]"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 min-h-[calc(100vh-73px)] px-4 py-8 w-full bg-[#f9fafe]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
