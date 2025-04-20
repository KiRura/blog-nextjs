import {
	Avatar,
	Box,
	Container,
	Flex,
	HStack,
	IconButton,
	Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ColorModeButton } from "./ui/color-mode-custom";

export function Header() {
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
						<HStack>
							<Avatar.Root size="xs">
								<Avatar.Image src="/assets/blog/authors/kirura.jpg" />
							</Avatar.Root>
							<NextLink href="/">KiRura Blog</NextLink>
						</HStack>
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
