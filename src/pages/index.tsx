import Head from "next/head";
import Beneficios from "../components/app/Beneficios";
import MainScreen from "../components/app/MainScreen";
import Navbar from "../components/app/Navbar";
import FAQ from "../components/app/FAQ";
import AnimatedBeamDemo from "@/components/app/Beem";
import Notifications from "@/components/app/Notifications";
import ScreenShots from "@/components/app/ScreenShots";

export default function Home() {
  return (
    <>
      <Head>
        <title>iSync ERP | Mobile APP</title>
        <meta name="description" content="Optimiza tu negocio en Honduras con iSync ERP: pedidos, cobros, facturación en PDF, impresión térmica y dashboard de ventas desde tu celular." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="keywords" content="ERP, Honduras, iSync, facturación, pedidos, cobros, ventas, móvil, impresión térmica, dashboard" />
        <meta name="author" content="iSync ERP" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isyncerp.com/" />
        <meta property="og:title" content="iSync ERP | Mobile APP" />
        <meta property="og:description" content="Optimiza tu negocio en Honduras con iSync ERP: pedidos, cobros, facturación en PDF, impresión térmica y dashboard de ventas desde tu celular." />
        <meta property="og:image" content="https://isyncerp.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://isyncerp.com/" />
        <meta name="twitter:title" content="iSync ERP | Mobile APP" />
        <meta name="twitter:description" content="Optimiza tu negocio en Honduras con iSync ERP: pedidos, cobros, facturación en PDF, impresión térmica y dashboard de ventas desde tu celular." />
        <meta name="twitter:image" content="https://isyncerp.com/og-image.png" />
      </Head>

      <Navbar />
      <MainScreen />
      {/* <AnimatedBeamDemo /> */}
      {/* <Notifications /> */}
      {/* <ScreenShots /> */}
      <Beneficios />
      <FAQ />
    </>
  );
}