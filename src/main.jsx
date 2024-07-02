import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App.jsx";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
