import Cliente from "@/components/Cliente";
import Contato from "@/components/Contato";
import Header from "@/components/Header";
import Produtos from "@/components/Produtos";
import SecondSobre from "@/components/SecondSobre";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <>
    <Header/>
    <Sobre/>
    <Cliente/>
    <SecondSobre/>
    <Produtos/>
    <Contato/>
    <Footer/>
    </>
  );
}
