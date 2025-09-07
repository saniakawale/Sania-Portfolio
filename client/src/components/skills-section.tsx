import { Brain, Code, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "LangGraph", "CrewAI"]
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "Rust"]
    },
    {
      icon: Database,
      title: "Data & Tools",
      skills: ["Pandas", "NumPy", "Docker", "Git", "Azure AI", "React"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16 fade-in" data-testid="skills-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`fade-in stagger-${index + 1}`} data-testid={`skill-category-${index}`}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover-lift">
                <category.icon className="w-10 h-10 text-primary mb-4 mx-auto" data-testid={`skill-icon-${index}`} />
                <h3 className="text-xl font-semibold text-foreground mb-6" data-testid={`skill-category-title-${index}`}>{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="tech-badge bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm inline-block m-1"
                      data-testid={`skill-${index}-${skillIndex}`}
                    >
                      {skill}
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
