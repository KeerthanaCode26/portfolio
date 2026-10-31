import { motion } from "framer-motion";
import { Cloud, Code, Database, GitBranch, GitCommit, Lock, Settings, TestTube2Icon, Zap, ZoomInIcon } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend Development",
      icon: Zap,
      skills: ["React", "Angular", "Vue.js", "JavaScript", "Bootstrap", "Responsive Web Design"],
    },
    {
      title: "Backend Development",
      icon: Settings,
      skills: ["Python", "Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "RESTful APIs", "Microservices", "Pydantic", "Celery", "Async/Await", "WebSockets", "PHP"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3, Lambda, ECS, EKS, RDS, API Gateway, CloudWatch, IAM)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Gunicorn", "Uvicorn", "Nginx"],
    },
    {
      title: "Databases & ORM",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "SQLite", "SQL", "MongoDB", "Redis", "Django ORM"],
    },
    {
      title: "Authentication & Security",
      icon: Lock,
      skills: ["OAuth 2.0", "JWT", "Django Authentication", "Role-Based Access Control", "OpenAPI/Swagger"],
    },
    {
      title: "Testing & Quality",
      icon: TestTube2Icon,
      skills: ["pytest", "unittest", "Postman", "SonarQube", "Test-Driven Development (TDD)"],
    },
    {
      title: "Data & AI/LLM",
      icon: GitCommit,
      skills: ["Pandas", "NumPy", "Hugging Face", "n8n Agents", "Claude Code", "Anthropic SDK", "Prompt Engineering", "LLM Integration"],
    },
    {
      title: "Enterprise Systems & Tools",
      icon: ZoomInIcon,
      skills: ["Banner ERP", "Microsoft Power Automate", "Power Platform", "Git", "JIRA", "Confluence", "Agile", "Scrum", "SDLC"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl hover:glow-accent transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-poppins text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground 
                             rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

