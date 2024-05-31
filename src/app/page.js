import Hero from "./_components/Hero";
import Trends from "./_components/Trends";
import Movies from "./_components/Movies";
import Banner from "./_components/Banner";
import Series from "./_components/Series";
import Plans from "./_components/Plans";
import Collections from "./_components/Collections";
import Charactors from "./_components/Charactors";
import KidsSection from "./_components/KidsSection";
import Questions from "./_components/Questions";
import Studios from "./_components/Studios";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Trends/>
      <Movies/>
      <Banner/>
      <Series/>
      <Plans/>
      <Collections/>
      <Charactors/>
      <KidsSection/>
      <Questions/>
      <Studios/>
    </main>
  );
}
