import { generateRssFeed } from "@/lib/feed";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
	const xml = await generateRssFeed();
	const response = new NextResponse(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
		},
	});
	return response;
}
