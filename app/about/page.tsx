import { Metadata } from "next";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "蝦名結芽のポートフォリオサイトです",
};
export default function About() {
  return (
    <div id="about" className="container">
      <Section title="ABOUT" subTitle="私について">
        <div className="text-center">
          <ul className=" space-y-5 inline-block text-start">
            <li>- 神奈川出身</li>
            <li>- 横浜市立桜丘高等学校卒</li>
            <li>- 日本大学 生物資源科学部 食品生命学科(現：食品開発学科)卒</li>
            <li>- 日清食品株式会社 関西工場にて生産管理に従事</li>
            <li>- 現在Webデザイン会社にて業務委託契約中</li>
            <li>- SAMURAI ENGINEERに通い、WEBエンジニアとして転職活動中</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
