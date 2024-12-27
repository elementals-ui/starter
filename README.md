# PNPM Monorepo Starter

A minimal monorepo starter using PNPM workspaces with a common library and React frontend app.

## Prerequisites

- Node.js >= 20.18.0
- PNPM >= 9.12.1

If you haven't enabled PNPM yet:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Project Structure

```
.
├── apps/
│ └── frontend/ # React frontend application
├── packages/
│ └── common/ # Shared utilities library
├── package.json
└── pnpm-workspace.yaml
```
## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Build the common package:

```bash
pnpm build
```

3. Start the development server:

```bash
pnpm start
```

This will run both the frontend app and common library in watch mode using concurrently.

## Development Workflow

The repository uses:
- [Biome](https://biomejs.dev/) for linting and formatting
- [Husky](https://typicode.github.io/husky/) for Git hooks
- [Commitlint](https://commitlint.js.org/) for commit message linting

## Commit Message Format

The commit message format is based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

The commit contains the following structural elements, to communicate intent to the consumers of your library:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
- footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.
- Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.


## Using this Template

### Option 1: GitHub Template (Recommended)
1. Click the "Use this template" button above
2. Select "Create a new repository"
3. Choose a repository name
4. Select visibility (Public/Private)
5. Click "Create repository from template"
6. Clone your new repository
7. Install dependencies:
   ```bash
   pnpm install
   ```
8. Start development:
   ```bash
   pnpm start
   ```

## License
MIT
