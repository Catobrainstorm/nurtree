import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <section className="flex-grow pt-48 pb-20 px-6 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex flex-col items-start">
          <h1 className="text-[15vw] lg:text-[14rem] italic leading-[0.8] mb-20 uppercase">Connect</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
            <div className="text-3xl lg:text-6xl font-light leading-tight tracking-tighter">
              For system inquiries, lab access, or collaborative research.
            </div>
            
            <div className="flex flex-col gap-10 font-display text-4xl lg:text-7xl uppercase italic">
              <a href="mailto:lab@nurtree.system" className="hover:text-nurtree-accent hover:pl-8 transition-all duration-500">Email</a>
              <a href="https://wa.me/yourphonenumber" className="hover:text-nurtree-accent hover:pl-8 transition-all duration-500">WhatsApp</a>
              <a href="#" className="hover:text-nurtree-accent hover:pl-8 transition-all duration-500">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}