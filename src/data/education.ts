export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  shortName: string;
  period: string;
  cgpa: string;
  location: string;
  description: string;
  courses: string[];
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "mbstu-ict",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Information and Communication Technology (ICT)",
    institution: "Mawlana Bhashani Science and Technology University",
    shortName: "MBSTU",
    period: "2019 – 2024",
    cgpa: "3.50 / 4.00",
    location: "Tangail, Bangladesh",
    description:
      "Comprehensive 4-year engineering curriculum focused on computer science fundamentals, software engineering, algorithms, database systems, networks, and advanced web technologies.",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Software Engineering & SDLC",
      "Web Engineering & Cloud Systems",
      "Computer Networks & Security",
      "Operating Systems & Systems Programming",
      "Artificial Intelligence & Machine Learning",
    ],
    highlights: [
      "Graduated with CGPA 3.50 out of 4.00",
      "Active participant in competitive programming club and technical workshops",
      "Completed undergraduate thesis project on web system architecture & automation",
    ],
  },
];
