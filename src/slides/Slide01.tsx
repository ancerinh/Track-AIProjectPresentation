export default function Slide01() {
  return (
    <div className="slide" style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: 0, minHeight: 560 }}>
      {/* Left — Text */}
      <div style={{ paddingRight: 56, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="accent-line" />
        <p style={{ fontSize: 14, fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em", marginBottom: 14 }}>
          [TRACK 2] 블록체인 + 데이터 마켓플레이스
        </p>
        <h1 className="slide-title" style={{ fontSize: 46, marginBottom: 20 }}>
          Track-AI
          <br />
          <span style={{ fontSize: 28, fontWeight: 500, color: "#4B5563", letterSpacing: 0 }}>트랙에이아이</span>
        </h1>
        <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.7, marginBottom: 36 }}>
          법적 사각지대를 넘어서는 Web3 기반 AI 음원 창작 기여도 증명 및 라이선스 데이터 마켓플레이스
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { tag: "PROOF", text: "창작 이력 온체인 기록: 프롬프트 및 DAW 수정 로그 해시화 저장" },
            { tag: "AI CHECK", text: "AI 표절·유사도 검증 Engine: MFCC 오디오 특징 기반 무단 도용 사전 차단" },
            { tag: "TRADE", text: "스마트 컨트랙트 정산: 사적 계약을 통한 상업적 이용권 거래 및 자동 분배" },
          ].map(item => (
            <div key={item.tag} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ color: "#10B981", fontSize: 18, flexShrink: 0, marginTop: 1 }}>✓</span>
              <div>
                <span style={{ fontWeight: 700, color: "#2563EB", fontSize: 13 }}>[{item.tag}]</span>{" "}
                <span style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.6 }}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Node diagram */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F9FA",
          borderRadius: "0 16px 16px 0",
          margin: "-56px -72px -56px 0",
          padding: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {[
            { label: "AI 음원\n생성", sub: "Suno / Udio" },
            { label: "AI 유사도\n검증", sub: "MFCC Engine" },
            { label: "스마트 컨트랙트\n라이선스 발급", sub: "Polygon EVM" },
          ].map((node, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    border: "2px solid #BFDBFE",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                  }}
                >
                  <span style={{ fontSize: 22 }}>
                    {i === 0 ? "🎵" : i === 1 ? "🔍" : "📄"}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#111827",
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    lineHeight: 1.4,
                    marginBottom: 4,
                  }}
                >
                  {node.label}
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>{node.sub}</div>
              </div>
              {i < 2 && (
                <div style={{ display: "flex", alignItems: "center", margin: "0 8px", paddingBottom: 28 }}>
                  <div style={{ width: 32, height: 1, background: "#D1D5DB" }} />
                  <span style={{ color: "#9CA3AF", fontSize: 14 }}>›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
