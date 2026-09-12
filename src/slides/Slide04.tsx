import { Fragment } from "react";

const steps = [
  {
    num: "01",
    label: "AI 유사도 & 표절 검증",
    sublabel: "Filter",
    detail: "음원 파일과 프롬프트 로그 제출 시, AI 엔진이 오디오 특징값(MFCC)을 추출해 기존 DB와 유사도 판별 (85% 이상 시 차단).",
    tags: ["MFCC", "Librosa", "Cosine Similarity"],
    barColor: "#9CA3AF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "온체인 창작 이력 기록",
    sublabel: "Proof",
    detail: "검증 통과 데이터의 메타데이터(IPFS CID, 타임스탬프, 기여 지분 비율)를 Solidity 스마트 컨트랙트에 위변조 불가능하게 영구 기록.",
    tags: ["IPFS", "Solidity", "Timestamp"],
    barColor: "#2563EB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "스마트 컨트랙트 거래",
    sublabel: "Trade",
    detail: "구매자가 '상업적 이용권' 구매 시, 스마트 컨트랙트가 토큰 결제 수령 즉시 창작자 지갑으로 기여도에 따라 수익 자동 분배.",
    tags: ["ERC-1155", "Auto Split", "Polygon"],
    barColor: "#10B981",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .5 2 1.5c0 2-4 2-4 4 0 1 .9 1.5 2 1.5s2-.5 2.5-1.5" />
        <line x1="12" y1="7" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="17" />
      </svg>
    ),
  },
];

export default function Slide04() {
  return (
    <div className="slide">
      <p className="slide-eyebrow">Service Overview</p>
      <h2 className="slide-title">Track-AI의 3단계 음원 데이터 인증 및 거래 프로세스</h2>
      <p className="slide-subtitle">Filter → Proof → Trade. 세 단계로 신뢰를 구축합니다.</p>

      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {steps.map((step, i) => (
          <Fragment key={step.num}>
            <div
              className="ir-card"
              style={{
                flex: 1,
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Colored top bar */}
              <div style={{ height: 4, background: step.barColor }} />
              <div style={{ padding: "28px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 20 }}>{step.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase" }}>
                  Step {step.num} · {step.sublabel}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "0 0 14px", lineHeight: 1.35 }}>{step.label}</h3>
                <p style={{ fontSize: 13, color: "#4B5563", lineHeight: 1.7, margin: "0 0 20px", flex: 1 }}>{step.detail}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {step.tags.map(tag => (
                    <span
                      key={tag}
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
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, flexShrink: 0, color: "#D1D5DB", fontSize: 20 }}>
                →
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
