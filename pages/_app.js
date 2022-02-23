import "../styles/globals.css";
import AuthContextProvider from "../Context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
