import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};
