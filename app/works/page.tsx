import Section from "@/components/section";
import PortfolioWorks from "./components/portfolioWorks";

const cardItems = [
  { title: "Todoアプリ", skills: "Ruby on Rails", date: "2023年12月" },
  { title: "レストラン情報アプリ", skills: "Ruby on Rails", date: "2024年4月" },
  { title: "予約アプリ", skills: "React", date: "2024年6月" },
];

export default function Works() {
  return (
    <div id="works">
      <Section title="WORKS" subTitle="制作物一覧">
        <div className="grid md:grid-cols-3 gap-8">
          {cardItems.map((item) => (
            <PortfolioWorks
              key={item.title}
              title={item.title}
              skills={item.skills}
              date={item.date}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
