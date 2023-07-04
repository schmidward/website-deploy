<script>
    import { onMount } from "svelte";
    onMount(() => {
        const menu = document.querySelector('#menu')
    });
    function menuToggle() {
        menu.classList.toggle('hidden');
    }
    function menuReset() {
        menu.classList.toggle('hidden');
    }

</script>

<header class=''>
    <nav class="flex flex-wrap
                items-center
                justify-between
                w-full
                py-4
                md:py-0
                px-4 
                text-white 
                bg-red">
        <div class="">
            <p class="text-3xl hover:text-grey"><a href="/">Eric D. Schmid</a></p>
        </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            on:click={menuToggle}
            on:keypress={menuToggle}
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>


            
            <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul class='pt-4 md:flex md:justify-between md:pt-0 text-lg'>
                    <li>
                        <a on:click={menuReset} on:keypress={menuReset} class="md:p-4 block px-2 hover:text-grey" href="/">Home</a>
                    </li>
                    <li>
                        <a on:click={menuReset} on:keypress={menuReset} class="md:p-4 block px-2 hover:text-grey" href="/mywork">My Work</a>
                    </li>
                    <li>
                        <a on:click={menuReset} on:keypress={menuReset} class="md:p-4 block px-2 hover:text-grey" href="/about">About Me</a>
                    </li>
                    <li>
                        <a on:click={menuReset} on:keypress={menuReset} class="md:p-4 block px-2 hover:text-grey" href="/resume">Resume</a>    
                    </li>
                </ul>
            </div>
            
        </nav>
</header>  