export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Software Engineering Intern",
      company: "WeekendAI",
      location: "Hong Kong",
      period: "June 2025 – August 2025",
      points: [
        "Built an autonomous research assistant using LangGraph, Python, OpenAI LLMs, and vector databases, creating multi-agent workflows for drafting and refining structured papers.",
        "Integrated Google ADK and CrewAI to automate data retrieval and structured output generation, combining AI and human-in-the-loop feedback.",
        "Designed a financial decision-support agent with Relevance AI and n8n to automate portfolio analysis and generate natural-language investment briefs."
      ],
      tech: ["LangGraph", "OpenAI", "CrewAI", "Google ADK"]
    },
    {
      title: "AI/ML Intern",
      company: "CloudMoyo",
      location: "Pune, India",
      period: "June 2024 – August 2024",
      points: [
        "Deployed a contract extraction system using PyTorch, PyTesseract, Google Cloud Vision, PyMuPDF, and Azure AI, processing 500+ contracts with a 60% efficiency boost.",
        "Used regex and SpaCy to analyze 2,500+ documents, improving risk assessment and key-term identification.",
        "Collaborated with cross-functional teams to refine OCR/NLP pipelines."
      ],
      tech: ["PyTorch", "PyTesseract", "Azure AI", "NLP"]
    },
    {
      title: "ML Research Assistant",
      company: "Dr. Surja Sharma Lab",
      location: "College Park, MD",
      period: "October 2023 – January 2024",
      points: [
        "Modeled extreme events using MATLAB, Python, and R on 200k+ records, boosting quantification accuracy by 30%.",
        "Developed an ML framework integrating spatial and temporal data for natural hazards and climate change projects, visualizing results with Tableau."
      ],
      tech: ["TensorFlow", "Scikit-learn", "MATLAB", "Pandas"]
    },
    {
      title: "Teaching Assistant",
      company: "Organization of Programming Languages – UMD",
      location: "College Park, MD",
      period: "August 2024 – Present",
      points: [
        "Guided 400+ students weekly, grading assignments and hosting office hours, strengthening understanding of OCaml, Rust, and programming language concepts."
      ],
      tech: ["OCaml", "Rust", "Git", "Bash"]
    },
    {
      title: "Computer Science Tutor",
      company: "Iribe Initiative – UMD",
      location: "College Park, MD",
      period: "January 2024 – May 2025",
      points: [
        "Tutored students in Java, C, Assembly, and algorithms, leading 267 sessions in one year.",
        "Recognized for helping students achieve consistent improvement, fostering long-term learning relationships."
      ],
      tech: ["Java", "C", "Assembly", "DSA"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16 fade-in" data-testid="experience-title">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`fade-in stagger-${index + 1} hover-lift`} data-testid={`experience-${index}`}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${index}`}>{exp.title}</h3>
                    <p className="text-lg text-primary font-medium" data-testid={`experience-company-${index}`}>{exp.company}</p>
                    <p className="text-muted-foreground" data-testid={`experience-location-${index}`}>{exp.location}</p>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0" data-testid={`experience-period-${index}`}>
                    {exp.period}
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  {exp.points.map((point, pointIndex) => (
                    <p key={pointIndex} data-testid={`experience-point-${index}-${pointIndex}`}>• {point}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tech-badge bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                      data-testid={`experience-tech-${index}-${techIndex}`}
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
