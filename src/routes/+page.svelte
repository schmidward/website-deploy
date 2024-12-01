<script>
	import Footer from "./Footer.svelte";


</script>

<body>
<section class="relative w-screen h-screen">
    <div 
        class="bg-fixed bg-center-top bg-auto sm:bg-cover w-full h-full" 
        style="background-image: url('./images/home-image-bikes.jpg');">
        <div class="bg-blue/40 w-full h-full">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <p class="text-white font-semibold text-5xl sm:text-7xl md:text-9xl text-center">Eric D. Schmid</p>
                <p class="text-white text-3xl sm:text-5xl md:text-7xl mt-7 text-center">Multimedia Creative</p>
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
            is an accomplished multimedia creative based in St. Louis with over six years of experience as a print, digital, and radio journalist. He asks 
            thoughtful questions that cut to the heart of a subject matter and has a keen ability to distill swaths of complex information into accessible, dynamic, 
            and engaging narratives. Eric has demonstrated success managing large scale projects both   
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/economy-business/2022-02-16/workers-at-dozens-of-metro-east-warehouses-have-no-safe-rooms-to-shelter-from-tornadoes" target="_blank">
                    independently
                </a></span> 
            and as 
                <span class="text-dark-red hover:text-hover-red"><a href="https://news.stlpublicradio.org/health-science-environment/2022-10-19/missouri-knew-of-contamination-in-springfields-groundwater-decades-before-anyone-told-residents" target="_blank">
                    part of a team</a></span> 
            and exhibits advanced skill fostering trust with community contacts, leading interviews and focus groups, writing for general audiences and subject matter experts, 
            developing long-term plans and strategies, and producing multimedia content for many platforms.</p>
        <p class="py-3">
            As a journalist, he has garnered awards and national recognition for his revelatory investigative reporting and has had work appeared many regional and national publications including 
            <span class="text-dark-red hover:text-hover-red"><a href="https://grist.org/author/eric-schmid-st-louis-public-radio/" target="_blank">
                Grist</a></span>, 
            <span class="text-dark-red hover:text-hover-red"><a href="https://www.marketplace.org/author/eric-schmid/" target="_blank">
                Marketplace</a></span>,
            <span class="text-dark-red hover:text-hover-red"><a href="https://www.npr.org/" target="_blank">
                NPR</a></span>,
            <span class="text-dark-red hover:text-hover-red"><a href="https://undark.org/undark-author/eric-schmid-st-louis-public-radio/" target="_blank">
                Undark Magazine</a></span>. 
            He loves the challenge that comes with learning something new and regularly looks for any opportunity to expand his already diverse skillset.</p>
        <p class="py-3">Eric joined St. Louis Public Radio in June 2019 as a Report for America Corps Member, tasked with developing and leading the station’s 
            coverage strategy of suburban St. Louis communities in Illinois. In June 2022, he was promoted to cover 
            economic development across the 2.8 million-person St. Louis region.</p>
        <p class="py-3">Before joining St. Louis Public Radio, Eric held internships at Fox News Channel, NPR member station WSHU Public Radio, and AccuWeather. He graduated from 
            <span class="text-dark-red hover:text-hover-red"><a href="https://www.stonybrook.edu/" target="_blank">
                Stony Brook University
            </a></span>as the valedictorian of the <span class="text-dark-red hover:text-hover-red"><a href="https://www.stonybrook.edu/journalism/" target="_blank">School of Journalism</a></span>.
        </p>
        <p class="py-3">Lead image by Brian Muñoz. All other photography on this page by Eric Schmid.</p>
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
