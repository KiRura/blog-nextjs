import type { Author } from "@/interfaces/author";
import {
	Avatar,
	Card,
	Flex,
	HStack,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";

export function HeroPost({
	title,
	coverImage,
	date,
	author,
	slug,
	excerpt,
}: {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
	slug: string;
	excerpt: string;
}) {
	return (
		<LinkBox maxW="2xl">
			<Card.Root rounded="lg">
				<Card.Header mb={-2}>
					<Flex justify="space-between">
						<HStack>
							<Avatar.Root boxSize="1.4rem">
								<Avatar.Image src={author.picture} />
								<Avatar.Fallback name={author.name} />
							</Avatar.Root>
							<Text>{author.name}</Text>
						</HStack>
						<Text
							fontFamily="mono"
							color="fg.subtle"
							fontStyle="italic"
							textAlign="end"
						>
							<DateFormatter dateString={date} />
						</Text>
					</Flex>
				</Card.Header>
				<Card.Body>
					<Flex direction="column" gap={2}>
						<LinkOverlay href={`/posts/${slug}`} as={NextLink}>
							<Card.Title fontSize="2xl">{title}</Card.Title>
						</LinkOverlay>
						<Card.Description fontSize="md">{excerpt}</Card.Description>
						<Image mt={3} w="full" rounded="md" src={coverImage} />
					</Flex>
				</Card.Body>
			</Card.Root>
		</LinkBox>
	);
}
