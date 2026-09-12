export default function Slide02() {
  return (
    <div className="slide slide-gray">
      <p className="slide-eyebrow">Problem & Background</p>
      <h2 className="slide-title">AI 음악의 폭발적 성장과 법적 사각지대의 충돌</h2>
      <p className="slide-subtitle" style={{ marginBottom: 32 }}>
        기술은 앞서가고, 법과 플랫폼의 기준은 여전히 공백 상태입니다.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Card 1 */}
        <div className="ir-card">
          {/* Flat icon */}
          <div style={{ marginBottom: 20 }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 6 }}>법적 저작권 부재의 한계</h3>
          <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>Problem 01</p>
          <div style={{ width: "100%", height: 1, background: "#E5E7EB", marginBottom: 20 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ color: "#EF4444", flexShrink: 0, fontSize: 15, marginTop: 1 }}>•</span>
              <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                순수 AI 생성 음원("딸깍" 곡)은 저작권법상 인간 창작물이 아니므로{" "}
                <strong style={{ color: "#111827" }}>공공재(Public Domain)</strong>로 분류됩니다.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ color: "#EF4444", flexShrink: 0, fontSize: 15, marginTop: 1 }}>•</span>
              <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
                인간의 편집·기여가 포함되어도 기여도를 공식 증명할{" "}
                <strong style={{ color: "#111827" }}>플랫폼/기술적 기준 부재.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="ir-card">
          <div style={{ marginBottom: 20 }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 6 }}>시장 내 페인포인트 (Pain Point)</h3>
          <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>Problem 02</p>
          <div style={{ width: "100%", height: 1, background: "#E5E7EB", marginBottom: 20 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { who: "크리에이터", pain: "자신이 가공한 AI 음원의 소유 권리를 인정받지 못해 수익화 실패." },
              { who: "구매자 (유튜버/게임사)", pain: "AI 음원 사용 시 무단 도용 및 추후 법적 분쟁 리스크 부담." },
              { who: "보이스 제공자", pain: "자신의 목소리 데이터셋 무단 학습에 대한 보상 체계 부재." },
            ].map(item => (
              <div key={item.who} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: "#EF4444", flexShrink: 0, fontSize: 15, marginTop: 1 }}>•</span>
                <div>
                  <span style={{ fontWeight: 700, color: "#111827", fontSize: 14 }}>{item.who}:</span>{" "}
                  <span style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.65 }}>{item.pain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
