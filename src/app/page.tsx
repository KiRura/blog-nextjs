import { HeroPost } from "@/components/hero-post";
import { MoreStories } from "@/components/more-stories";
import { getPostListForRSS } from "@/lib/api";
import { Container, Flex, Heading, Stack } from "@chakra-ui/react";

export default async function Index() {
	const allPosts = await getPostListForRSS();
	const heroPost = allPosts.contents[0];
	const morePosts = allPosts.contents.slice(1);

	function LatestPostLabel({ hide }: { hide: boolean }) {
		return (
			<Flex
				direction={{ lgDown: "row", lg: "column" }}
				visibility={hide ? "hidden" : "visible"}
				display={hide ? { lgDown: "none", lg: "flex" } : "flex"}
				whiteSpace={{ lgDown: "normal", lg: "pre-wrap" }}
			>
				<Heading size="7xl">{"The\nLatest\nPost"}</Heading>
			</Flex>
		);
	}

	return (
		<>
			<Flex
				pos="absolute"
				align="center"
				justify="center"
				overflow="hidden"
				zIndex={-1}
				w="vw"
			>
				<Heading
					mx="auto"
					whiteSpace="none"
					rotate="-12deg"
					fontSize={{ lgDown: "18rem", lg: "20rem", xl: "27rem" }}
					color="bg.subtle"
					userSelect="none"
					lineHeight="unset"
					fontWeight="extrabold"
					letterSpacing="wider"
				>
					KiRura
				</Heading>
			</Flex>
			<Container
				maxW="8xl"
				centerContent
				spaceY={{ lgDown: "4", lg: "6" }}
				py={{ lgDown: "4", lg: "6" }}
			>
				<Stack
					gap={{ lgDown: "4", lg: "6" }}
					align="center"
					justify="center"
					direction={{ lgDown: "column", lg: "row" }}
					w="full"
				>
					<LatestPostLabel hide={false} />
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.coverImage}
						publishedAt={heroPost.publishedAt}
						updatedAt={heroPost.updatedAt}
						id={heroPost.id}
						subtitle={heroPost.subtitle}
					/>
					<LatestPostLabel hide />
				</Stack>
				{/* <Separator w="full" /> */}
				<Heading>Recent</Heading>
				<MoreStories posts={morePosts} />
			</Container>
		</>
	);
}
