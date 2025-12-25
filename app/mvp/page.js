import Hero from '@/components/Hero';
import ServiceOfferings from '@/components/ServiceOfferings';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import ForgeProcess from '@/components/Steps'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceOfferings />
      <ForgeProcess/>
      <WhatsAppCTA />
    </main>
  );
}
