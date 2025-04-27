import { Feed } from "feed";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { getAllPosts } from "./api";

// https://qiita.com/kaeru333/items/3685f9231c9c07edb0e4

export async function generateRssFeed(): Promise<string> {
	const baseUrl = "https://blog.kirura.f5.si";
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

	const posts = getAllPosts();
	for (const post of posts) {
		const file = await unified()
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkRehype)
			.use(rehypeStringify)
			.process(post.content);

		feed.addItem({
			title: post.title,
			description: post.excerpt,
			date: new Date(post.date),
			id: `${baseUrl}/posts/${post.slug}`,
			link: `${baseUrl}/posts/${post.slug}`,
			content: String(file),
			author: [
				{
					name: post.author.name,
				},
			],
			image: `${baseUrl}${post.coverImage}`,
		});
	}

	// Output: RSS 2.0
	return feed.rss2();
}
