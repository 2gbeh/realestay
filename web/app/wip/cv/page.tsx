const data: string[] = [
  "React",
  "TypeScript",
  "RTK Query",
  "Next.js",
  "React Native",
  "Expo",
  "zod",
  "Node.js",
  "Express",
  "NestJS",
  "Kotlin",
  //
  "PHP",
  "Laravel",
  //
  "jQuery",
  "Bootstrap",
  "TailwindCSS",
  "Material UI",
  "Framer Motion",
  "Figma",
  "Adobe XD",
  //
  "Prisma",
  "PostgresSQL",
  "GraphQL",
  "Git",
  "Firebase",
  "Google Analytics",
  "Redis",
  "Digital Ocean",
  "AWS (S3, Amplify)",
  "NGINX",
  //
  "Stripe",
];

export default function Skills() {
  return (
    <main className="h-screen flex justify-center items-center p-5 bg-white">
      <ol className="flex gap-2 flex-wrap max-w-[500]">
        {data.map((item, i) => (
          <li
            key={i}
            className="border border-[#ddd] text-[#e46c0a] font-semibold px-2 py-0.5 rounded whitespace-nowrap text-[11px]"
          >
            {/* {i+1}.  */}
            {item}
          </li>
        ))}
        <li>{data.map((item) => item + " | ")}</li>
      </ol>
    </main>
  );
}
