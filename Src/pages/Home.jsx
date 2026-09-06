import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const heroImage = '/images/hero-wash.jpg';

const services = [
  { title: 'Basic Wash', tag: 'Quick Clean', description: 'A fast, thorough exterior clean for your everyday drive.', price: '$25', image: '/images/foam-wash.jpg' },
  { title: 'Deluxe Wash', tag: 'Most Popular', description: 'Exterior wash, wheel care, tire shine, and interior vacuum.', price: '$45', image: '/images/hero-wash.jpg' },
  { title: 'Interior Cleaning', tag: 'Inside Care', description: 'Refresh every surface with careful vacuuming and detailing.', price: '$60', image: '/images/interior-cleaning.jpg' },
  { title: 'Full Detailing', tag: 'Complete Care', description: 'A complete inside-and-out transformation for your vehicle.', price: '$120', image: '/images/detailing-shop.jpg' },
  { title: 'Wax & Protection', tag: 'Long-Lasting', description: 'Long-lasting gloss and protection against the elements.', price: '$80', image: '/images/paint-polishing.jpg' },
];

const galleryImages = [
  { src: '/images/interior-before-after.avif', alt: 'Interior cleaning before and after' },
  { src: '/images/hood-before-after.jpg', alt: 'Paint correction before and after' },
  { src: '/images/interior-detailing.jpg', alt: 'Professional interior detailing' },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection heroImage={heroImage} />
      <ServicesSection services={services} />
      <GallerySection images={galleryImages} />
      <WhyChooseUs />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}