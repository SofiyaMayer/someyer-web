# Sofie Meyer personal website

## Description

This is my personal website with some information about me and a blog that I intend to write. I built it with Payload, Next.js, React, Chakra UI and my own pretty hands as part of my mentoring program. I wanted to learn this stack and to blog about my journey as a developer, my studies at 42 Prague, experimenting with AI and other geeky stuff I'm into.

## Content

The website has two parts:

- A homepage introducing me, so you can see my cute face and learn who I am and what I do. It also links to my social media and shows how to reach me, so feel free to write to me about anything that interests you (cheesy, I know).

- A blog where I will write about my journey at 42 Prague. I also intend to publish some funny AI-written articles with my virtual cat Meowda, because I adore cats, even virtual ones.

## Deployment

I plan to self-host it on my Raspberry Pi 5 and expose it through a Cloudflare Tunnel (cloudflared). I also want to run Coolify on the Pi, because I want to learn it. The site will live at [sofiemeyer.org](https://sofiemeyer.org).

## Running locally

Clone the repo, then run:

```sh
cp .env.example .env
docker compose up -d postgres
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000` and the admin panel at `http://localhost:3000/admin`.

## AI usage

I use AI as little as possible, so I keep a slow enough pace to learn properly. I only use it for routine tasks that don't contain any logic.
