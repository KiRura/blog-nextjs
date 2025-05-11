import type { CoverImage } from "@/interfaces/post";
import {
	Box,
	Card,
	ClientOnly,
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
	id,
	subtitle,
}: {
	title: string;
	coverImage?: CoverImage;
	date: string;
	id: string;
	subtitle: string;
}) {
	return (
		<LinkBox maxW="2xl">
			<Card.Root size="sm" h="full">
				<Card.Body gap="4">
					<Box spaceY="1">
						<LinkOverlay href={`/posts/${id}`} as={NextLink}>
							<Card.Title>{title}</Card.Title>
						</LinkOverlay>
						<Card.Description>{subtitle}</Card.Description>
					</Box>
					{coverImage ? (
						<Image w="full" rounded="md" aspectRatio={16 / 9} asChild>
							<NextImage
								src={coverImage.url}
								alt={title}
								width={coverImage.width}
								height={coverImage.height}
							/>
						</Image>
					) : null}
				</Card.Body>
				<Card.Footer>
					<ClientOnly fallback={<Skeleton w="24" h="1.5rem" />}>
						<Text
							fontSize="md"
							fontFamily="mono"
							fontStyle="italic"
							color="fg.subtle"
						>
							<DateFormatter dateString={date} />
						</Text>
					</ClientOnly>
				</Card.Footer>
			</Card.Root>
		</LinkBox>
	);
}
