const techStack = [
  { cat: "Blockchain", items: ["Polygon / EVM Compatible Mainnet", "Solidity"] },
  { cat: "Storage", items: ["IPFS (InterPlanetary File System)"] },
  { cat: "Web3 SDK", items: ["Ethers.js", "Wagmi", "MetaMask SDK"] },
  { cat: "AI / ML", items: ["Python / Librosa", "MFCC Analysis"] },
  { cat: "Frontend", items: ["React / Next.js", "TailwindCSS"] },
];

export default function Slide06() {
  return (
    <div className="slide" style={{ padding: 0, display: "grid", gridTemplateColumns: "35% 65%", minHeight: 540 }}>
      {/* Left — gray bg, tech stack */}
      <div style={{ background: "#F8F9FA", borderRadius: "16px 0 0 16px", padding: "52px 40px" }}>
        <p className="slide-eyebrow">Core Tech</p>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 28px", lineHeight: 1.3 }}>핵심 기술 스택</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {techStack.map(stack => (
            <div key={stack.cat}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{stack.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {stack.items.map(item => (
                  <span key={item} className="pill" style={{ fontSize: 12 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — white bg, architecture */}
      <div style={{ background: "#FFFFFF", borderRadius: "0 16px 16px 0", padding: "52px 52px 52px 44px" }}>
        <p className="slide-eyebrow">Blockchain Architecture</p>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 28px", lineHeight: 1.3 }}>
          IPFS 분산 저장 및 스마트 컨트랙트 아키텍처
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Off-chain */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 10 }}>OFF-CHAIN LAYER</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["WAV / MP3 오디오 파일", "프롬프트 & DAW 로그"].map(item => (
                <div key={item} style={{ border: "1px solid #E5E7EB", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#374151", fontWeight: 500 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
            <span style={{ fontSize: 12, color: "#2563EB", padding: "4px 14px", border: "1px solid #BFDBFE", borderRadius: 100, background: "#EFF6FF", fontWeight: 600, whiteSpace: "nowrap" }}>
              IPFS 업로드 → CID 생성
            </span>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
          </div>

          {/* IPFS */}
          <div style={{ border: "1px solid #E5E7EB", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>IPFS 분산 파일 저장 네트워크</div>
              <code style={{ fontSize: 11, color: "#6B7280" }}>CID: Qm7Nf9k2X…</code>
            </div>
            <span className="pill" style={{ fontSize: 11, padding: "3px 10px" }}>가스비 최적화</span>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
            <span style={{ fontSize: 12, color: "#2563EB", padding: "4px 14px", border: "1px solid #BFDBFE", borderRadius: 100, background: "#EFF6FF", fontWeight: 600, whiteSpace: "nowrap" }}>
              CID → 온체인 기록
            </span>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
          </div>

          {/* On-chain */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 10 }}>ON-CHAIN LAYER (Polygon EVM)</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {[
                ["IPFS CID", "콘텐츠 식별자"],
                ["기여도 비율", "프롬프트 60% / 믹싱 40%"],
                ["라이선스 토큰", "ERC-1155 NFT 발행"],
              ].map(([k, v]) => (
                <div key={k} style={{ border: "1px solid #BFDBFE", borderRadius: 10, padding: "12px 14px", background: "#EFF6FF" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 12, color: "#4B5563" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
