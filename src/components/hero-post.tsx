import { Box, Card, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import type { CoverImage } from "@/interfaces/post";
import { Dates } from "./dates";

export function HeroPost({
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
		<LinkBox maxW="2xl" w="full">
			<Card.Root rounded="lg">
				<Card.Body gap="6">
					<Box spaceY="1.5">
						<LinkOverlay href={`/posts/${id}`} as={NextLink}>
							<Card.Title fontSize="2xl">{title}</Card.Title>
						</LinkOverlay>
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
