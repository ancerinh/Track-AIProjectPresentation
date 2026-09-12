/* Decision-tree flowchart */
function Box({ children, border = "#E5E7EB", bg = "#fff", style = {} }: {
  children: React.ReactNode; border?: string; bg?: string; style?: React.CSSProperties;
}) {
  return (
    <div style={{ border: `1px solid ${border}`, background: bg, borderRadius: 10, padding: "12px 20px", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#111827", ...style }}>
      {children}
    </div>
  );
}

function VArrow({ color = "#9CA3AF" }: { color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: 32 }}>
      <div style={{ width: 1, flex: 1, background: color }} />
      <span style={{ fontSize: 12, color, lineHeight: 1 }}>▾</span>
    </div>
  );
}

export default function Slide07() {
  return (
    <div className="slide">
      <p className="slide-eyebrow">★ AI + Blockchain Convergence ★</p>
      <h2 className="slide-title">블록체인 + AI 융합 적용 방안</h2>
      <p className="slide-subtitle">AI가 검증하고, 블록체인이 기록한다. 무결성의 자동화.</p>

      <div style={{ display: "flex", gap: 48 }}>
        {/* Left — pipeline column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Input boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", marginBottom: 0 }}>
            <Box border="#E5E7EB" style={{ textAlign: "left", padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Step 01</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>오디오 특징 추출</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>Librosa · MFCC · 템포 · 톤</div>
            </Box>
            <Box border="#E5E7EB" style={{ textAlign: "left", padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>Step 02</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>프롬프트 임베딩</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>Text Vectorization · NLP</div>
            </Box>
          </div>

          <VArrow />

          {/* Cosine similarity */}
          <Box border="#BFDBFE" bg="#EFF6FF" style={{ width: "100%", padding: "14px 20px" }}>
            <div style={{ fontSize: 11, color: "#2563EB", marginBottom: 4 }}>Step 03</div>
            <div style={{ color: "#1E40AF" }}>유사도 연산 (Cosine Similarity)</div>
            <div style={{ fontSize: 12, color: "#3B82F6", marginTop: 4 }}>온체인 등록 음원 DB와 비교 연산</div>
          </Box>

          <VArrow />

          {/* Diamond — decision */}
          <div
            style={{
              width: 200,
              height: 76,
              background: "#FEF9C3",
              border: "2px solid #F59E0B",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: 700,
              fontSize: 14,
              color: "#92400E",
              position: "relative",
            }}
          >
            유사도 85% 기준 판단
            <span
              style={{
                position: "absolute",
                top: -10,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 10,
                color: "#9CA3AF",
                fontWeight: 600,
                letterSpacing: "0.08em",
                background: "#fff",
                padding: "0 6px",
              }}
            >
              GATEKEEPER
            </span>
          </div>

          {/* Two branches */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: "100%", marginTop: 0 }}>
            {/* PASS */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ height: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 1, flex: 1, background: "#10B981" }} />
                <span style={{ fontSize: 12, color: "#10B981", lineHeight: 1 }}>▾</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", marginBottom: 8 }}>PASS (85% 미만)</div>
              <div
                style={{
                  border: "1px solid #BBF7D0",
                  background: "#F0FDF4",
                  borderRadius: 10,
                  padding: "14px 16px",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["AI 검증 서명 생성", "민팅 허용 (스마트 컨트랙트)", "IPFS & 블록체인 기록"].map((t, i) => (
                    <div key={t} style={{ display: "flex", gap: 8, fontSize: 13, color: "#065F46" }}>
                      <span style={{ color: "#10B981", fontWeight: 700 }}>{i + 1}.</span>{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAIL */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ height: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 1, flex: 1, background: "#EF4444" }} />
                <span style={{ fontSize: 12, color: "#EF4444", lineHeight: 1 }}>▾</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", marginBottom: 8 }}>FAIL (85% 이상)</div>
              <div
                style={{
                  border: "1px solid #FECACA",
                  background: "#FEF2F2",
                  borderRadius: 10,
                  padding: "14px 16px",
                  width: "100%",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: "#991B1B", marginBottom: 6 }}>표절·무단 도용 판정</div>
                <code style={{ fontSize: 12, color: "#B91C1C", display: "block", marginBottom: 8 }}>Transaction.revert()</code>
                <p style={{ fontSize: 13, color: "#6B7280", margin: 0, lineHeight: 1.6 }}>
                  온체인 트랜잭션 자동 거부로 표절 음원의 등록 및 거래를 원천 차단합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — summary card */}
        <div style={{ width: 220, flexShrink: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="ir-card-sm" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", marginBottom: 8 }}>핵심 알고리즘</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["MFCC 특징 추출", "Cosine Similarity 연산", "85% 임계값 게이트", "Cryptographic Signature"].map(item => (
                <div key={item} style={{ fontSize: 12, color: "#1E40AF", display: "flex", gap: 8 }}>
                  <span>·</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="ir-card-sm" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#065F46", marginBottom: 8 }}>적용 기술</div>
            {["Python / Librosa", "Solidity Smart Contract", "Polygon EVM"].map(item => (
              <span
                key={item}
                style={{ display: "block", fontSize: 12, color: "#047857", marginBottom: 4 }}
              >
                · {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
