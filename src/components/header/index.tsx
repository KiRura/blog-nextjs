import {
	Box,
	ButtonGroup,
	ClientOnly,
	Container,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
	Skeleton,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Settings } from "./settings";

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
						<NextLink href="/">
							<HStack>
								<Image rounded="full" boxSize={8} asChild>
									<NextImage
										src="/favicon/kirura.jpg"
										alt="kirura icon"
										width={400}
										height={400}
									/>
								</Image>
								KiRura Blog
							</HStack>
						</NextLink>
					</Link>
					<ButtonGroup variant="outline">
						<IconButton asChild aria-label="Source">
							<NextLink
								href="https://github.com/KiRura/blog-nextjs"
								target="_blank"
							>
								<FaGithub />
							</NextLink>
						</IconButton>
						<ClientOnly fallback={<Skeleton boxSize="10" />}>
							<Settings />
						</ClientOnly>
					</ButtonGroup>
				</Flex>
			</Container>
		</Box>
	);
}
