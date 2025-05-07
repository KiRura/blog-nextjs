export type CoverImage = {
	url: string;
	height: number;
	width: number;
};

export type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	subtitle: string;
	coverImage?: CoverImage;
	content: string;
};

export type RssPost = {
	id: string;
	title: string;
	subtitle: string;
	coverImage?: CoverImage;
};
