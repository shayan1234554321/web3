"use client";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import Footer from "@/components/footer";
import Services from "@/components/services";
import Transactions from "@/components/transactions";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
