import About from '@/components/ui/HomeScreen/About';
import Hero from '@/components/ui/HomeScreen/Hero';
import Work from '@/components/ui/HomeScreen/Work';
import Services from '@/components/ui/Services/Services';

export default function Home() {
  return (
    <main>
      {' '}
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
