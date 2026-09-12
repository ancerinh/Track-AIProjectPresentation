import { useState } from "react";
import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";

const SLIDES = [
  { id: "01", label: "개요", component: Slide01 },
  { id: "02", label: "문제 정의", component: Slide02 },
  { id: "03", label: "차별성", component: Slide03 },
  { id: "04", label: "서비스 개요", component: Slide04 },
  { id: "05", label: "비즈니스 모델", component: Slide05 },
  { id: "06", label: "핵심 기술", component: Slide06 },
  { id: "07", label: "AI+블록체인", component: Slide07 },
  { id: "08", label: "로드맵", component: Slide08 },
  { id: "09", label: "팀 구성", component: Slide09 },
  { id: "10", label: "레퍼런스", component: Slide10 },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const SlideComponent = SLIDES[current].component;

  return (
    <div style={{ minHeight: "100vh", background: "#F1F3F5", display: "flex", flexDirection: "column" }}>
      {/* Top nav */}
      <nav className="top-nav">
        <span className="brand-label">TRACK-AI</span>
        <div style={{ display: "flex", gap: 3, overflowX: "auto", flex: 1 }}>
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`nav-tab${i === current ? " active" : ""}`}
            >
              {s.id} {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Slide area */}
      <main style={{ flex: 1, overflow: "auto", padding: "28px 40px 80px" }}>
        <SlideComponent />
      </main>

      {/* Bottom nav */}
      <div className="bottom-nav">
        <button className="nav-btn" disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>‹</button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {SLIDES.map((_, i) => (
            <div key={i} className={`dot${i === current ? " active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
        <button className="nav-btn" disabled={current === SLIDES.length - 1} onClick={() => setCurrent(c => c + 1)}>›</button>
        <span style={{ fontSize: 12, color: "#9CA3AF", fontFamily: "Inter, sans-serif", marginLeft: 4 }}>
          {current + 1} / {SLIDES.length}
        </span>
      </div>
    </div>
  );
}
