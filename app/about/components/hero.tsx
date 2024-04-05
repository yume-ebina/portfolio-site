import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 border-b flex items-center">
      <div className="container">
        <h1 className="font-bold text-4xl mb-5 md:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          laudantium.
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
