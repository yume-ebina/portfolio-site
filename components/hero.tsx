import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-24 border-b flex items-center md:py-52">
      <div className="container">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo image" width={120} height={120} />
          <div className="ml-3">
            <h1 className="font-bold text-4xl mb-5 md:text-6xl">Yume Ebina</h1>
            <p className="text-muted-foreground">web application engineer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
