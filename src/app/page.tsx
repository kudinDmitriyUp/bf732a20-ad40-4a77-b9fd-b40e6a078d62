"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, ChefHat, Heart, Star, UtensilsCrossed, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inicio", id: "about" },
            { name: "Especialidades", id: "feature" },
            { name: "Menú", id: "product" },
            { name: "Reseñas", id: "testimonial" },
            { name: "Contacto", id: "contact" }
          ]}
          brandName="Sushi Tanaka"
          button={{
            text: "Reservar Mesa",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Auténtico Sushi Japonés en España"
          description="Descubre la exquisita tradición culinaria japonesa con ingredientes frescos y técnicas ancestrales en el corazón de España"
          tag="Tradición Japonesa"
          tagIcon={Star}
          buttons={[
            { text: "Ver Menú", href: "product" },
            { text: "Reservar", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g987e6e1ceb52ade3213d6159793ce6f22cb5de58ea34c6e72d923a4de1d1b901d6f1be81a7d20236119e118f62b5ed9400624be03d8325d1f44bdfe8a2af8e2d_1280.jpg"
          imageAlt="Plato de sushi fresco y elegante"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Nuestra Historia"
          description="En Sushi Tanaka llevamos la auténtica tradición japonesa a España. Nuestro maestro sushi, formado en Tokio, combina técnicas milenarias con los mejores ingredientes locales e importados para crear una experiencia gastronómica única que honra la cultura culinaria del Japón."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Nuestras Especialidades"
          description="Cada plato es preparado con dedicación y respeto por la tradición japonesa"
          tag="Especialidades"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Sushi Fresco Diario",
              description: "Pescado fresco seleccionado cada mañana, preparado siguiendo técnicas tradicionales japonesas",
              imageSrc: "https://pixabay.com/get/g4033de554393f6b6083de62912acd4962ec2390ff6ca27b480af9344675e48dbb54f56c6479352f633bd4f8ea86dd3dc014b9f4cbf5b633ec042ff8ab99b1c15_1280.jpg",
              imageAlt: "Chef preparando sushi fresco"
            },
            {
              id: "02",
              title: "Ingredientes Premium",
              description: "Los mejores ingredientes importados directamente de Japón y productos locales de primera calidad",
              imageSrc: "https://pixabay.com/get/gf7108bee2f8e76f0babad661a3c547e2bdb1ba68e5488f1e7fd9357e81b56166a4cd5d3fefb87c07fcc2f82902ddfbc7240ea8113e74f0bd0d21406d1de7495f_1280.jpg",
              imageAlt: "Ingredientes frescos para sushi"
            },
            {
              id: "03",
              title: "Técnica Tradicional",
              description: "Métodos de preparación auténticos transmitidos por generaciones de maestros sushi",
              imageSrc: "https://pixabay.com/get/g9c7743311be04a7d36cb9064905974c049ef367509c34da165099563dc3bbc0f0ddeb5f01beac0ad802fc331e0bc955460bae694c98bcdd1a62fb8815e7dd585_1280.jpg",
              imageAlt: "Preparación tradicional japonesa"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Nuestro Menú"
          description="Selección premium de nuestras creaciones más populares"
          tag="Menú Destacado"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Sushi Tanaka",
              name: "Nigiri Premium",
              price: "18€",
              rating: 5,
              reviewCount: "125",
              imageSrc: "https://pixabay.com/get/g5703f50e5ae9731953b0ec56398c3b969626b26b8613105268b4d7d925788cbe9ec04672c23d2f5ebf4cc9586c9d1b6646dd375c6e5731d3cc109afb790f9b04_1280.jpg",
              imageAlt: "Nigiri premium con salmón y atún"
            },
            {
              id: "2",
              brand: "Sushi Tanaka",
              name: "Sashimi Selection",
              price: "24€",
              rating: 5,
              reviewCount: "98",
              imageSrc: "https://pixabay.com/get/g42983f3170861e3c10a7326d67701ffcd0e71cd5aff95177d1010b3960edc8077f550f8695849b92c3c21a465505d6525c0bf5bba6332dad9a6f5296a00fb9b8_1280.jpg",
              imageAlt: "Selección de sashimi fresco"
            },
            {
              id: "3",
              brand: "Sushi Tanaka",
              name: "Maki Especial",
              price: "15€",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/g9a8438c907f8b32083e66a2297b2bd2d17a7374d1b5d36f05e5d91c3b64fc35c28a09c821a4ed957d5853a84481784b08d4d3439393dab9ecb3503c98e354c0d_1280.jpg",
              imageAlt: "Maki rolls especiales"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Lo Que Dicen Nuestros Clientes"
          description="Experiencias auténticas de quienes han disfrutado nuestra cocina japonesa"
          tag="Testimonios"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "María González",
              role: "Clienta Habitual",
              company: "Madrid",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gba0ed368aa105d63bf6bf5cd257e54da2aef120e0e8023cc16e4804603d7ab43d352f30a240e2ebe447f9a2c7b6f93ea0dbfcadbeebc914db9ceb28e63fd9cd8_1280.jpg",
              imageAlt: "María González"
            },
            {
              id: "2",
              name: "Carlos Ruiz",
              role: "Food Blogger",
              company: "Barcelona",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g312d2e5426ab94db77dced9ba90e7d90d103028c0073b7b7651f1f21d72172c9215e5109aa536d29381fa7498a10962f400f018799744949c2fac22e03159ea4_1280.jpg",
              imageAlt: "Carlos Ruiz"
            },
            {
              id: "3",
              name: "Ana Martín",
              role: "Chef",
              company: "Valencia",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9ec8a7dd5482ac124f6acb8ced76a58bbc590047edaffc77a3aacdda9e58866d647d694e819a0128d1358048f864644a7b53805c85f0db8b3260eb136d3919be_1280.jpg",
              imageAlt: "Ana Martín"
            },
            {
              id: "4",
              name: "Roberto Silva",
              role: "Empresario",
              company: "Sevilla",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g84ace368a15cf4eb09dbb8e91fc1c278657daac96ac3c15fc2a6e0562247335b9629dac8e4210279f302d26fa89027f3e07d52f2fe312831d49ec0a12ae3ec27_1280.jpg",
              imageAlt: "Roberto Silva"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservas"
          title="Reserva tu Mesa"
          description="Experimenta la auténtica cocina japonesa. Contáctanos para reservar tu mesa o para más información sobre nuestros servicios."
          tagIcon={Calendar}
          inputPlaceholder="Tu email"
          buttonText="Contactar"
          termsText="Te contactaremos pronto para confirmar tu reserva y atender tus consultas."
          onSubmit={(email) => console.log('Reserva solicitada:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Sushi Tanaka"
          copyrightText="© 2025 Sushi Tanaka. Tradición Japonesa en España."
          columns={[
            {
              title: "Restaurante",
              items: [
                { label: "Nuestra Historia", href: "about" },
                { label: "Especialidades", href: "feature" },
                { label: "Menú", href: "product" }
              ]
            },
            {
              title: "Servicios",
              items: [
                { label: "Reservas", href: "contact" },
                { label: "Eventos Privados", href: "contact" },
                { label: "Take Away", href: "contact" }
              ]
            },
            {
              title: "Información",
              items: [
                { label: "Horarios", href: "contact" },
                { label: "Ubicación", href: "contact" },
                { label: "Contacto", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/sushitanaka",
              ariaLabel: "Instagram de Sushi Tanaka"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/sushitanaka",
              ariaLabel: "Facebook de Sushi Tanaka"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}