import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Sergio Barria'
};

export default function About() {
    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold md:text-3xl">About Me</h1>

            <div className="prose prose-invert">
                <p>
                    I&apos;ve loved building things for as long as I can remember, that&apos;s the
                    main reason I became a <strong>civil engineer.</strong> I find passion in
                    learning new things and I&apos;m always looking for new challenges. That&apos;s
                    why I decided to become a <strong>software engineer</strong>.
                </p>

                <p>
                    I took my first programming course back in college and I fell inlove with it. I
                    started learning by myself and never stopped. I&apos;ve been working as a
                    software engineer for a few years now, mostly with <strong>JavaScript</strong>,
                    but also, with other languages like <strong>PHP and Python</strong>.
                </p>

                <p>
                    I&apos;m currently working as a full stack developer involved in different
                    projects for both web and mobile platforms.
                </p>

                <p>
                    When I&apos; not coding, I love playing video games, watching movies or series,
                    learning other things that peak my interest, and, spending time with my family.
                </p>
            </div>

            <hr className="my-8 border-neutral-500/50" />

            <h2 className="mb-6 text-2xl font-bold md:text-3xl">About this Site</h2>
            <div className="prose prose-invert">
                <p>
                    Working on my personal website is a way for me to learn, explore and improve my
                    skills. One of my biggest mistakes early on was trying to overengineer my
                    website. I was using a lot of libraries and frameworks, and I was trying to user
                    the latest and greatest of everything, with crazy, overcomplicated designs and
                    animations. I was trying to do too much, and I was doing it wrong.
                </p>

                <p>
                    The more I work on my style, the more I ejoy working on minimalistic, yet
                    beautiful designs. I&apos;m always looking for new ideas and inspirations, to
                    improve my website. With that in mind, is not surprise that I find a lot of
                    inspiration in{' '}
                    <a href="https://leerob.io" target="_blank" rel="noopener noreferrer">
                        Lee Robinson&apos;s minimalistic style
                    </a>
                    .
                </p>

                <p>
                    One of my challenges when re-building this website was to keep it as simple as I
                    could and use as few libraries/third-party packages as possible.
                </p>

                <p>
                    The first step was to select a stack. Over the years, I&apos;ve tested several
                    frameworks like:{' '}
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        Next.js
                    </a>
                    ,{' '}
                    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">
                        Gatsby
                    </a>
                    , and more recently{' '}
                    <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">
                        Astro.
                    </a>
                    . And, although I&apos;ve found things I like and don&apos;t like on all of
                    these frameworks I finally decided to go with the one I like the most.
                </p>

                <p>
                    And yes, I know. Even a framework like Next.js can be considered overkill to
                    build something that can be easily created with simple HTML and CSS like this
                    website. But, I&apos;m one of those who think that you should use whatever you
                    prefer as long as it can get the job done, so for that, I think I&apos;m going
                    to give myself a pass on this selection 😅.
                </p>

                <p>
                    I&apos;m also a huge fan of{' '}
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        Tailwind CSS
                    </a>
                    , (yes, I&apos;m part of the Tailwind cult 😌) and I use it every time I can.
                    For a database I decided to explore{' '}
                    <a href="https://xata.io/" target="_blank" rel="noopener noreferrer">
                        Xata.io
                    </a>
                    , so far it has been a greate DX. Previously I was using Prisma as my ORM with
                    Planetscale but again, I wanted to try something different and given that Xata
                    also give me a query client it could leave a smaller footprint than the previous
                    two.
                </p>

                <p>
                    Finally, to manage the blog content I&apos; using{' '}
                    <a href="https://contentlayer.dev/" target="_blank" rel="noopener noreferrer">
                        Conentlayer
                    </a>{' '}
                    with MDX.
                </p>
            </div>

            <hr className="my-8 border-neutral-500/50" />
        </div>
    );
}
