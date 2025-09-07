export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in stagger-1">
            <img
              src="/sania-headshot.jpeg"
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
              Finance. I'm passionate about AI/ML, web development, and building
              systems that solve real-world problems.
            </p>
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="about-description-2"
            >
              Over the past few years, I've explored everything from deploying
              autonomous AI agents and developing ML frameworks to teaching
              programming and tutoring hundreds of students. I enjoy learning
              new technologies and applying them creatively to challenging
              problems.
            </p>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              data-testid="about-description-3"
            >
              When I'm not coding, you'll find me diving into AI research,
              exploring the latest tech tools, or working on personal projects
              like predictive models and data-driven applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
