import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </Provider>
  );
};
