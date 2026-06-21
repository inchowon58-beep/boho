import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

const siteUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://boho.agapet.co.kr";

export const metadata: Metadata = {
  title: "아가펫보호소 | 전국 강아지 보호소 입양·보호 상담",
  description:
    "아가펫보호소 전국 지역 강아지 보호소 정보. 입양·보호·상담 문의 0505-707-0401. 공식 사이트 www.agapetstory.co.kr",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "아가펫보호소",
    title: "아가펫보호소 | 전국 강아지 보호소",
    description:
      "아가펫보호소 전국 지역 강아지 보호소 입양·보호 상담. 0505-707-0401",
  },
};

function getRegionSlugs(): string[] {
  const appDir = path.join(process.cwd(), "app");
  return fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.endsWith("강아지보호소"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "ko"));
}

export default function HomePage() {
  const regions = getRegionSlugs();

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
      <p
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#c9a962",
          fontWeight: 600,
        }}
      >
        아가펫보호소
      </p>
      <h1
        style={{
          fontFamily: "Noto Serif KR, Georgia, serif",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 500,
          lineHeight: 1.25,
          margin: "0.75rem 0 1rem",
        }}
      >
        전국 강아지 보호소 정보
      </h1>
      <p style={{ color: "#5c5c5c", lineHeight: 1.8, marginBottom: "1.5rem" }}>
        아가펫보호소는 전국 지역별 강아지 보호·입양·상담 정보를 제공합니다.
        전화 <a href="tel:05057070401">0505-707-0401</a> ·{" "}
        <a href="https://www.agapetstory.co.kr" target="_blank" rel="noopener noreferrer">
          agapetstory.co.kr
        </a>
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: "0.5rem",
        }}
      >
        {regions.map((slug) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              style={{
                display: "block",
                padding: "0.85rem 1rem",
                border: "1px solid #e8dfd0",
                borderRadius: "4px",
                background: "#fff",
                color: "#1c1c1c",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
