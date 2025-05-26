---
id: "what-i-will-write"
title: "What I Will Write About"
date: "2025-05-25 18:22"
lang: "en"
summary: "A brief idea of the types of posts I will write in this blog."
---

# Introduction to the Personal Blog/Tutorials Section

In this section of the portfolio, you’ll find records of the projects I plan to work on, a development journal where I’ll share progress updates, challenges, and the solutions I discover. I may also include small tutorials on topics that interest me.

At the moment, I have some project ideas I’d like to develop. I still need to define them more clearly, but this blog will serve as a starting point to begin writing about them.

The projects I have in mind include:

- Improving the anime scraper
- Creating a mobile app that works as a virtual closet
- A chat feature within a mobile app
- Writing notebooks focused on exploratory data analysis to continue learning in that field

## Why am I interested in each project?

### Improving the anime scraper

I usually watch anime online, but I prefer downloading episodes to watch them on my phone or through a specific app like _VLC_. I also dislike buffering, and I often pause series midway or wait until they’re finished. Having the episodes downloaded is simply more convenient.

The issue is that downloading a full season (usually 12 or more episodes) can become tedious due to the amount of ads and link shorteners involved. That’s when I looked for a way to automate the download process.

The first version was a Python script using `Selenium` for scraping. It was efficient but not flexible since everything had to be pre-configured in the script. Later, I turned it into a `FastAPI` backend to allow usage from any REST-compatible client. From there, I built a web interface using `Next` to provide a more comfortable user experience (in this case, just for me and maybe a few friends). I finally used `docker-compose` to unify the frontend and backend into a single containerized environment, so I no longer had to worry about server dependencies. You can find a summary of the current version in the [Anime Scraper project](/en/project/anime-scraper).

Not long ago, I bought a [Mini PC](https://a.co/d/9tuUmhh) to use as a home server for deploying open-source tools and interesting apps. I deployed the scraper there so it could run 24/7 without needing my main computer turned on.

While exploring more about home servers and useful apps, I came across [Jellyfin](https://jellyfin.org/), which is essentially a media streaming server. It can fetch metadata for videos and display them in a Netflix-like interface for any device connected to the server.

I’d like to improve the scraper by adapting the downloaded folder structure to match Jellyfin’s standards, allowing it to detect episodes automatically. In that way, my anime scraper would act as a content provider, while Jellyfin handles metadata and streaming. There are also minor reasons like UX improvements, bug fixes, and aesthetics—since I’m the end user, those things matter to me.

### Creating a mobile app as a virtual closet

A few months ago, I realized I had lots of clothes I never wore, and others I used all the time. I wanted an easy-access inventory and a way to track which items I wore most often. I also thought of adding an AI model to identify clothing types and suggest outfit combinations.

The project is currently only in the design stage: I’ve planned the tech stack, architecture, features, and screens, but it’s not in development yet. You can view the screens here: [Clean Style](https://www.figma.com/design/uanCTXnN5up4c5tsSVAe0s/Clean-Style?node-id=0-1&t=ph1Zcf0zXlFCXbFk-1).

### A chat in a mobile app

This idea is pretty straightforward: I wanted to practice deeper usage of WebSockets and work with `React Native` alongside a free, replicated SQLite database service called [Turso](https://turso.tech/).

### Notebooks for exploratory data analysis

In short, my goal is to continue learning about data science.

---

I’ll try to write all these posts with minimal LLM intervention because I want to improve my writing skills, which I feel have diminished due to overreliance on AI tools. However, the English translations might be done with or without LLM help—but not the original drafts.
