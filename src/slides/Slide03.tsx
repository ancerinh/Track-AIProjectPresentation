export default function Slide03() {
  return (
    <div className="slide">
      <p className="slide-eyebrow">Differentiation & Impact</p>
      <h2 className="slide-title">저작권(Copyright)에서 '데이터 기여 증명'으로의 전환</h2>
      <p className="slide-subtitle">패러다임의 전환 — 저작권 등록 체계를 넘어, 온체인 데이터가 신뢰의 근거가 된다.</p>

      {/* Comparison table — horizontal lines only */}
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: 28 }}>
        <table className="comp-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#EFF6FF" }}>
              <th style={{ padding: "14px 24px", fontSize: 13, fontWeight: 700, color: "#2563EB", textAlign: "left", width: 120, borderBottom: "2px solid #BFDBFE" }}>구분</th>
              <th style={{ padding: "14px 24px", fontSize: 13, fontWeight: 700, color: "#6B7280", textAlign: "left", borderBottom: "2px solid #BFDBFE" }}>기존 음원 시장 (전통 Web2)</th>
              <th style={{ padding: "14px 24px", fontSize: 13, fontWeight: 700, color: "#2563EB", textAlign: "left", borderBottom: "2px solid #BFDBFE" }}>Track-AI 플랫폼 (Web3 Data Market)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                aspect: "권리 주체",
                web2: "국가 기관 저작권 등록 (AI 곡 등록 불가)",
                web3: "스마트 컨트랙트 기반 사적 계약 (상업적 이용권)",
              },
              {
                aspect: "신뢰 검증",
                web2: "중앙화 협회 서류 심사 (소요시간 방대)",
                web3: "AI 오디오 유사도 검증 + 온체인 타임스탬프 (즉시)",
              },
              {
                aspect: "수익 정산",
                web2: "분기별/월별 중앙 정산 (높은 수수료)",
                web3: "거래 체결 즉시 지분 비율별 자동 정산 (낮은 수수료)",
              },
            ].map(row => (
              <tr key={row.aspect}>
                <td style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#374151", borderBottom: "1px solid #E5E7EB" }}>{row.aspect}</td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: "#6B7280", borderBottom: "1px solid #E5E7EB" }}>
                  <span style={{ color: "#EF4444", marginRight: 8 }}>✕</span>{row.web2}
                </td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: "#111827", borderBottom: "1px solid #E5E7EB" }}>
                  <span style={{ color: "#10B981", marginRight: 8 }}>✓</span><strong>{row.web3}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Impact boxes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          {
            title: "크리에이터 측면",
            desc: "회색지대 AI 음원의 자산화 및 투명한 기여 지분 분배.",
            bg: "#F0FDF4",
            border: "#BBF7D0",
            color: "#065F46",
          },
          {
            title: "데이터 마켓 측면",
            desc: "AI 오디오 검증 데이터 노드로 신뢰도 높은 Web3 음원 생태계 조성.",
            bg: "#EFF6FF",
            border: "#BFDBFE",
            color: "#1E40AF",
          },
        ].map(box => (
          <div
            key={box.title}
            style={{
              background: box.bg,
              border: `1px solid ${box.border}`,
              borderRadius: 12,
              padding: "20px 24px",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 700, color: box.color, marginBottom: 6 }}>{box.title}</div>
            <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.65 }}>{box.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
