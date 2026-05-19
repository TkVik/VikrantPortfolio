import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[3fr_1fr]">
        <div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            Hi, I'm Vikrant ♛
          </h1>

          <p className="text-lg leading-8">
            {`I'm a recent graduate from the University of Maryland, College Park with a B.S. in Computer Science earned in May 2026. I'm also a software engineer passionate about full-stack development, cloud technologies, and building scalable applications. I currently volunteer as a software engineer for the UMCP Gaming Club, where I work on web development projects using JavaScript and C# to improve community tools and team statistics platforms. Outside of software engineering, you'll probably find me playing chess, traveling abroad, or competing in high ranked video game titles.`}
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
              src="/goat-picture.jpg"
              alt="Profile picture"
              className="h-56 w-56 rounded-full object-cover border-2 border-neutral-700"
          />
        </div>
      </div>

      <div className="my-12">
        <BlogPosts />
      </div>
    </section>
  )
}