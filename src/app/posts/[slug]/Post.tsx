import { PostHeader } from "@/components/post-header";
import { Prose } from "@/components/ui/prose-custom";
import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Params } from "./page";

export default async function Post(props: Params) {
	const params = await props.params;
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<>
			<PostHeader
				title={post.title}
				coverImage={post.coverImage}
				date={post.date}
				author={post.author}
			/>
			<Prose maxW="4xl">
				<Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
			</Prose>
		</>
	);
}
