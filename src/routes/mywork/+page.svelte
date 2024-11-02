<script>
    import data from '../../lib/content/mywork.json';
</script>

<section>
    <div class="max-w-screen-lg block mr-auto ml-auto">
        <div>
            <div class="flex items-center justify-center text-center text-5xl m-6">
                <p>My Work</p>
            </div>
            <div class="flex items-center justify-center text-center m-6">
                <p>Articles published by Grist, American Public Media, National Public Radio, St. Louis Public Radio, Harvest Public Media, WSHU Public Radio, and independently.</p>
            </div>
        </div>
        <div class="ml-5 mr-5 mb-5">
            <hr />
            <p  class="text-4xl font-semibold ml-2 mt-3 mb-2">
                Featured
            </p>
            <div class="flex flex-col md:flex-row mt-5 mb-1 md:mb-7">
                {#each data.featured as articlePreview}
                    <div class="md:w-1/3 md:mb-0 mb-7">
                        <div class="flex flex-col md:justify-self-center pr-2 pl-2 mr-2 ml-2">
                            <div class="mt-2 mb-4 md:mb-2 md:mr-1 md:ml-1">
                                <a href={articlePreview.data.href}>
                                <img 
                                    class="object-cover md:w-60 md:h-40"
                                    src={articlePreview.data.img.src}
                                    alt={articlePreview.data.img.alt}
                                />
                                </a>
                            </div>
                            <div class="md:ml-1 text-2xl font-medium md:w-60">
                                <a href={articlePreview.data.href}
                                target="_blank"
                                >
                                    <p class="hover:text-hover-red hover:underline hover:underline-offset-1">{articlePreview.data.hed}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="ml-5 mr-5">
            <hr />
            
            <!-- For each year in the JSON file display the year -->
            

            {#each data.previews as preview}
            <p  class="text-4xl font-semibold ml-2 mt-3 mb-2">
                {preview.year}
            </p>

            <!-- For each article conained in each year, display each individual article -->
            
            {#each preview.articles as article}
            <div class="flex flex-col md:flex-row content-between max-w-full">
                <!-- Photo on left -->
                <div class="inline-block md:w-2/5 box-border items-start m-2">
                    <div class="flex flex-col">
                        <div>
                            <img 
                                class="w-full"
                                src={article.data.img.src} 
                                alt={article.data.img.alt}
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-xs self-end">
                                <em>{article.data.caption.credit}</em>                                
                            </div>
                            <p class="text-xs mt-2">
                                {article.data.caption.text}

                            </p>
                        </div>
                    </div>
                </div>
                <!-- Headline and Description (dek) on right -->
                <div class="md:w-3/5 items-start justify-end m-2">
                    <p class="-mt-1.5 mb-3 text-2xl font-semibold">
                        {article.data.headline}
                    </p>
                
                    <!-- For each description sentence in the articles object display one paragraph line with the sentence -->
                
                    {#each article.data.dek as dek}
                    <p class="mt-3 text-lg font-extralight">{dek}</p>
                    {/each}
                    <div class="flex justify-around mt-3">
                        {#each article.data.button as button}
                        <a  class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" 
                            href={button.href} 
                            target="_blank">
                            {button.text}
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
            <hr class="mt-3 mb-6"/>
            {/each}
            {/each}
        </div>
    </div>
</section>