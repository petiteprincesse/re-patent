import Header from "./components/Header/Header";
import PatentsSection from "./components/PatentsSection";
import CriteriaSection from "./components/CriteriaSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import AuthorsSection from "./components/AuthorsSection";
import EffectSection from "./components/EffectSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("effect");
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(curr) => setTab(curr)} />
        {tab === "main" && (
          <>
            <PatentsSection />
            <CriteriaSection />
          </>
        )}
        {tab === "authors" && (
          <>
            <AuthorsSection />
          </>
        )}
        {tab === "effect" && (
          <>
            <EffectSection />
          </>
        )}
      </main>
    </>
  );
}
