import type { Post, RssPost } from "@/interfaces/post";
import { type MicroCMSListResponse, createClient } from "microcms-js-sdk";

if (!process.env.MICRO_CMS_API_KEY)
	throw new Error("microcms api key is undefined");

const cmsClient = createClient({
	apiKey: process.env.MICRO_CMS_API_KEY,
	serviceDomain: "kirura",
});

export async function getPostSlugs() {
	const ids = await cmsClient.getAllContentIds({
		endpoint: "blog",
	});

	return ids;
}

export async function getPostBySlug(slug: string) {
	const post: Post = await cmsClient.getListDetail({
		endpoint: "blog",
		contentId: slug,
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return post;
}

export async function getPostListForRSS() {
	const posts: MicroCMSListResponse<RssPost> = await cmsClient.getList({
		endpoint: "blog",
		queries: {
			fields: "id,title,subtitle,coverImage,createdAt",
			orders: "-publishedAt",
		},
		customRequestInit: {
			next: {
				revalidate: 60,
			},
		},
	});

	return posts;
}
