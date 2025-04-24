import type { Author } from "@/interfaces/author";
import {
	Card,
	ClientOnly,
	Flex,
	GridItem,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";
import { Skeleton } from "./ui/skeleton";

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
			<LinkBox maxW="2xl" h="full" w="full">
				<Card.Root size="sm" h="100%">
					<Card.Body>
						<LinkOverlay href={`/posts/${slug}`} as={NextLink}>
							<Card.Title>{title}</Card.Title>
						</LinkOverlay>
						<Card.Description>{excerpt}</Card.Description>
					</Card.Body>
					<Card.Footer>
						<Flex direction="column" gap={3}>
							<Image w="full" rounded="md" aspectRatio={16 / 9} asChild>
								<NextImage
									src={coverImage}
									alt="kirura twitter banner"
									width={1280}
									height={720}
								/>
							</Image>
							<ClientOnly fallback={<Skeleton w={24} />}>
								<Text fontFamily="mono" fontStyle="italic" color="fg.subtle">
									<DateFormatter dateString={date} />
								</Text>
							</ClientOnly>
						</Flex>
					</Card.Footer>
				</Card.Root>
			</LinkBox>
		</GridItem>
	);
}
