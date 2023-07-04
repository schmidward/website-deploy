# website-redesign
Redesigning [www.ericdschmid.com] with Svelte + Tailwindcss. 

## Development Log/Narrative

I started this project intending to use React (and there's even evidence of it if you check out the `react-version` folder.) So why change to Svelte?

The key reason is becasue I wanted to experiment with the tailwindscss and loading that processor into a react framework was more arduous than I expected. 

Plus, after some research on Svelte and how it worked, I decided to switch since that framework appeared more suited to the _kind_ of end prodcut I was going for. I'm really attracted to how lightweight it is and that it does server side rendering. That seemed like the best option for a webiste made up of mostly static content that doesn't change all that often. 

This is obviously a work in progress and I try to add to the build as often as possible, but that is challenging given development must come outside of my full-time job.

## Current Next steps

I want to develope individual pages for each of the articles listed in on `/mywork`. This will include styling and formatting for a headeline, description (dek), body content. The challenge is that _some_ of the articles listed also have an audio component and I will need to investigate how to best handle that with Svelte.

I have to think also about how to create the paths to these individual articles and a way to make it a template that's driven by code blocks to self-populate. Luckily, Svelte is super simple in defining routes/paths compared to other frontend frameworks.

© 2023 Eric D. Schmid

Images contained in this repo are *_NOT_* for redistribution. You must contact the original photographer for permission if you wish to use them.
