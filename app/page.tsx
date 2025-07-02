import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex | Frontend Developer</title>
        <meta
          name="description"
          content="Personal portfolio of Alex, a frontend developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}