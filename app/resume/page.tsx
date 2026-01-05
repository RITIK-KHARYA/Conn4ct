import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import { Button } from "@/components/ui/button";
import { Download, Edit, Link as LinkIcon, MapPin, Briefcase, GraduationCap, Code, Award } from "lucide-react";

const resumeData = {
  personal: {
    name: "Username",
    title: "Senior Software Engineer",
    email: "username@example.com",
    location: "San Francisco, CA",
    website: "https://username.dev",
    github: "@username",
    linkedin: "/in/username",
  },
  summary: "Experienced software engineer specializing in full-stack development, system architecture, and autonomous agent systems. Passionate about building scalable infrastructure and open-source contributions.",
  experience: [
    {
      company: "Tech Corp",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of autonomous social infrastructure platform. Built scalable microservices handling 10M+ daily requests.",
      achievements: [
        "Architected and deployed distributed system processing 10M+ requests daily",
        "Led team of 5 engineers in building agent-based networking platform",
        "Reduced infrastructure costs by 40% through optimization",
      ],
    },
    {
      company: "Startup Inc",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained web applications using React, Node.js, and PostgreSQL.",
      achievements: [
        "Built customer-facing dashboard with 50K+ active users",
        "Implemented real-time features using WebSockets",
        "Improved application performance by 60%",
      ],
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2016 - 2020",
      location: "San Francisco, CA",
    },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "Python", "Rust", "Go", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "FastAPI"] },
    { category: "Tools", items: ["Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis"] },
    { category: "Other", items: ["System Design", "Microservices", "CI/CD", "Agile"] },
  ],
  projects: [
    {
      name: "Conn4ct Platform",
      description: "Autonomous social infrastructure platform for professional networking",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "tRPC"],
      link: "https://conn4ct.dev",
    },
    {
      name: "Open Source Library",
      description: "Popular open-source library with 10K+ GitHub stars",
      tech: ["TypeScript", "React", "Node.js"],
      link: "https://github.com/username/library",
    },
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "Kubernetes Administrator", issuer: "CNCF", year: "2022" },
  ],
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <div className="flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen py-10 flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-x border-white/5 min-h-screen">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-8 py-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">System / Resume</h1>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-4 rounded-lg text-white/40 hover:text-white hover:bg-white/5 uppercase text-[10px] font-black tracking-widest"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  className="h-9 px-4 rounded-lg bg-white text-black hover:bg-white/90 uppercase text-[10px] font-black tracking-widest"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>

          <div className="px-8 py-12 space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">{resumeData.personal.name}</h2>
                <p className="text-lg text-white/60 font-medium">{resumeData.personal.title}</p>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest font-black text-white opacity-30">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span>{resumeData.personal.location}</span>
                </div>
                <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span>{resumeData.personal.email}</span>
                </a>
                <a href={resumeData.personal.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <LinkIcon className="h-3 w-3" />
                  <span>{resumeData.personal.website.replace(/^https?:\/\//, '')}</span>
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40">Summary</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed max-w-3xl">
                {resumeData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40 flex items-center gap-3">
                <Briefcase className="h-4 w-4" />
                Experience
              </h3>
              <div className="space-y-12">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight mb-1">{exp.role}</h4>
                        <p className="text-sm text-white/60 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest font-black text-white opacity-30">{exp.period}</p>
                        <p className="text-[9px] uppercase tracking-widest font-black text-white opacity-20 mt-1">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm font-medium">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40 flex items-center gap-3">
                <GraduationCap className="h-4 w-4" />
                Education
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-black uppercase tracking-tight">{edu.degree}</h4>
                        <p className="text-sm text-white/60 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest font-black text-white opacity-30">{edu.period}</p>
                        <p className="text-[9px] uppercase tracking-widest font-black text-white opacity-20 mt-1">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40 flex items-center gap-3">
                <Code className="h-4 w-4" />
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeData.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-tight text-white">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-bold uppercase tracking-tight text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40 flex items-center gap-3">
                <Code className="h-4 w-4" />
                Projects
              </h3>
              <div className="space-y-6">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/[0.01] border border-white/5 space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-black uppercase tracking-tight">{project.name}</h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40 flex items-center gap-3">
                <Award className="h-4 w-4" />
                Certifications
              </h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.01] border border-white/5">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight">{cert.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest font-black text-white opacity-30 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-white opacity-20">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="sticky top-0 h-screen py-10">
          <FeedSidebar />
        </div>
      </div>
    </div>
  );
}

