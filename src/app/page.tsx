import Header from "@/components/header/Header";
import Stages from "@/components/stages/Stages";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main m-auto">
        <Stages />
      </main>
    </>
  );
}
