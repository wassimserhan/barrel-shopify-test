# Contributing to the 3-Hour Shopify Test

## Prerequisites

1. Running a computer with terminal access: Windows with WSL or MacOS or a Debian-based Linux OS.
2. Ensure `git` is installed on your system.
3. Ensure `node` (LTS) and its package manager `npm` are installed on your system.

   > Note: `node v20.12.21` is confirmed to work with this setup.
4. Sign in or create a free account on Github.
5. Sign in or create a free partner account on Shopify.

## Local Environment Setup

1. Clone the **Barrel Shopify Test** repo from: [https://github.com/barrel/barrel-shopify-test](https://github.com/barrel/barrel-shopify-test)

   ```bash
   cd ~/Sites
   git clone git@github.com:barrel/barrel-shopify-test.git
   cd barrel-shopify-test
   ```
2. Fork or clone and push to a new/empty repository of your own.
3. 
4. Assume the following git branches and use them as they relate to your work:
   1. production = `main`
   2. development = `develop`
   3. feature = `feature/*`
   4. bugfix = `bugfix/*`
   5. hotfix = `hotfix/*`
5. Push your work branch to your fork and submit a **Pull Request** back to the main repository.

## Public Environment Setup

1. With your Shopify partner account, create a [development](https://help.shopify.com/en/partners/building-stores-for-merchants/creating-a-development-store) sandbox store.
2. Once you have a store, connect your Github fork with Shopify.
3. Once you store is up and running, install [ExIm ‑ Export / Import data](https://apps.shopify.com/exim-export-import-pages-blogs-theme-settings) and [import](https://www.dropbox.com/sh/q8lzzlnive1vi5d/AAC8B8PIPWjZ1yN2rtQMItQIa?dl=0) the blog posts.
4. Finally run a test deployment to the theme by updating your `package.json` with the correct store.

## Workflow Details

**Sample “Production Site”**

- https://barrel-base.myshopify.com/

1. Commit your work locally
2. Push to either a forked remote or to a new/empty repository of your own.

## The Test

The test is this: get setup, read requirements, and then add the new features.

1. Setup: This issue includes the setup details.
2. Specs: Read through issue [#3](https://github.com/barrel/barrel-shopify-test/issues/3) for the full designs.
3. Code: Add these two (2) new features from issues [#1](https://github.com/barrel/barrel-shopify-test/issues/1) and [#2](https://github.com/barrel/barrel-shopify-test/issues/2).

**Notes:** We do expect all applicants that aren't familiar with the tech stack and tools to take the time to understand them.
