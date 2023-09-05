import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Head from "next/head";

import { useEffect, useState, useContext } from "react";

import LanguageContext from "../context/LanguageContext";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    console.log(localStorage.theme);
  };

  const { language, changeLanguage } = useContext(LanguageContext);
  const [direction, setDirection] = useState("ltr");


  const handleLanguageChange = () => {
    const newLang = language === "en" ? "pr" : "en";
    changeLanguage(newLang);    

    const newDirection = language !== "pr" ? "rtl" : "ltr";
    setDirection(newDirection); 
    
    console.log(language,direction)
  };



  return (
    <>
      <Head>
        <title>Plastic Injection machine</title>
        <meta name="description" content="Plastic Injection machine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={theme}>
        <Navbar
          switchTheme={switchTheme}
          theme={theme}
          language={language}
          handleLanguageChange={handleLanguageChange}
          direction={direction}
        />
        <Hero
          language={language} 
          direction={direction} 
        />
        <Product
          language={language} 
          direction={direction} 
        />
        <About
          language={language} 
          direction={direction} 
        />
        <Contact
          language={language} 
          direction={direction} 
        />
        <Form
          language={language} 
          direction={direction} 
        />
        <Footer
          language={language} 
          direction={direction} 
        />
      </div>
    </>
  );
}
