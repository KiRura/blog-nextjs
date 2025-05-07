import type { RssPost } from "@/interfaces/post";
import { EmptyState, Grid, VStack } from "@chakra-ui/react";
import type { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { FaBatteryEmpty } from "react-icons/fa6";
import { PostPreview } from "./post-preview";

export function MoreStories({
	posts,
}: { posts: (RssPost & MicroCMSContentId & MicroCMSDate)[] }) {
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
		<Grid
			templateColumns={{
				smDown: "repeat(1, 1fr)",
				sm: "repeat(1, 1fr)",
				md: "repeat(2, 1fr)",
				lg: "repeat(3, 1fr)",
			}}
			w="full"
			gap={2}
		>
			{posts.map((post) => (
				<PostPreview
					key={post.id}
					title={post.title}
					coverImage={post.coverImage}
					date={post.createdAt}
					id={post.id}
					subtitle={post.subtitle}
				/>
			))}
		</Grid>
	);
}
