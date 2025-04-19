import type { Author } from "@/interfaces/author";
import {
	Avatar,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { DateFormatter } from "./date-formatter";

export function PostHeader({
	title,
	coverImage,
	date,
	author,
}: { title: string; coverImage: string; date: string; author: Author }) {
	return (
		<VStack gap={4} direction="column" maxW="4xl">
			<Image src={coverImage} rounded="lg" />
			<VStack gap={4} direction="column" w="full">
				<Heading size={{ mdDown: "5xl", md: "6xl", lg: "7xl" }}>
					{title}
				</Heading>
				<Flex align="end" w="full" justify="space-between">
					<HStack>
						<Avatar.Root>
							<Avatar.Fallback name={author.name} />
							<Avatar.Image src={author.picture} />
						</Avatar.Root>
						<Text>{author.name}</Text>
					</HStack>
					<Text fontFamily="mono">
						<DateFormatter dateString={date} />
					</Text>
				</Flex>
			</VStack>
		</VStack>
	);
}
