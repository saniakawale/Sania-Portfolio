import { TrendingUp, Shield } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: TrendingUp,
      title: "Temperature Prediction System",
      description: "Built an ARIMA-based model predicting U.S. temperature trends, cleaning and manipulating historical data with automated feature engineering.",
      points: [
        "Built an ARIMA-based model predicting U.S. temperature trends, cleaning and manipulating historical data with Pandas and NumPy.",
        "Created interactive visualizations showing seasonal patterns.",
        "Automated feature engineering and cross-validation, improving prediction accuracy by 25%."
      ],
      tech: ["Python", "Pandas", "Statsmodels", "Matplotlib"]
    },
    {
      icon: Shield,
      title: "Food Allergy Checker Application",
      description: "Developed a CLI app to check allergens in real-time from OpenFoodFacts with robust error handling and CI/CD integration.",
      points: [
        "Developed a CLI app to check allergens in real-time from OpenFoodFacts.",
        "Applied OOP principles, string matching, and error handling for a robust user experience.",
        "Integrated CI/CD with Git, Docker, and Jenkins for smooth development and deployment."
      ],
      tech: ["Python", "BeautifulSoup4", "Docker", "Jenkins"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted" data-testid="projects-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16 fade-in" data-testid="projects-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`fade-in stagger-${index + 1} hover-lift`} data-testid={`project-${index}`}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <project.icon className="w-8 h-8 text-primary mb-4" data-testid={`project-icon-${index}`} />
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>{project.description}</p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  {project.points.map((point, pointIndex) => (
                    <p key={pointIndex} data-testid={`project-point-${index}-${pointIndex}`}>• {point}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tech-badge bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
