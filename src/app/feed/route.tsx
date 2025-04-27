import { generateRssFeed } from "@/lib/feed";
import { NextResponse } from "next/server";

export async function GET() {
	const xml = await generateRssFeed();
	const response = new NextResponse(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "s-maxage=86400, stale-while-revalidate",
		},
	});
	return response;
}
