import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import HomeLanding from "@/components/HomeLanding";

const siteUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://boho.agapet.co.kr";

export const metadata: Metadata = {
  title: "아가펫보호소 | 강아지·고양이 파양 · 무료입양 상담",
  description:
    "아가펫보호소 강아지·고양이 파양 상담과 무료입양 안내. 전국 보호소 정보. 전화 0505-707-0401 · www.agapetstory.co.kr",
  keywords: [
    "강아지 파양",
    "고양이 파양",
    "무료입양",
    "강아지 무료입양",
    "고양이 무료입양",
    "아가펫보호소",
    "전국 강아지 보호소",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "아가펫보호소",
    title: "아가펫보호소 | 강아지·고양이 파양 · 무료입양",
    description:
      "강아지·고양이 파양 상담과 무료입양 안내. 전국 보호소 정보. 0505-707-0401",
    images: [
      {
        url: "/images/landing/인천강아지보호소/아가펫강아지보호소 (45).png",
      },
    ],
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
  return <HomeLanding regions={regions} />;
}
