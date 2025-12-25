import Hero from '@/components/Hero';
import ServiceOfferings from '@/components/ServiceOfferings';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceOfferings />
      <WhatsAppCTA />
    </main>
  );
}
