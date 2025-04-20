import type { Author } from "@/interfaces/author";
import {
	ClientOnly,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { DateFormatter } from "./date-formatter";

export function PostHeader({
	title,
	coverImage,
	date,
	author,
	excerpt,
}: {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
	excerpt: string;
}) {
	return (
		<VStack gap={4} direction="column" maxW="4xl">
			<Image src={coverImage} rounded="lg" />
			<VStack gap={4} direction="column" w="full">
				<Heading size={{ mdDown: "5xl", md: "6xl", lg: "7xl" }}>
					{title}
				</Heading>
				<Flex align="end" w="full" justify="space-between">
					<Flex gap={3}>
						<Image rounded="full" boxSize={12} asChild>
							<NextImage
								src={author.picture}
								alt={`${author.name} icon`}
								width={256}
								height={256}
							/>
						</Image>
						<Flex direction="column">
							<Heading>{author.name}</Heading>
							<Text color="fg.muted" whiteSpace="pre-wrap">
								{excerpt}
							</Text>
						</Flex>
					</Flex>
					<ClientOnly>
						<Text fontFamily="mono">
							<DateFormatter dateString={date} />
						</Text>
					</ClientOnly>
				</Flex>
			</VStack>
		</VStack>
	);
}
