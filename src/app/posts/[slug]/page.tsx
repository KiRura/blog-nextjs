import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/ui/prose-custom";
import { getPostBySlug } from "@/lib/api";
import { Container, Separator } from "@chakra-ui/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	return (
		<Container my={4} maxW="4xl" as="main">
			<PostHeader
				title={post.title}
				coverImage={post.coverImage}
				date={post.createdAt}
				subtitle={post.subtitle}
			/>
			<Separator />
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<Prose size="lg" dangerouslySetInnerHTML={{ __html: post.content }} />
		</Container>
	);
}

export type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params;
	const post = await getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return {
		title: post.title,
		description: post.subtitle,
		openGraph: {
			images: post.coverImage?.url,
		},
		twitter: {
			card: "summary_large_image",
		},
	};
}
