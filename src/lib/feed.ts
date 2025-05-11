import { Feed } from "feed";
import { getPostListForRSS } from "./api";

// https://qiita.com/kaeru333/items/3685f9231c9c07edb0e4

export async function generateRssFeed(): Promise<string> {
	const baseUrl = "https://kirura-blog.vercel.app";
	const feed = new Feed({
		title: "KiRura Blog",
		description: "しがない個人ブログ",
		id: baseUrl,
		link: baseUrl,
		language: "ja",
		copyright: "copyright",
		image: `${baseUrl}/favicon/kirura.jpg`,
		favicon: `${baseUrl}/favicon/favicon.ico`,
		author: {
			name: "KiRura",
			email: "kirura@kirura.f5.si",
			link: "https://kirura.f5.si",
		},
	});

	const posts = await getPostListForRSS();
	for (const post of posts.contents) {
		feed.addItem({
			title: post.title,
			description: post.subtitle,
			date: new Date(post.createdAt),
			id: post.id,
			link: `${baseUrl}/posts/${post.id}`,
			image: post.coverImage?.url,
		});
	}

	// Output: RSS 2.0
	return feed.rss2();
}
