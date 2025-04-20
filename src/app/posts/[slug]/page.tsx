import { PostHeader } from "@/components/post-header";
import { PostHeading } from "@/components/post-headings";
import { Prose } from "@/components/ui/prose-custom";
import { config } from "@/config";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { Container, Flex, Separator } from "@chakra-ui/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<Container my={4} maxW="8xl" as="main" {...config.transitionAnimation}>
			<Flex w="full" justify="space-evenly">
				<PostHeading hide={false}>{post.content}</PostHeading>
				<Flex direction="column" maxW="3xl" gap={4}>
					<PostHeader
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
					/>
					<Separator />
					<Prose size="lg">
						<Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
					</Prose>
				</Flex>
				<PostHeading hide>{post.content}</PostHeading>
			</Flex>
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
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			images: [`https://blog.kirura.f5.si${post.ogImage.url}`],
		},
		twitter: {
			card: "summary_large_image",
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
