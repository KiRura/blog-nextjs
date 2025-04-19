import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function markdownToHtml(markdown: string) {
	return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
}
