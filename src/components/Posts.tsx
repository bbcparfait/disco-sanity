import { SanityDocument } from 'next-sanity';
import Link from 'next/link';

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post._id} href={post.slug.current}>
            <h2>{post.title}</h2>
          </Link>
        ))
      ) : (
        <div>No posts found</div>
      )}
    </main>
  );
}
