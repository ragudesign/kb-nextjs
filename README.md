<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://user-images.githubusercontent.com/21065594/152661449-28ff66fe-9d6c-4d65-9a47-6d6848f232eb.svg" alt="Logo" width="240" height="80">

  </a>

  <h3 align="center">WordPress WPGraphQL NextJS App</h3>

  <p align="center">
    This Next.js app connects to a WordPress WPGraphQL endpoint
    <br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fragudesign%2Ffaq-desk-nextjs&env=WORDPRESS_GRAPHQL_URL)
    <br />
    <br />
    <a href="https://faq-desk-nextjs.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/ragudesign/faq-desk-nextjs/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/ragudesign/faq-desk-nextjs/issues/new">Request Feature</a>
    ·
    <a href="https://github.com/ragudesign/faq-desk-wp">WordPress Plugin</a>
  </p>
</div>

<br>
<br>

<!-- ABOUT THE PROJECT -->
## :wave: About The Project

I started this project to learn more about Next.js and how i can use WordPress headless by exposing the data via WPGraphQL plugin. I created a small app which gets the posts from a custom post type and a search that uses a local json file so it's super quick which is generated on build.

![image](https://user-images.githubusercontent.com/21065594/152663399-9eef21df-0e32-4a0e-b7ea-34339d958369.png)



<!-- GETTING STARTED -->
## :rocket: Getting Started

### Prerequisites

Setup a WordPress installation and add the following plugins:
* Install FAQ Desk WP Plugin
  ```sh
  https://github.com/ragudesign/faq-desk-wp
  ```
  
* Install WPGraphQL Plugin
  ```sh
  https://www.wpgraphql.com/
  ```

### Installation

1. Clone the repo
```bash
yarn create next-app -e https://github.com/ragudesign/faq-desk-nextjs
# or
npx create-next-app -e https://github.com/ragudesign/faq-desk-nextjs
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