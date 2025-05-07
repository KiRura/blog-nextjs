import type { CoverImage } from "@/interfaces/post";
import {
	Card,
	ClientOnly,
	Flex,
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
	createdAt,
	id,
	subtitle,
}: {
	title: string;
	coverImage?: CoverImage;
	createdAt: string;
	id: string;
	subtitle: string;
}) {
	return (
		<LinkBox maxW="2xl" w="full">
			<Card.Root rounded="lg">
				<Card.Header mb={-2}>
					<Flex justify="space-between">
						<ClientOnly fallback={<Skeleton w={24} />}>
							<Text
								fontFamily="mono"
								color="fg.subtle"
								fontStyle="italic"
								textAlign="end"
							>
								<DateFormatter dateString={createdAt} />
							</Text>
						</ClientOnly>
					</Flex>
				</Card.Header>
				<Card.Body>
					<Flex direction="column" gap={2}>
						<LinkOverlay href={`/posts/${id}`} as={NextLink}>
							<Card.Title fontSize="2xl">{title}</Card.Title>
						</LinkOverlay>
						<Card.Description fontSize="md">{subtitle}</Card.Description>
						{coverImage ? (
							<Image mt={3} aspectRatio={16 / 9} w="full" rounded="md" asChild>
								<NextImage
									src={coverImage.url}
									alt={title}
									width={coverImage.width}
									height={coverImage.height}
								/>
							</Image>
						) : null}
					</Flex>
				</Card.Body>
			</Card.Root>
		</LinkBox>
	);
}
