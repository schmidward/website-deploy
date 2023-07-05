<script>
    import resumes from "../../lib/content/resume.json"
    let resume = resumes.journalism;
    let jrnStyle = 'bg-hover-red border-solid border-4 border-black text-white mt-3 mb-3 p-5 text-center';
    let softwareStyle = 'bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red';
    function setToJournalism() {
        resume = resumes.journalism;
        jrnStyle = 'bg-hover-red text-white mt-3 mb-3 p-5 text-center';
        softwareStyle = 'bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red';
    } 
    function setToSoftware() {
        resume = resumes.software;
        softwareStyle = 'bg-hover-red border-solid border-4 border-black text-white mt-3 mb-3 p-5 text-center';
        jrnStyle = 'bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red';
    }
    
    
    console.log(resume);
</script>

<section>
    <div class="max-w-screen-lg block mr-auto ml-auto">
        <div class="m-10 text-7xl font-semibold text-center">
            Resume
            <div class="flex flex-col ml-44 mr-44 mt-6 mb-4 text-xl md:ml-0 md:mr-0 md:flex-row md:justify-around">
                <button 
                    class={jrnStyle} 
                    on:click={setToJournalism}
                    >
                    Journalism</button>
                <button 
                    class={softwareStyle} 
                    on:click={setToSoftware}
                    >                   
                    Software Development
                </button>
            </div>
        </div>
        <div class="ml-8 mr-8 mb-10 flex flex-col">
            <hr class="mb-8" />
                <div>
                    <p class="-ml-1 text-8xl font-bold">{resume.name}</p>
                    <p class="text-2xl font-semibold ">{resume.subhead}</p>
                    <p class="font-light text-lg mt-2">{resume.dek}</p>
                    <p class="font-extralight text-lg  mt-3">
                        {#each resume.links as link}
                        {link.text}<span class="text-dark-red hover:text-hover-red"><a href={link.href} target="_blank">{link.href}</a></span>
                        {/each}
                    </p>
                    {#if resume.projects}
                    <p class="text-2xl font-semibold mt-3 ">{resume.projectHed}</p>
                    {#each resume.projects as project}
                    <p class="text-lg mt-2"><span class="font-semibold">{project.title}</span> — {project.subhead}</p>
                        {#each project.dek as dek}
                    <p class="leading-tight text-base">{dek}</p>
                        {/each}
                    {/each}
                    {/if}
                </div>
                <div class="flex flex-col lg:flex-row">
                    <div class="mr-5 lg:w-9/12">
                        <p class="text-2xl font-semibold mt-3">{resume.experienceHed}</p>
                        {#each resume.experiences as experience}
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">{experience.title}</span> — {experience.subhead}</p>
                            <p class="-mt-1 font-light"><em>{experience.date}</em></p>
                            <p class="leading-none">{experience.dek}</p>
                            {#if experience.subdek}
                            {#each experience.subdek as subdek}
                            <p class="mt-1 ml-5 leading-none text-base">{subdek}</p>
                            {/each}
                            {/if}
                        </div>
                        {/each}
                        <p class="text-2xl font-semibold mt-3 ">{resume.educationHed}</p>
                        {#each resume.education as education}
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">{education.title}</span>{education.subhead}</p>
                            <p class="leading-none">{education.dek}</p>
                            {#if education.subdek}
                            {#each education.subdek as subdek}
                            <p class="mt-1 ml-5 leading-tight text-base">{subdek}</p>
                            {/each}
                            {/if}
                        </div>
                        {/each}
                    </div>
                    <div class="flex flex-row lg:flex-col lg:w-3/12">
                        <div class="w-2/5 lg:w-auto">
                            <p class="text-2xl font-semibold mt-3">{resume.skillsHed}</p>
                            {#each resume.skills as skill}
                            <div class="mb-2">
                                <p class="text-lg leading-none font-semibold mb-2 mt-2">{skill.title}</p>
                                {#each skill.dek as dek}
                                <p class="leading-tight text-lg">{dek}</p>
                                {/each}
                            </div>
                           {/each}
                        </div>
                        <div class="w-3/5 lg:w-auto">
                            <p class="text-2xl font-semibold mt-3 ">{resume.awardsHed}</p>
                            {#each resume.awards as award}
                                <div class="mt-2 mb-3">
                                    <p class="text-lg font-semibold leading-none">{award.title}</p>
                                    {#each award.dek as dek}
                                    <p class="leading-none mt-1">{dek}</p>
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>