import {
	ClientOnly,
	HStack,
	Stack,
	StackSeparator,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaRotateRight, FaUpload } from "react-icons/fa6";
import { DateFormatter } from "./date-formatter";
import { Skeleton } from "./ui/skeleton";

export function Dates({
	publishedAt,
	updatedAt,
	direction,
}: {
	publishedAt: string;
	updatedAt: string;
	direction: "column" | "row";
}) {
	return (
		<ClientOnly
			fallback={
				// <SkeletonText
				// 	maxW="24"
				// 	h="1.5rem"
				// 	noOfLines={direction === "column" ? 2 : 1}
				// />
				<VStack>
					{[1, direction === "column" ? 2 : 3].map((num) =>
						num !== 3 ? (
							<Skeleton
								key={num}
								w={direction === "column" ? "32" : "64"}
								h="1.5rem"
							/>
						) : null,
					)}
				</VStack>
			}
		>
			<Stack
				fontFamily="mono"
				color="fg.subtle"
				fontStyle="italic"
				textAlign="end"
				direction={direction}
				{...(direction === "row" && { separator: <StackSeparator /> })}
			>
				<HStack>
					<FaUpload />
					<Text>
						<DateFormatter dateString={publishedAt} />
					</Text>
				</HStack>
				<HStack>
					<FaRotateRight />
					<Text>
						<DateFormatter dateString={updatedAt} />
					</Text>
				</HStack>
			</Stack>
		</ClientOnly>
	);
}
