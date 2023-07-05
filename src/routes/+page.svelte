<script>
	import Footer from "./Footer.svelte";


</script>

<body>
<section class="relative w-screen h-screen">
    <div 
        class="bg-fixed bg-left-top bg-cover w-full h-full" 
        style="background-image: url('./images/home-image-bikes.jpeg');">
        <div class="bg-blue/40 w-full h-full">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <p class="text-white font-semibold text-5xl sm:text-7xl md:text-9xl text-center">Eric D. Schmid</p>
                <p class="text-white text-3xl sm:text-5xl md:text-7xl mt-7 text-center">Investigative Journalist | Software Engineer</p>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="m-1/10 md:mr-36 md:ml-36 lg:mr-48 lg:ml-48 md:mt-20 md:mb-20 grid gap-4 grid-cols-2">
        <img class="object-cover" src="./images/2022-02-11_ES_Alicia-Steele.jpeg" alt="Alicia Steel sitting with her son's service dog."/>    
        <img class="object-cover" src="./images/ranch-sunset-crop.jpg" alt="A sunset in Wyoming."/>
        <img class="object-cover" src="./images/2022-08-14_ES_Underground-Cave.jpeg" alt="An underground cave in southern missouri"/>
        <img class="object-cover" src="./images/nascar-crop.jpg" alt="Joey Logano celebrates a victory in the Illinois 300 NASCAR race."/>
    </div>

<div class="max-w-screen-lg block mr-auto ml-auto text-lg md:text-xl">
    <div class="mt-7 mr-1/5 ml-1/5">
        <p class="py-3">
                <span class="font-bold text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/people/eric-schmid" target="_blank">
                    Eric Schmid
                </a></span> 
            is a multimedia journalist based in St. Louis with over five years of experience in print-, digital-, and audio-focused newsrooms. He has demonstrated 
            success developing 
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/people/eric-schmid" target="_blank">
                    strong continuing news coverage
                </a></span> 
            and producing large scale reporting projects both 
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/economy-business/2022-02-16/workers-at-dozens-of-metro-east-warehouses-have-no-safe-rooms-to-shelter-from-tornadoes" target="_blank">
                    independently
                </a></span> 
            and as 
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/health-science-environment/2022-10-19/missouri-knew-of-contamination-in-springfields-groundwater-decades-before-anyone-told-residents" target="_blank">
                    part of a team</a></span>. 
            This includes advanced skill with source building, story pitching, public records, long-term coverage planning, interviewing, and audio editing/mixing.</p>
        <p class="py-3">
            His reporting experience spans breaking hard news to enterprise and investigative features and he excels at producing content native to 
            digital/print and audio/radio platforms. Eric gravitates toward complicated and nuanced stories and he enjoys the challenge of ingesting 
            and distilling large swaths of information into cohesive, intriguing, and conscice stories. He is adept at covering many topics, though his 
            enterprise work regularly returns to stories about the 
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/health-science-environment/2023-06-29/wetlands-restoration-is-key-to-avoiding-the-worst-of-future-floods-along-the-mississippi" target="_blank">
                    environment</a></span>, and
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/economy-business/2023-05-03/st-louis-economic-future-requires-a-lot-more-trained-workers-and-fast" target="_blank">
                    economics</a></span>.
        </p>
        <p class="py-3">Eric joined St. Louis Public Radio in June 2019 as their first ever Metro East Reporter, tasked with expanding and developing the station’s 
            coverage of suburban St. Louis communities east of the Mississippi River. In June 2022, he was promoted to cover economic development across St. 
            Louis, a region of 2.8 million people.</p>
        <p class="py-3">Before joining St. Louis Public Radio, Eric held internships at Fox News Channel, NPR member station WSHU Public Radio, and AccuWeather. He graduated from 
            <span class="text-dark-red hover:text-hover-red"><a href="https://www.stonybrook.edu/" target="_blank">
                Stony Brook University
            </a></span>in 2018 as the valedictorian of the <span class="text-dark-red hover:text-hover-red"><a href="https://www.stonybrook.edu/journalism/" target="_blank">School of Journalism</a></span>.
        </p>
        <p class="py-3">Lead image by Brian Muñoz. All other photography by Eric Schmid.</p>
    </div>
    <div class="flex flex-col mr-1/4 ml-1/4 mt-3 mb-4 md:ml-0 md:mr-0 md:flex-row md:justify-around">
        <a  class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" 
            href="/about">
            About Me
        </a>
        <a  class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" 
            href="/mywork">
            Published Work
        </a>
        <a  class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" 
            href="/resume">
            Resume
        </a>
    </div>
</div>

</section> 
</body>
