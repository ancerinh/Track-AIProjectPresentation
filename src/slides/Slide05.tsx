const CELLS = [
  { label: "고객 세그먼트", items: ["AI 음원 크리에이터 (프롬프트 엔지니어)", "BGM 수요자 (유튜버, 인디 게임사)", "AI 보이스 모델 제공자 (성우, 가창자)"] },
  { label: "가치제안", items: ["스마트 컨트랙트 기반 상업적 이용권 거래", "온체인 저장 + AI 유사도 검증으로 위변조 방지", "기여 지분별 수수료 없는 자동 수익 분배"] },
  { label: "채널 (경로)", items: ["DApp 기반 데이터 마켓 포럼", "AI 음악 커뮤니티 (디스코드, 오픈카톡)", "영상 편집 툴 (Premiere 등) BGM 플러그인 연동"] },
  { label: "고객관계", items: ["소셜 로그인 기반 지갑 없는 온보딩", "투명한 온체인 대시보드 (유사도 검증 리포트)", "정품 데이터 인증 크리에이터 뱃지 부여"] },
  { label: "수익 흐름", items: ["마켓플레이스 라이선스 거래 체결 수수료 (2.5%~5%)", "대량 음원 등록 기업 대상 AI 표절 API 이용료", "B2B 기업용 무제한 상업 음원 월정액 구독"] },
  { label: "주요 자원", items: ["AI 유사도 판별 엔진 (MFCC 기반 오디오 분석)", "Solidity 스마트 컨트랙트 & IPFS 분산 인프라", "온체인 메타데이터 DB (Provenance)"] },
  { label: "주요 활동", items: ["AI 표절 탐지 모델 고도화 및 DB 확충", "스마트 컨트랙트 보안 감사 (Audit)", "Web3 사적 계약 전용 라이선스 표준 약관 고도화"] },
  { label: "파트너 네트워크", items: ["AI 음원 생성 플랫폼 (Suno, Udio 등)", "콘텐츠 제작자 협회 (인디게임협회, MCN 기획사)", "Web3 메인넷 재단 & 블록체인 보안 감사 기관"] },
  { label: "비용 구조", items: ["IPFS 노드 유지비 & AI 판별 클라우드 서버 운영비", "온체인 데이터 기록 및 정산 트랜잭션 가스비 지원금", "사적 라이선스 표준화 법률 자문비 및 유지보수비"] },
];

export default function Slide05() {
  return (
    <div className="slide" style={{ padding: "40px 56px" }}>
      <p className="slide-eyebrow">Business Model</p>
      <h2 className="slide-title" style={{ marginBottom: 28 }}>Track-AI 9-채널 비즈니스 모델 캔버스</h2>

      <div className="bmc-grid">
        {CELLS.map((cell, i) => (
          <div key={i} className="bmc-cell">
            <div className="bmc-label">{cell.label}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              {cell.items.map(item => (
                <li key={item} style={{ display: "flex", gap: 8, fontSize: 13, color: "#4B5563", lineHeight: 1.55 }}>
                  <span style={{ color: "#9CA3AF", flexShrink: 0, marginTop: 1 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
