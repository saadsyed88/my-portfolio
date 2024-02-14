import About from '@/components/ui/HomeScreen/About';
import Hero from '@/components/ui/HomeScreen/Hero';
import Services from '@/components/ui/Services/Services';

export default function Home() {
  return (
    <main>
      {' '}
      <Hero />
      <About />
      <Services />
    </main>
  );
}
