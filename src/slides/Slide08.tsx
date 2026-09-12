const milestones = [
  { phase: "사전 준비", period: "9월 중순 ~ 9월 말", tasks: "시스템 아키텍처 설계 및 오디오 AI 유사도 검증 알고리즘 구축 (Python)", output: "프로젝트 기획서 & 아키텍처 명세서", progress: 85, color: "#6366F1" },
  { phase: "멘토링 1~2주", period: "10월 1주 ~ 2주", tasks: "Solidity 기반 라이선스 거래 및 지분 수익 분배 스마트 컨트랙트 작성", output: "스마트 컨트랙트 소스코드 (GitHub)", progress: 60, color: "#8B5CF6" },
  { phase: "멘토링 3~4주", period: "10월 3주 ~ 4주", tasks: "Librosa 기반 MFCC 오디오 유사도 판별 AI API 엔진 구축 및 IPFS 연동 테스트", output: "AI 표절 검증 파이프라인 모듈", progress: 40, color: "#2563EB" },
  { phase: "멘토링 5~6주", period: "10월 5주 ~ 11월 1주", tasks: "Web3 지갑 연동(MetaMask) 및 마켓플레이스 DApp 프론트엔드 UI/UX 완성", output: "알파 버전 DApp 포털", progress: 20, color: "#F59E0B" },
  { phase: "해커톤 본선", period: "11월 6일 ~ 7일", tasks: "AI 검증 → 온체인 기록 → 마켓 거래/정산 End-to-End 시연 테스트", output: "시연 가능한 최종 MVP 구현", progress: 0, color: "#EF4444", highlight: true },
];

export default function Slide08() {
  return (
    <div className="slide">
      <p className="slide-eyebrow">Development Roadmap</p>
      <h2 className="slide-title">7주 멘토링 마일스톤 및 본선 최종 구현 목표</h2>
      <p className="slide-subtitle">해커톤 본선까지 완결된 End-to-End 시연을 목표로 합니다.</p>

      {/* Table */}
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB", marginBottom: 20 }}>
        <table className="ir-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["구분", "기간", "개발 세부 과제 및 일정", "핵심 산출물", "진행도"].map((h, i) => (
                <th
                  key={h}
                  style={{
                    background: "#2563EB",
                    color: "#fff",
                    padding: "13px 18px",
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: "left",
                    width: i === 0 ? 110 : i === 1 ? 140 : i === 4 ? 120 : undefined,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {milestones.map((m, i) => (
              <tr key={m.phase} style={{ background: m.highlight ? "#FFF7F7" : "#fff" }}>
                <td style={{ padding: "14px 18px", borderBottom: i < milestones.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <span style={{ fontWeight: 700, color: m.color, fontSize: 13 }}>{m.phase}</span>
                </td>
                <td style={{ padding: "14px 18px", fontSize: 12, color: "#6B7280", borderBottom: i < milestones.length - 1 ? "1px solid #E5E7EB" : "none" }}>{m.period}</td>
                <td style={{ padding: "14px 18px", fontSize: 13, color: "#4B5563", lineHeight: 1.55, borderBottom: i < milestones.length - 1 ? "1px solid #E5E7EB" : "none" }}>{m.tasks}</td>
                <td style={{ padding: "14px 18px", fontSize: 13, color: "#374151", fontWeight: 600, borderBottom: i < milestones.length - 1 ? "1px solid #E5E7EB" : "none" }}>{m.output}</td>
                <td style={{ padding: "14px 18px", borderBottom: i < milestones.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="prog-track" style={{ flex: 1 }}>
                      <div className="prog-fill" style={{ width: `${m.progress}%`, background: m.progress > 0 ? m.color : "transparent" }} />
                    </div>
                    <span style={{ fontSize: 11, color: m.progress > 0 ? m.color : "#D1D5DB", fontWeight: 700, minWidth: 28 }}>{m.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Green banner */}
      <div
        style={{
          background: "#F0FDF4",
          border: "1px solid #BBF7D0",
          borderRadius: 12,
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 22 }}>🏆</span>
        <div>
          <span style={{ fontWeight: 700, color: "#065F46", fontSize: 14 }}>해커톤 본선 최종 목표: </span>
          <span style={{ fontSize: 14, color: "#374151" }}>
            "1박 2일 본선 현장에서 음원 업로드부터 AI 유사도 패스, 온체인 기록 및 스마트 컨트랙트 실시간 토큰 정산까지의 완결된 시연(Demo) 제공"
          </span>
        </div>
      </div>
    </div>
  );
}
