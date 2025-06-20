import { NextResponse } from "next/server";
import { generateRssFeed } from "@/lib/feed";

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
