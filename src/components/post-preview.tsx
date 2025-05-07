import type { CoverImage } from "@/interfaces/post";
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
		<GridItem colSpan={1}>
			<LinkBox maxW="2xl" h="full" w="full">
				<Card.Root size="sm" h="100%">
					<Card.Body>
						<LinkOverlay href={`/posts/${id}`} as={NextLink}>
							<Card.Title>{title}</Card.Title>
						</LinkOverlay>
						<Card.Description>{subtitle}</Card.Description>
					</Card.Body>
					<Card.Footer>
						{coverImage ? (
							<Flex direction="column" gap={3}>
								<Image w="full" rounded="md" aspectRatio={16 / 9} asChild>
									<NextImage
										src={coverImage.url}
										alt={title}
										width={coverImage.width}
										height={coverImage.height}
									/>
								</Image>
								<ClientOnly fallback={<Skeleton w={24} />}>
									<Text fontFamily="mono" fontStyle="italic" color="fg.subtle">
										<DateFormatter dateString={date} />
									</Text>
								</ClientOnly>
							</Flex>
						) : null}
					</Card.Footer>
				</Card.Root>
			</LinkBox>
		</GridItem>
	);
}
