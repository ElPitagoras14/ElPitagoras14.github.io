---
id: "what-i-will-write"
title: "What I Will Write About"
date: "2025-05-25 18:22"
lang: "en"
summary: "A brief overview of the types of articles I’ll be writing on the blog."
---

# Introduction to the blog/personal articles/tutorials section

In this section of the portfolio, you will find records of future projects I plan to work on, a development diary where I’ll share my progress, the challenges I face, and the solutions I find. I also intend to include short tutorials on topics that interest me.

Currently, I have a few project ideas in mind. I still need to refine them a bit more, but I’d like this blog to serve as a starting point for writing about them.

The projects I’ve thought of include:

- Improving my anime scraper
- Creating a mobile app that works as a virtual closet
- Building a chat feature in a mobile app
- Developing exploratory data analysis notebooks and continuing to grow in that field

## Why am I interested in each project?

### Improving the anime scraper

I usually watch anime online, but I prefer downloading episodes and watching them on my phone or with a specific app like _VLC_. I also don’t like waiting for episodes to buffer. I tend to watch completed series or leave them halfway due to various reasons, so having them already downloaded is more convenient for me.

The issue with downloading episodes is that there are usually 12 or more, and while the process is simple, it becomes tedious because of all the ads and URL shorteners you have to go through for each episode. That’s when I decided to find a way to automate the download process.

The first version was a Python script using `Selenium`. It was efficient but not very flexible since everything had to be hardcoded. Later, I turned it into a `FastAPI` REST API so it could be used from any language that supports REST. From there, I built a web frontend to interact with it more comfortably (mainly for myself and maybe some friends), using `Next.js`. Finally, I bundled the frontend and backend using `docker-compose` so everything could run in a container, eliminating worries about server environments. You can see a summary of the current version in the [Anime Scraper](/en/project/anime-scraper) project.

More recently, I bought a [Mini PC](https://a.co/d/9tuUmhh) to use as a home server for open-source projects or interesting applications. I deployed the scraper there so I could access it 24/7 without needing to turn on my main computer.

While researching more about personal servers and useful applications, I discovered [Jellyfin](https://jellyfin.org/), which is basically a video streaming server. It can fetch metadata from various types of media (in this case, videos), display them in a Netflix-like interface, and stream them to connected devices.

The idea of improving the scraper stems from adapting the download file system to Jellyfin’s standards, so it can detect episodes correctly. This way, my anime scraper will act as a content provider that Jellyfin can use, fetch metadata from, and serve. There are also smaller reasons, mostly related to UX (yes, I’m the user), some bugs, and aesthetic improvements I’ve identified.

### Creating a mobile app that works as a virtual closet

A few months ago, I realized I had a lot of clothes I wasn’t wearing and others that I used frequently. I wanted a way to easily inventory my wardrobe and track which items I used the most. I also thought about adding an AI model to recognize clothing types and suggest outfit combinations.

The project is currently only in the design phase. That is, the technologies, architecture, features, and screens are defined, but it’s not in development yet. You can view the design screens here: [Clean Style](https://www.figma.com/design/uanCTXnN5up4c5tsSVAe0s/Clean-Style?node-id=0-1&t=ph1Zcf0zXlFCXbFk-1).

### Building a chat feature in a mobile app

The reason is simple: I wanted to practice working more deeply with WebSockets and try out `React Native` along with a free SQLite-based database service with replication called [Turso](https://turso.tech/).

### Exploratory Data Analysis notebooks

In short, I want to learn more about data science.

---

I will try to write all of these articles with minimal assistance from any LLM, as I want to improve my writing skills, which I feel I’ve lost due to constantly relying on LLMs. However, translations into English may be done with or without LLM assistance, but not the actual writing.
