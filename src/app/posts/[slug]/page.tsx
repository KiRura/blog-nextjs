import { DateFormatter } from "@/components/date-formatter";
import { Prose } from "@/components/ui/prose-custom";
import { getPostBySlug } from "@/lib/api";
import {
	Box,
	ClientOnly,
	Container,
	Flex,
	Heading,
	Image,
	Separator,
	Text,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function Post(props: Params) {
	const params = await props.params;
	const post = await getPostBySlug(params.slug).catch(() => {});

	if (!post) notFound();

	return (
		<Container py="6" maxW="4xl" as="main" centerContent>
			<Box spaceY="9" mb="9" w="full">
				{post.coverImage ? (
					<Image asChild rounded="lg">
						<NextImage
							src={post.coverImage.url}
							alt={post.title}
							height={post.coverImage.height}
							width={post.coverImage.width}
						/>
					</Image>
				) : null}
				<Flex direction="column" w="full" gap="2">
					<Heading size={{ mdDown: "5xl", md: "6xl", lg: "7xl" }}>
						{post.title}
					</Heading>
					<Flex justify="space-between">
						<Text color="fg.muted">{post.subtitle}</Text>
						<ClientOnly>
							<Text fontFamily="mono" color="fg.muted" fontStyle="italic">
								<DateFormatter dateString={post.createdAt} />
							</Text>
						</ClientOnly>
					</Flex>
				</Flex>
			</Box>
			<Separator w="full" />
			<Flex w="full">
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<Prose size="lg" dangerouslySetInnerHTML={{ __html: post.content }} />
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
	const post = await getPostBySlug(params.slug).catch(() => {});

	if (!post) notFound();

	return {
		title: post.title,
		description: post.subtitle,
		...(post.coverImage && {
			openGraph: {
				images: post.coverImage.url,
			},
			twitter: {
				card: "summary_large_image",
			},
		}),
		authors: { name: "KiRura Blog" },
	};
}

export function generateStaticParams() {
	return [];
}
