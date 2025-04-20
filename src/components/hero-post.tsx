import type { Author } from "@/interfaces/author";
import {
	Card,
	ClientOnly,
	Flex,
	HStack,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { DateFormatter } from "./date-formatter";
import { Skeleton } from "./ui/skeleton";

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
							<Image rounded="full" boxSize={6} asChild>
								<NextImage
									src={author.picture}
									alt={`${author.name} icon`}
									width={128}
									height={128}
								/>
							</Image>
							<Text>{author.name}</Text>
						</HStack>
						<ClientOnly fallback={<Skeleton w={24} />}>
							<Text
								fontFamily="mono"
								color="fg.subtle"
								fontStyle="italic"
								textAlign="end"
							>
								<DateFormatter dateString={date} />
							</Text>
						</ClientOnly>
					</Flex>
				</Card.Header>
				<Card.Body>
					<Flex direction="column" gap={2}>
						<LinkOverlay href={`/posts/${slug}`} as={NextLink}>
							<Card.Title fontSize="2xl">{title}</Card.Title>
						</LinkOverlay>
						<Card.Description fontSize="md">{excerpt}</Card.Description>
						<Image mt={3} aspectRatio={16 / 9} w="full" rounded="md" asChild>
							<NextImage
								src={coverImage}
								alt={title}
								width={1280}
								height={720}
							/>
						</Image>
					</Flex>
				</Card.Body>
			</Card.Root>
		</LinkBox>
	);
}
