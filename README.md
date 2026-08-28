# Portfolio Website

## 👋 Welcome to my portfolio website

This platform serves as a digital showcase of my professional journey, skills, projects, and achievements. Feel free to explore my portfolio and discover the projects I've worked on. From web development and design to digital marketing and beyond, each project represents a labor of love and a testament to my commitment to excellence.

Content (hero, projects, experience, skills, testimonials, education, site settings) is managed through an embedded [Sanity](https://www.sanity.io) Studio rather than hardcoded, so the site can be updated without touching code.

## Demo

You can also check out the live demo of the portfolio website [here](https://alvinn.me).

## Technologies Utilized

- **Next.js** → All-in-one web framework for building fast, performance oriented websites.
- **React 19** → Latest React release with enhanced features for building dynamic and interactive user interfaces.
- **TypeScript** → Strongly typed JavaScript for improved developer productivity, maintainability, and code quality.
- **Sanity** → Headless CMS powering site content, embedded as a Studio at `/manage`.
- **Tailwind CSS** → Utility-first CSS framework for rapid UI development, responsive design, and modern styling.
- **Shadcn/UI** → Accessible, customizable component library built on Radix UI primitives.
- **Framer Motion** → Animation library used for page and component motion.
- **Lucide React** → Lightweight, customizable SVG icon set for modern UI design.
- **React-icons** → Unified icon library providing easy access to multiple icon packs in React.
- **Bun** → Fast JavaScript runtime and package manager for an improved development experience.

## Installation

Clone the Repo

```bash
git clone https://github.com/alvin-dennis/Personal-Portfolio-2.0.git
```

Installation of dependencies

```bash
bun install
```

### Environment Variables

Create a `.env.local` file in the project root with your Sanity project details:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=your-dataset-id
NEXT_PUBLIC_SANITY_API_VERSION=api-verson
```

You can find/create these at [sanity.io/manage](https://www.sanity.io/manage).

Start Server

```bash
bun dev
```

The site runs at `http://localhost:3000`, and the Sanity Studio is available at `http://localhost:3000/manage`.

### Sanity Scripts

```bash
bun sanity:dev        # run Studio standalone (outside Next.js)
bun sanity:deploy      # deploy the Studio
bun sanity:typegen     # generate types from your schema/queries
```

Schema definitions live in `src/sanity/schemaTypes`, and GROQ queries live in `src/sanity/lib/queries.ts`.

> [!NOTE]
> The information contained in this template, including names, images, and content, has been created entirely by me and reflects my own work and experiences. Any resemblance to real-life people, events, or situations is purely coincidental. You are encouraged to replace this content with your own information if using it as a template.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. Follow the [guidelines](https://github.com/alvin-dennis/Personal-Portfolio-2.0/blob/main/CONTRIBUTING.md) for contributing.

## Security

Found a vulnerability? See [SECURITY.md](https://github.com/alvin-dennis/Personal-Portfolio-2.0/blob/main/SECURITY.md) for how to report it privately.

Thank you for visiting, and I hope you enjoy your time here! If you have any questions or would like to collaborate, don't hesitate to reach out.

Happy browsing! ✨
