import Link from "next/link";

export default function PortfolioWorks({
  title,
  skills,
  date,
}: {
  title: string;
  skills: string;
  date: string;
}) {
  return (
    <div
      key={title}
      className="border rounded-md p-6 shadow space-y-3 relative"
    >
      <div className="aspect-video bg-muted"></div>
      <h2>
        <Link href="/">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <p>{skills}</p>
      <p>{date}</p>
    </div>
  );
}
