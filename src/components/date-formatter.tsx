"use client";

import { format, parseISO } from "date-fns";

export function DateFormatter({ dateString }: { dateString: string }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
}
