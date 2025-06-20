import { Box, Card, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import type { CoverImage } from "@/interfaces/post";
import { Dates } from "./dates";

export function PostPreview({
	title,
	coverImage,
	publishedAt,
	updatedAt,
	id,
	subtitle,
}: {
	title: string;
	coverImage?: CoverImage;
	publishedAt?: string;
	updatedAt: string;
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
				{publishedAt ? (
					<Card.Footer justifyContent="end">
						<Dates
							publishedAt={publishedAt}
							updatedAt={updatedAt}
							direction="row"
						/>
					</Card.Footer>
				) : null}
			</Card.Root>
		</LinkBox>
	);
}
