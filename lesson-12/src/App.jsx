import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { PostProvider } from "./context/PostContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoutes from "./components/PrivateRoutes";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <PostProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>

            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </PostProvider>
  );
};

export default App;
