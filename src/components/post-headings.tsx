import { Flex, Heading, VStack } from "@chakra-ui/react";
import Markdown from "react-markdown";

export function PostHeading({
	hide,
	children,
}: { hide: boolean; children: string }) {
	return (
		<VStack
			visibility={hide ? "hidden" : "visible"}
			display={{ xlDown: "none", xl: "flex" }}
			gap={4}
			pos="sticky"
			top={0}
		>
			<Heading>目次(動かない)</Heading>
			<Flex direction="column" gap={2}>
				<Markdown allowedElements={["h1", "h2", "h3"]}>{children}</Markdown>
			</Flex>
		</VStack>
	);
}

// type Props = {
// 	level: number;
// 	children: React.ReactNode & React.ReactNode[];
// };

// function Link({ level, children }) {
//    function headingLevelToMargin(level: number) {
//       switch (level) {
//          case 1: {
//             return 0;
//          }
//          case 2: {
//             return 4;
//          }
//          case 3: {
//             return 8;
//          }
//       }
//    }

//    return (
//       <ChakraLink asChild ml={headingLevelToMargin(level)}>
//          <NextLink href={`#${children.toString()}`}>{children}</NextLink>
//       </ChakraLink>
//    );
// }
