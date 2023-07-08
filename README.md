# website-redesign
A redsign of [www.ericdschmid.com] using Svelte & Tailwindcss. 

## Development Log/Narrative

I started this project intending to use React, but on the third itiration of the project I decided to switch the frontend framework to Svelte. So why make the change?

The key reason is becasue I wanted to experiment with the Tailwindcss framework for CSS styling and loading that processor into a react framework was more arduous than I expected. 

Plus, after some research on Svelte and how it worked, I decided to switch because that framework appeared more suited to the _kind_ of end prodcut I was going for. I'm really attracted to its lightweight nature and that it does server side rendering. It seemed like the best option for a webiste made up of mostly static content that doesn't change all that often. 

I deployed this website using Netlify on 07/04/2023 and am pleased with the ease that comes with updating and building the site. This repo has two current branches: `main` and `development`. The live version on the web is built from `main` and `development` is where I work on new features or updates for the future.

## Current Next steps

I want to update some of the core content on the website to reflect some of the newer skils I've developed since that content was last updated. This could include a page for coding projects, espeically ones that implement D3 and data visualization. In general, I want to get more into DOM manipulation with Svelte and other ways to make pages responsive and interactive!

I also want to develope individual pages for each of the articles listed in on `/mywork`. This will include styling and formatting for a headeline, description (dek), body content. The challenge is that _some_ of the articles listed also have an audio component and I will need to investigate how to best handle that with Svelte.

I have to think also about how to create the paths to these individual articles and a way to make it a template that's driven by code blocks to self-populate. 

Another thing to investigate is whether Netlify is the best option for buildling and publishing the site. It works fine for now but I'm curious if there's a better way to do so. 

## Copyright information

© 2023 Eric D. Schmid

Images contained in this repo and published website are *_NOT_* for redistribution. You must contact the original photographer for permission if you wish to use them.
