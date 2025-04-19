import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

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
					<Button variant="ghost">KiRura Blog</Button>
					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
