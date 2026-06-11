
  # High-Converting Landing Page

  This is a code bundle for High-Converting Landing Page. The original project is available at https://www.figma.com/design/hwLIeibhXLOh5C1p1DuLgp/High-Converting-Landing-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Deploy to GitHub Pages

1. In `vite.config.ts` the `base` is set to `'/'` because this site will be served from the root of your custom domain `icve.mx`. If you later serve from a subpath (e.g. `username.github.io/repo`), change `base` to `'/repo/'`.
2. The Vite build is configured to output into the `docs` folder. Build the site:

```bash
npm install
npm run build:docs
```

3. Commit and push the `docs` folder to your `main` branch (or the branch you use):

```bash
git add docs
git commit -m "chore: build docs for GitHub Pages"
git push origin main
```

4. In your GitHub repository go to Settings → Pages and set the Source to `main` branch and folder `/docs`.

5. Wait a few minutes; your site will be available at `https://icve.mx/`.

Alternative: if you prefer automatic publishing, consider adding the `gh-pages` package or a GitHub Action to build and deploy on push.

## Deploying and Redeploying (manual vs automatic)

Recommended: use the included GitHub Actions workflow to deploy automatically on push to `main`.

- Automatic (recommended):
  1. Ensure the workflow `.github/workflows/deploy.yml` exists (it does in this repo).
  2. Push your code to `main`. The Action will run `pnpm build:docs` and publish the `docs` output to the `gh-pages` branch.
  3. In GitHub Settings → Pages set the Source to `gh-pages` branch and folder `/ (root)`.
  4. After the workflow completes, your site will be at `https://franciscomedinaag.github.io/Icve/`.

- Manual (alternate):
  1. Build locally:

```bash
npm install
npm run build:docs
```

  2. Commit the generated `docs` folder to your `main` branch and push:

```bash
git add docs
git commit -m "chore: build docs for GitHub Pages"
git push origin main
```

  3. In GitHub Settings → Pages set the Source to `main` branch and folder `/docs`.

Redeploying when you make changes

- With the automatic workflow: simply push your changes to `main` (merge a PR or push a commit). The Action will rebuild and redeploy.
- With the manual method: run the local build commands above again, commit the updated `docs` folder, and push.

Notes

- If you prefer the site to be served from `main`/`docs` (manual), you can remove the GitHub Action; otherwise the Action publishes to `gh-pages` and is the simplest automated option.
- If you change the repository name, update `base` in [vite.config.ts](vite.config.ts#L1-L200) accordingly.

## Configure Cloudflare DNS (required)

1. Open your Cloudflare dashboard for `icve.mx` and add the following DNS records (set the proxy status to **DNS only** / grey cloud):

- Type: A, Name: @, Content: 185.199.108.153
- Type: A, Name: @, Content: 185.199.109.153
- Type: A, Name: @, Content: 185.199.110.153
- Type: A, Name: @, Content: 185.199.111.153
- Type: CNAME, Name: www, Content: franciscomedinaag.github.io

2. Make sure the cloud icon is grey (DNS only). Cloudflare's proxy can interfere with GitHub Pages' certificate issuance.

3. In GitHub repository Settings → Pages, set the custom domain to `icve.mx` (or push will add the CNAME automatically via the workflow). Enable "Enforce HTTPS" once GitHub provisions the certificate.

Optional: After GitHub has issued a TLS certificate and the site is serving correctly, you may enable Cloudflare proxying (orange cloud) and set SSL/TLS → Mode to `Full (strict)` for optimal security. If you enable proxying, monitor for any certificate/redirect issues.