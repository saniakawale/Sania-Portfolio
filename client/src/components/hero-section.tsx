export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-background" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 tracking-tight" data-testid="hero-title">
            Hi, I'm Sania Kawale
          </h1>
          <p className="text-lg md:text-xl text-primary mb-6 font-medium" data-testid="hero-subtitle">
            Computer Science student at University of Maryland | AI/ML Enthusiast | Full-Stack Developer
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-tagline">
            I build intelligent systems, craft interactive web applications, and love turning complex problems into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('experience')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all hover-lift"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-all hover-lift"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
