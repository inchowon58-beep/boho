"use client";

import Link from "next/link";
import { useState } from "react";

const STORE_URL = "https://www.agapetstory.co.kr";
const PHONE = "0505-707-0401";
const PHONE_TEL = "05057070401";

const HERO_IMG =
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (45).png";
const SURRENDER_IMG =
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (44).png";
const ADOPTION_IMG =
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (50).jpg";
const GALLERY_IMGS = [
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (19).png",
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (21).png",
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (29).png",
  "/images/landing/인천강아지보호소/아가펫강아지보호소 (54).jpg",
];

type HomeLandingProps = {
  regions: string[];
};

export default function HomeLanding({ regions }: HomeLandingProps) {
  const [regionsOpen, setRegionsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openRegions = () => {
    setRegionsOpen(true);
    setTimeout(() => scrollTo("home-regions"), 100);
  };

  return (
    <div className="lp-root has-sticky-bar">
      <header className="lp-header">
        <div className="lp-header-inner">
          <a href={STORE_URL} className="lp-brand">
            <span className="lp-brand-sub">아가펫보호소</span>
            <span className="lp-brand-main">강아지·고양이 파양 · 무료입양</span>
          </a>
          <input
            type="checkbox"
            id="lp-nav-open"
            className="lp-nav-check"
            aria-hidden="true"
            tabIndex={-1}
          />
          <label
            htmlFor="lp-nav-open"
            className="lp-nav-toggle"
            aria-label="메뉴 열기"
          >
            <span className="lp-nav-toggle-bar" />
          </label>
          <nav className="lp-nav" aria-label="메인 메뉴">
            <a
              href="#home-surrender"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home-surrender");
              }}
            >
              파양 안내
            </a>
            <a
              href="#home-adoption"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home-adoption");
              }}
            >
              무료입양
            </a>
            <a
              href="#home-regions"
              onClick={(e) => {
                e.preventDefault();
                openRegions();
              }}
            >
              전국보호소 정보
            </a>
          </nav>
          <a href={STORE_URL} className="lp-top-cta">공식 사이트</a>
        </div>
      </header>

      <section className="home-hero" id="home-hero">
        <div
          className="home-hero-bg"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="lp-hero-badge">아가펫보호소</span>
          <div className="home-hero-tags">
            <span className="home-tag">강아지·고양이 파양</span>
            <span className="home-tag">무료입양</span>
            <span className="home-tag">전국 보호소 연결</span>
          </div>
          <h1>
            힘든 결정도, 새로운 시작도
            <br />
            <em>아가펫보호소</em>가 함께합니다
          </h1>
          <p className="home-hero-lead">
            피치 못한 사정으로 파양을 고민하시거나, 따뜻한 가족을 기다리는
            아이와 만나고 싶으시다면 아가펫보호소에 문의해 주세요. 전국 지역
            보호소 정보와 입양·파양 상담을 도와드립니다.
          </p>
          <div className="lp-hero-actions">
            <a href={`tel:${PHONE_TEL}`} className="lp-btn lp-btn-primary">
              전화 문의 {PHONE}
            </a>
            <button
              type="button"
              className="lp-btn lp-btn-outline"
              style={{ cursor: "pointer", border: "none" }}
              onClick={openRegions}
            >
              전국보호소 정보 보기
            </button>
          </div>
        </div>
      </section>

      <section className="lp-section" id="home-surrender">
        <div className="lp-container lp-about-grid">
          <div>
            <p className="lp-section-label">Surrender</p>
            <h2 className="lp-section-title">
              강아지·고양이 <em>파양</em> 상담
            </h2>
            <p className="lp-section-desc">
              개인의 건강 문제, 경제적 어려움, 이사 등 피치 못할 사정으로
              반려동물을 돌보기 어려운 경우, 아가펫보호소는 보호자님의 상황을
              이해하고 책임감 있는 절차를 통해 아이에게 더 나은 미래를 찾아
              드립니다. 강아지·고양이 모두 상담 가능합니다.
            </p>
            <ul className="lp-section-desc" style={{ marginTop: "1rem" }}>
              <li>전문 상담사 1:1 파양·재입양 절차 안내</li>
              <li>투명한 정보 공유와 아이 복지 최우선 원칙</li>
              <li>전국 지역 보호소·입양 가정 연결 지원</li>
            </ul>
          </div>
          <div>
            <img
              className="lp-about-image"
              src={SURRENDER_IMG}
              alt="강아지 고양이 파양 상담 아가펫보호소"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="lp-section lp-section-alt" id="home-adoption">
        <div className="lp-container">
          <p className="lp-section-label">Adoption</p>
          <h2 className="lp-section-title">
            따뜻한 가족을 기다리는 <em>무료입양</em>
          </h2>
          <p className="lp-section-desc" style={{ marginBottom: "1.5rem" }}>
            아가펫보호소와 연계된 전국 보호소에는 새로운 가족을 기다리는
            강아지·고양이가 있습니다. 입양 전 상담과 가정 환경 확인을 통해
            아이와 보호자 모두에게 행복한 만남을 돕습니다.
          </p>
          <div className="home-service-grid">
            <article className="home-service-card">
              <img src={ADOPTION_IMG} alt="무료입양 강아지" loading="lazy" />
              <div className="home-service-body">
                <h3>강아지 무료입양</h3>
                <p>
                  성격·건강 상태를 안내하고, 라이프스타일에 맞는 반려견
                  매칭을 도와드립니다. 입양 후에도 지속적인 소통을 이어갑니다.
                </p>
              </div>
            </article>
            <article className="home-service-card">
              <img
                src="/images/landing/광주강아지보호소/아가펫강아지보호소 (39).jpg"
                alt="무료입양 고양이"
                loading="lazy"
              />
              <div className="home-service-body">
                <h3>고양이 무료입양</h3>
                <p>
                  유기묘 보호·입양 상담도 함께 진행합니다. 처음 반려묘를
                  입양하시는 경우에도 친절하게 안내해 드립니다.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-section" id="home-regions">
        <div className="lp-container">
          <p className="lp-section-label">Regions</p>
          <h2 className="lp-section-title">
            전국 <em>보호소</em> 정보
          </h2>
          <p className="lp-section-desc" style={{ marginBottom: "1.25rem" }}>
            아래 버튼을 눌러 전국 지역 보호소 목록을 확인하세요. 가로로
            스크롤하여 원하는 지역을 선택하면 해당 페이지로 이동합니다.
          </p>
          <button
            type="button"
            className={`home-regions-toggle${regionsOpen ? " is-open" : ""}`}
            onClick={() => setRegionsOpen((v) => !v)}
            aria-expanded={regionsOpen}
            aria-controls="regions-panel"
          >
            <span>전국보호소 정보 {regionsOpen ? "닫기" : "열기"}</span>
            <span className="home-regions-toggle-icon">▼</span>
          </button>
          {regionsOpen && (
            <div className="home-regions-panel" id="regions-panel">
              <p className="home-regions-hint">
                ← 가로로 스크롤하여 지역을 선택하세요 →
              </p>
              <div className="lp-regions-scroll">
                {regions.map((slug) => (
                  <Link key={slug} href={`/${slug}`} className="lp-region-chip">
                    {slug}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="lp-section lp-section-alt" id="home-gallery">
        <div className="lp-container">
          <p className="lp-section-label">Gallery</p>
          <h2 className="lp-section-title">
            보호소에서 <em>돌보는</em> 아이들
          </h2>
          <div className="home-gallery-strip">
            {GALLERY_IMGS.map((src) => (
              <div key={src} className="home-gallery-item">
                <img src={src} alt="아가펫보호소" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <p>
          © 아가펫보호소 · 강아지·고양이 파양 · 무료입양 상담 {PHONE}
        </p>
      </footer>

      <div className="sticky-action-bar">
        <a href={STORE_URL} className="btn-cta" target="_blank" rel="noopener noreferrer">
          아가펫보호소 바로가기
        </a>
        <a href={`tel:${PHONE_TEL}`} className="btn-call">
          전화문의하기 {PHONE}
        </a>
      </div>
    </div>
  );
}
