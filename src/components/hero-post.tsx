import type { CoverImage } from "@/interfaces/post";
import {
	Box,
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
				<Card.Body gap="6">
					<Box spaceY="1.5">
						<Flex justify="space-between">
							<LinkOverlay href={`/posts/${id}`} as={NextLink}>
								<Card.Title fontSize="2xl">{title}</Card.Title>
							</LinkOverlay>
							<ClientOnly fallback={<Skeleton w="24" h="1.5rem" />}>
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
						<Card.Description fontSize="md">{subtitle}</Card.Description>
					</Box>

					{coverImage ? (
						<Image aspectRatio={16 / 9} w="full" rounded="md" asChild>
							<NextImage
								src={coverImage.url}
								alt={title}
								width={coverImage.width}
								height={coverImage.height}
							/>
						</Image>
					) : null}
				</Card.Body>
			</Card.Root>
		</LinkBox>
	);
}
