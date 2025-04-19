import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { Provider } from "@/components/ui/provider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
});
const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "KiRura Blog",
	description: "しがない個人ブログ",
	icons: "https://blog.kirura.f5.si/favicon/favicon.ico",
	openGraph: {
		images: "https://blog.kirura.f5.si/favicon/kirura.jpg",
	},
	twitter: {
		card: "summary",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ja"
			suppressHydrationWarning
			className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
		>
			<head>
				<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
				<meta name="darkreader-lock" />
			</head>
			<body>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
