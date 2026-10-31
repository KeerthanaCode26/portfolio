import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Utah Valley University",
      location: "Orem, Utah",
      role: "Full Stack Developer",
      period: "Jan 2025 – Present",
      highlights: [
        "Designed, developed, and maintained enterprise backend services using Python, Django, and FastAPI, building secure RESTful APIs and microservices that power university-wide student, registration, and administrative platforms serving 40,000+ users.",
        "Integrated and extended Ellucian Banner ERP modules by developing Python-based REST API integrations and scheduled data-synchronization jobs between Banner and downstream services, automating student records, enrollment, and registration workflows and reducing manual data entry across departments.",
        "Modernized more than two applications from PHP to Python and enhanced 50+ features to PHP applications.",
        "Built asynchronous task pipelines with Celery and Redis to process high-volume, long-running jobs in the background, improving application responsiveness and reliability during peak enrollment periods.",
        "Designed and optimized data models and queries using Django ORM against PostgreSQL (SQL) and MongoDB, refining indexing and query performance to reduce average API response times by roughly 35%.",
        "Implemented request/response validation and typed schemas with Pydantic in FastAPI services, improving data integrity and reducing runtime errors.",
        "Developed agents using Anthropic SDI to complete more than 10+ WCAG standard which helped reduce manual work by 80%.",
        "Deployed and scaled containerized services on AWS using Amazon EKS (Kubernetes) and Docker, leveraging S3 for object storage, RDS for managed PostgreSQL, Lambda for event-driven tasks, API Gateway, and CloudWatch for monitoring and alerting, enabling automated, zero-downtime rolling releases.",
        "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate builds, testing, and deployments to AWS, increasing release frequency and lowering the risk of production issues.",
        "Developed responsive, accessible front-end interfaces in JavaScript and React that consume secured REST APIs protected with OAuth 2.0 and JWT authentication and role-based access control, and validated quality with pytest in an Agile/Scrum workflow.",
      ],
    },
    {
      company: "University of North Texas",
      location: "Denton, Texas",
      role: "Software Engineering Assistant",
      period: "Aug 2023 – May 2024",
      highlights: [
        "Developed, maintained, and deployed Python and Django backend components and RESTful APIs using Django REST Framework on AWS (EC2, S3, RDS), supporting academic and engineering web applications used by students and faculty.",
        "Designed data-access layers with Django ORM over SQL databases and created reusable, well-documented services that were adopted across multiple internal tools, reducing duplicated code.",
        "Implemented interactive front-end features in JavaScript and React, improving the usability, responsiveness, and accessibility of student-facing applications.",
        "Consumed and integrated REST APIs to connect front-end interfaces with backend services, ensuring consistent and reliable data flow across systems.",
        "Wrote unit and integration tests with pytest and debugged production issues, increasing code coverage and reducing defects.",
        "Worked closely with senior engineers and faculty stakeholders in an Agile workflow, translating requirements into technical tasks and delivering features on schedule.",
      ],
    },
    {
      company: "Accenture Solutions Pvt. Ltd",
      location: "Hyderabad, India",
      role: "Software Engineer",
      period: "Sep 2021 – Aug 2022",
      highlights: [
        "Designed, built, and deployed Python microservices and RESTful APIs using FastAPI and Django REST Framework for enterprise clients, following Agile/Scrum delivery practices.",
        "Automated business workflows, approvals, and reporting using Microsoft Power Automate and the Power Platform, eliminating manual processing and saving an estimated 20+ hours per week across teams.",
        "Developed asynchronous processing and scheduled tasks with Celery to handle high-volume data workloads reliably between distributed services.",
        "Implemented persistence and data-access layers with Django ORM over SQL databases, optimizing queries and transactions to improve application performance.",
        "Containerized applications using Docker and deployed them to AWS (ECS/EKS) with RDS and S3, standardizing environments and enabling consistent, repeatable deployments across development, testing, and production.",
        "Automated AWS infrastructure provisioning with Terraform (Infrastructure as Code), standardizing environment setup and reducing at least 50% configuration drift across development, testing, and production.",
        "Contributed to CI/CD pipelines and participated in peer code reviews, improving release frequency, code quality, and overall delivery velocity.",
        "Wrote unit and integration tests with pytest and collaborated with QA to ensure functional, reliable releases that met client requirements.",
      ],
    },
    {
      company: "CME Group",
      location: "Bangalore, India",
      role: "Software Engineering Associate",
      period: "Aug 2020 – Aug 2021",
      highlights: [
        "Developed and enhanced Python backend modules and REST APIs supporting high-volume financial trading and clearing systems with strict reliability requirements.",
        "Wrote and optimized complex SQL queries and used Django ORM to support more than 2 teams of reporting, data reconciliation, and analytics across large financial datasets.",
        "Built data-processing and automation scripts in Python using Pandas and NumPy, leveraging AWS (S3, Lambda) to transform, clean, and validate large datasets.",
        "Developed front-end components in JavaScript and React to surface real-time trading and reference data to internal business users.",
        "Authored unit tests with pytest and participated in Agile ceremonies, code reviews, and defect triage to ensure reliable, well-tested releases.",
        "Collaborated with senior engineers and business analysts to translate functional requirements into technical designs and production-ready code.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary rounded-full left-6 md:left-auto ${index % 2 === 0 ? "md:right-[-9px]" : "md:left-[-9px]"
                  }`}
              ></div>

              <div className="glass p-6 rounded-2xl ml-16 md:ml-0 hover:glow-accent transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Briefcase size={20} />
                  <h3 className="text-xl font-poppins">{exp.company}</h3>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">{exp.role}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>{exp.period} • {exp.location}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

