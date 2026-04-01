import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSkills } from "@/components/EducationSkills";
import { Footer } from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jeswin-3-d-scroll-portfolio.vercel.app";

// JSON-LD Structured Data — Person & ProfilePage
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jeswin Thomas Jestin",
      jobTitle: "Product Associate",
      description:
        "PM Intern Candidate with an Electronics and Computer Engineering background. Shipped two products across EdTech and FinTech startups. Scaled organic impressions from 5K to 16K+ monthly. Currently enrolled in Product Space AI PM Fellowship.",
      email: "jeswinjestin203@gmail.com",
      url: siteUrl,
      image: `${siteUrl}/images/about-thumbnail.png`,
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "St. Joseph's College of Engineering and Technology, Palai",
          description: "B.Tech in Electronics and Computer Engineering; Minor in Robotics and Automation",
        },
      ],
      knowsAbout: [
        "Product Management",
        "EdTech",
        "FinTech",
        "AI Products",
        "User Experience Design",
        "React",
        "Next.js",
        "Spline 3D",
      ],
      sameAs: [
        "https://www.linkedin.com/in/jeswinjestin",
        "https://github.com/jeswinjestin",
        "https://www.behance.net/jeswinjestin",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": siteUrl,
      url: siteUrl,
      name: "Jeswin Thomas Jestin — Product Associate Portfolio",
      description:
        "Portfolio of Jeswin Thomas Jestin, a Product Associate and PM Intern Candidate with hands-on experience shipping EdTech and FinTech products.",
      about: { "@id": `${siteUrl}/#person` },
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white antialiased">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <ScrollyCanvas />
      
      <SectionDivider label="About" />
      <AboutSection />
      
      <SectionDivider label="Experience" />
      <ExperienceTimeline />
      
      <SectionDivider label="Selected Work" />
      <Projects />
      
      <SectionDivider label="Education & Skills" />
      <EducationSkills />

      <Footer />
    </main>
  );
}

