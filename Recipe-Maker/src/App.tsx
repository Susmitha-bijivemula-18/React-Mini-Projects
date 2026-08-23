import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Popular from './pages/Popular';
import Favorites from './pages/Favorites';
import Category from './pages/Category';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './App.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="app-container">
            {/* NavLink and static routing inside Navbar */}
            <Navbar />
            
            <main>
              {/* 
                ROUTING DEMONSTRATION:
                Below we define the route configuration using react-router-dom.
                - "/" matches the static Home Page.
                - "/recipes" matches the static Recipes Catalog.
                - "/recipes/:recipeId" is a Dynamic Route. The ':recipeId' will be read by useParams() on the RecipeDetails page.
                - "/popular" matches the static Popular recipes lists.
                - "/favorites" matches the static Saved items lists.
                - "/category/:categoryName" is a Dynamic Route to list recipes under a specific category name.
                - "/about" matches the static about page.
                - "*" matches all other paths, rendering a custom 404 NotFound page.
              */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
