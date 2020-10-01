This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. Or any component at `src/components/*` The page auto-updates as you edit the file.

## Sync with Locize

Open `public/static/locales`

# Rename .env.example to .env.local and replace the project id and api key
```
LOCIZE_PROJECTID=ADD_PROJECT_ID
LOCIZE_API_KEY=ADD_API_KEY
```

Then in the terminal run: 
```bash
yarn syncTranslations
# or
yarn saveMissing
```
[https://github.com/locize/locize-cli][Documentation for locize-cli]

## How to commit

```bash
git add .
yarn commit
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
