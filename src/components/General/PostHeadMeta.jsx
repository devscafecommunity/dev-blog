// https://cafe-content.vercel.app/api/blog/postpreview/<slug>
import Head from "next/head";

export default function PostHeadMeta({ frontMatter, slug }) {
    let preview = `${process.env.SEARCH_ENGINE}/api/blog/postpreview/${slug}`;
    return (
        <Head>
            <meta property="og:type" content="website" />
            <meta property="og:url" content={preview} />
            <meta property="og:title" content={frontMatter.title} />
            <meta property="og:description" content={frontMatter.description} />
            <meta property="og:image" content={preview} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={preview} />
            <meta property="twitter:title" content={frontMatter.title} />
            <meta property="twitter:description" content={frontMatter.description} />
            <meta property="twitter:image" content={preview} />
            {/* <meta property="og:image" content={preview} /> */}
            {/* <meta property="og:image" content={frontMatter.cover} /> */}
        </Head>
    );
}
