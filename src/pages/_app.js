import "@/styles/globals.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
