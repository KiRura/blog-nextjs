import type { CoverImage } from "@/interfaces/post";
import { ClientOnly, Heading, Image, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import { DateFormatter } from "./date-formatter";

export function PostHeader({
	title,
	coverImage,
	date,
	subtitle,
}: {
	title: string;
	coverImage?: CoverImage;
	date: string;
	subtitle: string;
}) {
	return (
		<VStack gap={4} direction="column" maxW="4xl">
			{coverImage ? (
				<Image asChild rounded="lg">
					<NextImage
						src={coverImage.url}
						alt={title}
						height={coverImage.height}
						width={coverImage.width}
					/>
				</Image>
			) : null}
			<VStack gap={4} direction="column" w="full">
				<Heading size={{ mdDown: "5xl", md: "6xl", lg: "7xl" }}>
					{title}
				</Heading>
				<ClientOnly>
					<Text fontFamily="mono">
						<DateFormatter dateString={date} />
					</Text>
				</ClientOnly>
			</VStack>
		</VStack>
	);
}
