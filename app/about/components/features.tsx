import Section from "@/components/section";
import Link from "next/link";

export default function Features() {
  return (
    <Section title="サービスの特徴" subTitle="素敵なサービスたくさん">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-md p-6 shadow space-y-3 relative">
          <div className="aspect-video bg-muted"></div>
          <h2>
            タイトル<Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>タグA</button>
        </div>
      </div>
    </Section>
  );
}
