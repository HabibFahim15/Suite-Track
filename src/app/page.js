import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div >
      <Navbar />
      <div className='container mx-auto'>
        <Hero />
      </div>

    </div>
  );
}
