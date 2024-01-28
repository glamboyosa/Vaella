# Vaella

The official monorepo for the Vaella project.

> **NOTE** This repo is a WIP & subject to change.

It is built with:

- [CloudFlare D1](https://developers.cloudflare.com/d1/get-started/)
- [CloudFlare Workers](https://developers.cloudflare.com/workers/)
- [Hono](https://hono.dev/)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- Next.js 14 App Dir.
- [Shadcn](https://ui.shadcn.com)
- [Tailwind](https://tailwindcss.com)
- [Resend](https://resend.com)

### Apps and Packages

- `api`: Cloudflare Workers, Hono, GraphQL Yoga api.
- `docs`: Scaffolded [Next.js](https://nextjs.org/) app (not used.)
- `web`: Vaella web app built with [Next.js](https://nextjs.org/).
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications (not used.)
- `@repo/transactional`: Email components with [Resend](https://nextjs.org/)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Develop

To develop all apps and packages, you need a few environment variables.

#### Develop app/api

Run the following command:

```bash
cp dev.vars.example dev.vars
```

And follow this guide to create a [D1 Database](https://developers.cloudflare.com/d1/get-started/)

### Develop app/web

Run the following command:

```bash
cp .env.local.example .env.local
```

And follow the Resend guide to generate an [API Key](https://resend.com/docs/introduction)

Finally, run the following command:

```
cd my-turborepo
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```
