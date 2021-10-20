# Portfolio

My portfolio using GitHub pages. It is a React app, so it requires some configurations before deploying it to GitHub pages.

## Prerequisites

- `Node.js`
- `npm `

## Procedures

1. Create React app.

```
npx create-react-app portfolio
cd portfolio
npm start
```

2. Install `gh-pages`.

```
npm install gh-pages --save-dev
```

3. Modify `package.json` file.
   - Add `homepage` key and value.
   ```
   "homepage": "https://esther-yang.github.io/portfolio/"
   ```
   - Add values to `scripts` (for project page such as this repo).
   ```
   "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
   }
   ```
   - Add values to `scripts` (for user page, tweak to push deployments to master).
   ```
   "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -b master -d build"
   }
   ```
4. Deploy the site.

```
npm run deploy
```

5. Configure GitHub project settings (for project page, user page do not need this step).

**Repo** > **Settings** > **Pages** > **Source** set to `gh-pages`.

## Reference

[React Documentation/Deployment](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)
