const refs = [
  { n: "[01]", title: "문화체육관광부 (2023)", sub: "생성형 AI 저작권 활용 가이드라인" },
  { n: "[02]", title: "Librosa Development Team", sub: "Audio and Music Signal Analysis in Python (MFCC Feature Extraction)" },
  { n: "[03]", title: "Ethereum Foundation", sub: "ERC-1155 Multi-Token Standard & IPFS Metadata Structuring" },
  { n: "[04]", title: "학술 논문", sub: "인공지능(AI) 생성물의 저작권 침해 판단기준의 한계와 개선과제 - AI 오디오 생성물을 중심으로" },
];

export default function Slide10() {
  return (
    <div className="slide">
      <p className="slide-eyebrow">References & Proof</p>
      <h2 className="slide-title">개발증빙 및 레퍼런스</h2>
      <p className="slide-subtitle" style={{ marginBottom: 32 }}>기술적 실현 가능성 증빙 및 학술·법적 참고 자료.</p>

      {/* Top half — Dev proof */}
      <div style={{ border: "1px solid #E5E7EB", borderRadius: 12, padding: "24px 28px", marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          개발 증빙 (Development Proof)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ background: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 6 }}>GitHub 오픈소스 리포지토리 구성</div>
            <p style={{ fontSize: 13, color: "#4B5563", margin: 0, lineHeight: 1.6 }}>
              스마트 컨트랙트 모듈, AI 오디오 판별 파이프라인 스크립트 준비
            </p>
          </div>
          <div style={{ background: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 6 }}>테스트넷 트랜잭션 실행 결과</div>
            <p style={{ fontSize: 13, color: "#4B5563", margin: 0, lineHeight: 1.6 }}>
              Polygon Amoy 등 테스트넷 스마트 컨트랙트 트랜잭션 결과 및 IPFS 해시 데이터 제출 예정
            </p>
          </div>
        </div>

        {/* Arch summary */}
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 8 }}>
          {[["AI Engine","Python / Librosa"],["Storage","IPFS (Pinata)"],["Chain","Polygon Amoy"],["Contract","Solidity 0.8.x"],["Frontend","Next.js / React"],["Wallet","MetaMask / Wagmi"]].map(([k,v]) => (
            <div key={k} style={{ border: "1px solid #E5E7EB", borderRadius: 8, padding: "10px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "#9CA3AF", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 11, color: "#374151", fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom half — References */}
      <div style={{ border: "1px solid #E5E7EB", borderRadius: 12, padding: "24px 28px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", marginBottom: 16 }}>참고 문헌 (References)</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {refs.map(r => (
            <div key={r.n} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "Inter, monospace", fontSize: 13, fontWeight: 700, color: "#9CA3AF", flexShrink: 0, minWidth: 36 }}>
                {r.n}
              </span>
              <div>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{r.title}</span>
                <span style={{ fontSize: 14, color: "#4B5563" }}>. {r.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
