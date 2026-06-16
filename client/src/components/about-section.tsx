export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in stagger-1">
            <img
              src="/495A5325.jpg"
              alt="Sania Kawale's professional headshot"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto hover-lift"
              data-testid="profile-image"
            />
          </div>
          <div className="fade-in stagger-2">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="about-title"
            >
              About Me
            </h2>
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="about-description-1"
            >
              I'm a Computer Science student at the University of Maryland,
              College Park, pursuing a B.S. in CS with a minor in Computational
              Finance. I'm passionate about machine learning, NLP, and building
              intelligent systems that solve real-world problems.
            </p>
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="about-description-2"
            >
              I've built contract extraction pipelines processing 500+ documents
              with NLP, deployed multi-agent AI workflows, and developed ML
              frameworks for climate research. I enjoy pushing the boundaries of
              what's possible with data and models.
            </p>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              data-testid="about-description-3"
            >
              When I'm not training models, you'll find me writing about AI agent
              frameworks, exploring the latest research papers, or working on
              predictive modeling and data-driven applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
