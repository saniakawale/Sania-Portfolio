export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in stagger-1">
            <img
              src="/portfolio_headshot.jpg"
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
              I'm a Master of Computer Science student at the University of
              Illinois Urbana-Champaign, having completed my B.S. in Computer
              Science with a minor in Computational Finance at the University
              of Maryland, College Park. I work on machine learning, NLP, and
              intelligent systems that solve real-world problems.
            </p>
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="about-description-2"
            >
              I've built financial forecasting pipelines on foundation models,
              deployed multi-agent AI workflows, and developed contract
              extraction systems processing 500+ documents with NLP. I enjoy
              pushing the boundaries of what's possible with data and models.
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
