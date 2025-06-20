import { EmptyState, SimpleGrid, VStack } from "@chakra-ui/react";
import type { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { FaBatteryEmpty } from "react-icons/fa6";
import type { RssPost } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

export function MoreStories({
	posts,
}: {
	posts: (RssPost & MicroCMSContentId & MicroCMSDate)[];
}) {
	if (!posts.length)
		return (
			<EmptyState.Root>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<FaBatteryEmpty />
					</EmptyState.Indicator>
					<VStack textAlign="center">
						<EmptyState.Title>まだブログができていません</EmptyState.Title>
						<EmptyState.Description>
							1日後かもしれないし、1年後かもしれないし、未来永劫できないかもしれない
						</EmptyState.Description>
					</VStack>
				</EmptyState.Content>
			</EmptyState.Root>
		);
	return (
		<SimpleGrid
			columns={{
				mdDown: 1,
				md: 2,
				lg: 3,
			}}
			w="full"
			gap="2"
		>
			{posts.map((post) => (
				<PostPreview
					key={post.id}
					title={post.title}
					coverImage={post.coverImage}
					publishedAt={post.publishedAt}
					updatedAt={post.updatedAt}
					id={post.id}
					subtitle={post.subtitle}
				/>
			))}
		</SimpleGrid>
	);
}
