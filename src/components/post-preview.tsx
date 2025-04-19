import type { Author } from "@/interfaces/author";
import {
	Card,
	Flex,
	GridItem,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";

export function PostPreview({
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
		<GridItem colSpan={1}>
			<LinkBox maxW="2xl" h="100%">
				<Card.Root size="sm" h="100%">
					<Card.Body>
						<LinkOverlay href={`/posts/${slug}`} as={NextLink}>
							<Card.Title>{title}</Card.Title>
						</LinkOverlay>
					</Card.Body>
					<Card.Footer>
						<Flex direction="column" gap={3}>
							<Image w="full" rounded="md" src={coverImage} />
							<Text fontFamily="mono">
								<DateFormatter dateString={date} />
							</Text>
						</Flex>
					</Card.Footer>
				</Card.Root>
			</LinkBox>
		</GridItem>
	);
}
