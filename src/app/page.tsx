import { HeroPost } from "@/components/hero-post";
import { MoreStories } from "@/components/more-stories";
import { config } from "@/config";
import { getAllPosts } from "@/lib/api";
import { Container, Flex, Heading, Separator, VStack } from "@chakra-ui/react";

export default function Index() {
	const allPosts = getAllPosts();

	const heroPost = allPosts[0];

	const morePosts = allPosts.slice(1);

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
					{...config.transitionAnimation}
				>
					KiRura
				</Heading>
			</Flex>
			<Container maxW="8xl" {...config.transitionAnimation} my={6}>
				<Flex justify="center">
					<Flex
						gap={6}
						align="center"
						direction={{ lgDown: "column", lg: "row" }}
					>
						<LatestPostLabel hide={false} />
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
						<LatestPostLabel hide />
					</Flex>
				</Flex>
				<Separator my={6} />
				<VStack>
					<Heading>Recent</Heading>
					<MoreStories posts={morePosts} />
				</VStack>
			</Container>
		</>
	);
}
