<!-- PROJECT LOGO -->
<br />
<div align="center">

  <img src="https://user-images.githubusercontent.com/21065594/173569213-b65a585c-9da4-410f-8344-87fe0597472d.svg" alt="Logo" width="240" height="80">

  <h3 align="center">WordPress WPGraphQL NextJS App</h3>

  <p align="center">
    This Next.js app connects to a WordPress WPGraphQL endpoint
    <br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fragudesign%2Fkb-nextjs&env=WORDPRESS_GRAPHQL_URL)
    <br />
    <br />
    <a href="https://github.com/ragudesign/kb-nextjs/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/ragudesign/kb-nextjs/issues/new">Request Feature</a>
    ·
    <a href="https://github.com/ragudesign/kb-wp">WordPress Plugin</a>
  </p>
</div>

<br>
<br>

<!-- ABOUT THE PROJECT -->
## :wave: About The Project

I started this project to learn more about Next.js and how i can use WordPress headless by exposing the data via WPGraphQL plugin. I created a small app which gets the posts from a custom post type and a search that uses a local json file so it's super quick which is generated on build.

![image](https://user-images.githubusercontent.com/21065594/174101146-f50138a3-0009-4941-b907-017941f28b4f.png)



<!-- GETTING STARTED -->
## :rocket: Getting Started

### Prerequisites

Setup a WordPress installation and add the following plugins:
* Install Knowledge Base WP Plugin
  ```sh
  https://github.com/ragudesign/kb-wp
  ```
  
* Install WPGraphQL Plugin
  ```sh
  https://www.wpgraphql.com/
  ```

### Installation

1. Clone the repo
```bash
yarn create next-app -e https://github.com/ragudesign/kb-nextjs
# or
npx create-next-app -e https://github.com/ragudesign/kb-nextjs
```

2. Add a .env file to the root with the following:
```
WORDPRESS_GRAPHQL_ENDPOINT=http://wordpressite.com/graphql
```

### Development

To start the project locally, run:

```bash
yarn dev
# or
npm run dev
```

<br>

<!-- LICENSE -->
## :frog: License

Distributed under the MIT License. See `LICENSE` for more information.
