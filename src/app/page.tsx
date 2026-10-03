import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Credentials from "@/components/Credentials";
import Toolkit from "@/components/Toolkit";
import Contact, { Footer } from "@/components/Contact";
import { CopilotField } from "@/components/CopilotRibbon";

export default function Home() {
  return (
    <>
      <CopilotField />
      <Nav />
      <main className="page">
        <Hero />
        <Dashboard />
        <Credentials />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
