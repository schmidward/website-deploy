import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class=""><nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-white bg-red"><div class=""><p class="text-3xl hover:text-grey"><a href="/">Eric D. Schmid</a></p></div>

        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>


            
            <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu"><ul class="pt-4 md:flex md:justify-between md:pt-0 text-lg"><li><a class="md:p-4 block px-2 hover:text-grey" href="/">Home</a></li>
                    <li><a class="md:p-4 block px-2 hover:text-grey" href="/mywork">My Work</a></li>
                    <li><a class="md:p-4 block px-2 hover:text-grey" href="/about">About Me</a></li>
                    <li><a class="md:p-4 block px-2 hover:text-grey" href="/resume">Resume</a></li></ul></div></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-red text-white"><div class="flex flex-col items-center justify-center py-2 px-2"><p class="m-0">© 2023 Eric D. Schmid</p>
        <p><a class="m-0 hover:text-grey" href="https://github.com/schmidward/website-deploy/tree/main" target="_blank">See the code that runs this webiste</a></p></div></footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-14215mr_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"><!-- HEAD_svelte-14215mr_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
