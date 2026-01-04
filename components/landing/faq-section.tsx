"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is Conn4ct different from LinkedIn?",
    answer: "Conn4ct uses autonomous AI to not just visualize your network, but to actively build, optimize, and maintain it. It integrates directly with your existing social presence and generates verified connections."
  },
  {
    question: "Does Conn4ct store my raw data?",
    answer: "No. Conn4ct never stores or accesses your raw personal data. It operates on relationship metadata and public context, ensuring your privacy stays within your control."
  },
  {
    question: "Is Conn4ct compliant with security standards?",
    answer: "Yes. Conn4ct follows enterprise-grade security practices, including SOC 2, GDPR, RBAC, and audit logging. We ensure secure data handling and full compliance."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple. Just click 'Join Waitlist', and our team will walk you through setup, integrations, and show you how to automate your first pipelines in minutes."
  }
];

export function FAQSection() {
  return (
    <section className="py-40">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-16 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="tech-card border-white/5 bg-white/[0.01] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 tracking-tight">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

