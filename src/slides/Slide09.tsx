function Avatar({ initial, color }: { initial: string; color: string }) {
  return (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: `${color}15`,
        border: `2px solid ${color}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px",
      }}
    >
      {/* Flat 2D silhouette icon */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

const cards = [
  {
    name: "김소영",
    role: "Data & Business Lead",
    color: "#2563EB",
    initial: "S",
    tasks: [
      "AI 오디오 유사도 판별 파이프라인(Python) 구현",
      "토큰 이코노미 & BM 캔버스 기획 설계",
    ],
    stacks: ["Python", "Librosa", "MFCC", "BM Design"],
  },
  {
    name: "김주희 · 노남경",
    role: "Blockchain & Smart Contract Dev",
    color: "#8B5CF6",
    initial: "B",
    tasks: [
      "Solidity 스마트 컨트랙트 개발",
      "IPFS 노드 연동, Web3 API 연동",
      "온체인 데이터 구조 설계 및 보안 감사",
    ],
    stacks: ["Solidity", "IPFS", "Polygon", "Ethers.js", "Hardhat"],
  },
  {
    name: "홍다빈",
    role: "Frontend & UI/UX Developer",
    color: "#10B981",
    initial: "D",
    tasks: [
      "React/Next.js 기반 DApp 마켓플레이스 UI 구축",
      "MetaMask 지갑 연결 UI/UX 구현",
    ],
    stacks: ["React", "Next.js", "MetaMask SDK", "TailwindCSS"],
  },
];

export default function Slide09() {
  return (
    <div className="slide slide-gray">
      <p className="slide-eyebrow">Team & R&R</p>
      <h2 className="slide-title">빅데이터 분석 및 블록체인 융합 역량을 갖춘 팀 구성</h2>
      <p className="slide-subtitle">AI · 블록체인 · 프론트엔드 풀스택 역량을 갖춘 팀.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {cards.map(card => (
          <div
            key={card.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 16,
              padding: "32px 28px",
              textAlign: "center",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            }}
          >
            <Avatar initial={card.initial} color={card.color} />
            <div style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{card.name}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: card.color, marginBottom: 20, letterSpacing: "0.04em" }}>
              {card.role}
            </div>
            <div style={{ width: "100%", height: 1, background: "#E5E7EB", marginBottom: 18 }} />
            <ul style={{ margin: "0 0 18px", padding: 0, listStyle: "none", textAlign: "left", display: "flex", flexDirection: "column", gap: 8 }}>
              {card.tasks.map(task => (
                <li key={task} style={{ display: "flex", gap: 8, fontSize: 13, color: "#4B5563", lineHeight: 1.55 }}>
                  <span style={{ color: card.color, flexShrink: 0 }}>•</span>{task}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {card.stacks.map(s => (
                <span
                  key={s}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: "#F3F4F6",
                    color: "#374151",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
