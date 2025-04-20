import {
	Box,
	Container,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
} from "@chakra-ui/react";
import NextImage, { getImageProps } from "next/image";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ColorModeButton } from "./ui/color-mode-custom";

export function Header() {
	const avatarImageProps = getImageProps({
		src: "/assets/blog/authors/kirura.jpg",
		alt: "kirura icon",
		width: 400,
		height: 400,
	}).props;

	return (
		<Box
			as="header"
			borderBottomWidth={1}
			pos="sticky"
			zIndex="docked"
			top={0}
			bg="bg"
		>
			<Container maxW="8xl">
				<Flex align="center" justify="space-between" py={2}>
					<Link asChild fontWeight="bold">
						<NextLink href="/">
							<HStack>
								<Image rounded="full" boxSize={8} asChild>
									<NextImage
										src="/assets/blog/authors/kirura.jpg"
										alt="kirura icon"
										width={400}
										height={400}
									/>
								</Image>
								KiRura Blog
							</HStack>
						</NextLink>
					</Link>
					<HStack>
						<IconButton asChild aria-label="Source" variant="ghost">
							<NextLink
								href="https://github.com/KiRura/blog-nextjs"
								target="_blank"
							>
								<FaGithub />
							</NextLink>
						</IconButton>
						<ColorModeButton />
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}
