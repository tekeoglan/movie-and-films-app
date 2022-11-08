## Requirements
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
- [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) to get an API key.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/tekeoglan/shows-and-films-app.git
cd shows-and-films-app
yarn install
```

Second, create ***.env.local*** file from root directory then input API key in it:

```
TMDB_API_KEY=YOUR_KEY
```

Third, input your TMDB_API_KEY into next.config.js file:

```
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  }
```

Last, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
