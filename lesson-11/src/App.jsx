import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./context/UserContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PageLayout from "./components/PageLayout";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/ProductContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <ProductProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          {isLoggedIn ? (
            <>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductPage />} />
              </Routes>
            </>
          ) : (
            <PageLayout>Please log in</PageLayout>
          )}
        </BrowserRouter>
      </QueryClientProvider>
    </ProductProvider>
  );
};

export default App;
