import { c as create_ssr_component, f as add_attribute, e as escape, d as each } from "../../../chunks/index.js";
const software = {
  name: "Eric D. Schmid",
  subhead: "Software Developer in St. Louis, MO",
  dek: "I excel asking thoughtful and pointed questions that cut to the heart of an issue or topic and I relish the chllenge of distilling complex information into clear and manageable packages. My experience as an investigative journalist equips me with the skills to quickly solve complex problems and it means I'm comfortable communicating and collaborating with anyone.",
  links: [
    {
      text: "GitHub: ",
      href: "https:/github.com/schmidward"
    },
    {
      text: " | LinkedIn: ",
      href: "https:/www.linkedin.com/in/ericdschmid/"
    }
  ],
  projectHed: "Project Experience",
  projects: [
    {
      title: "User Administration Context",
      subhead: "Web based user registration and login service",
      dek: [
        "• Implements Spring Security, with JWT token, CSRF cookies, REST and remote database to administer users and secure private APIs",
        "• Frontend user context, login and registration designed in React"
      ]
    },
    {
      title: "www.ericdschmid.com",
      subhead: "Redesign of personal portfolio website to leverage Svelte and Tailwindcss frameworks",
      dek: [
        "• Features custom built components and routing to display static news content dynamically across all screen sizes",
        "• Implements JSON and OOP principles for lightweight, scaleable, and reusable code"
      ]
    }
  ],
  experienceHed: "Professional Experience",
  experiences: [
    {
      title: "Economic Development Reporter",
      subhead: "St. Louis Public Radio, St. Louis, MO",
      date: "June 2022 - Present",
      dek: "Researches and writes stories on efforts from businesses’, governments’, nonprofits’, and others to create economic opportunity and grow the population in Greater St. Louis",
      subdek: [
        "• Promoted after three years of outstanding performance in previous position",
        "• Facilitates and leads interviews with people from many backgrounds including elected officials, business executives and military leaders"
      ]
    },
    {
      title: "Metro East Reporter",
      subhead: "St. Louis Public Radio, Belleville, IL",
      date: "June 2019 - June 2022",
      dek: "Worked remotely producing articles about Illinois communities adjacent to St. Louis",
      subdek: [
        "• Pioneered news coverage for 750,000 people who hadn’t been previously served",
        "• Produced web content reaching more than 200,000 unique users annually"
      ]
    },
    {
      title: "Freelance Reporter",
      subhead: "National Public Radio, Marketplace, Science Friday",
      date: "April 2018 - Present",
      dek: "Pitches, reports, and produces original news content for national platforms"
    },
    {
      title: "Dow Jones News Fund Digital Media Intern",
      subhead: "AccuWeather, State College, PA",
      date: "June 2018 - August 2018",
      dek: "Produced video content toping five million views on company website and socials"
    },
    {
      title: "College Associate",
      subhead: "Shepard Smith Reporting, Fox News Channel, New York, NY",
      date: "June 2017 - August 2017",
      dek: "Sourced video content for a live national broadcast reaching millions of people each day"
    }
  ],
  educationHed: "Education",
  education: [
    {
      title: "LaunchCode",
      subhead: " - St. Louis, MO — September 2022 - June 2023",
      dek: "30-week full-stack development course in JavaScript, Angular, Java, and Spring Boot",
      subdek: [
        "• Project experience reviewing and completing code bases to unit test specifications"
      ]
    },
    {
      title: "Stony Brook University",
      subhead: " - Stony Brook, NY — Class of 2018",
      dek: "Bachelor of Arts in Journalism, Business Management Minor"
    }
  ],
  skillsHed: "Skills",
  skills: [
    {
      title: "Programming Languages",
      dek: [
        "• Java",
        "• JavaScript / TypeScript",
        "• HTML5 / CSS3"
      ]
    },
    {
      title: "Frameworks",
      dek: [
        "• React",
        "• Svelte",
        "• Spring Boot",
        "• Spring Security"
      ]
    },
    {
      title: "Databases",
      dek: [
        "• MySQL",
        "• PostgreSQL"
      ]
    },
    {
      title: "Tools",
      dek: [
        "• Grunt",
        "• Node",
        "• REST"
      ]
    }
  ],
  awardsHed: "Awards & Honors",
  awards: [
    {
      title: "2023 Region 5 Murrow Award & 2022 IRE Award Finalist",
      dek: [
        "For original and revelatory watchdog journalism exposing a 25-year coverup of toxic groundwater contamination in Springfield, Missouri."
      ]
    },
    {
      title: "Keynote Speaker",
      dek: [
        "2022 Mississippi River Basin Ag & Water Desk Conference"
      ]
    }
  ]
};
const journalism = {
  name: "Eric D. Schmid",
  subhead: "Investigative Journlaist in St. Louis, MO",
  dek: "A skilled multimedia journalist who excels under deadline pressure and delivers superior quality data- and document-driven and investigative reporting. Exhibits advanced skill managing competing daily responsibilities while developing long-term coverage about economics, the environment, and public policy. Applies strong editorial and ethical standards to produce thoughtful, innovative, and compelling reporting across multiple platforms.",
  links: [
    {
      text: "GitHub: ",
      href: "https:/github.com/schmidward"
    },
    {
      text: " | LinkedIn: ",
      href: "https:/www.linkedin.com/in/ericdschmid/"
    }
  ],
  experienceHed: "Professional Experience",
  experiences: [
    {
      title: "Economic Development Reporter",
      subhead: "St. Louis Public Radio, St. Louis, MO",
      date: "June 2022 - Present",
      dek: "Covers efforts from local businesses, governments, universities, and nonprofits to create more economic opportunity for the St. Louis Region’s population of 2.8 million",
      subdek: [
        "• Promoted after three years of outstanding performance in previous position",
        "• Consistently meets strict publication expectations: 2 daily stories/week, 2 features/month",
        "• Produces high performing digital articles reaching 200,000+ unique viewers a year"
      ]
    },
    {
      title: "Metro East Reporter",
      subhead: "St. Louis Public Radio, Belleville, IL",
      date: "June 2019 - June 2022",
      dek: "Worked remotely producing articles about suburban Illinois communities adjacent to St. Louis",
      subdek: [
        "• Pioneered news coverage for 750,000 people who hadn’t been previously served, improving public accountability with multiple enterprise and investigative articles",
        "• Among Report for America’s second cohort of corps members"
      ]
    },
    {
      title: "Freelance Reporter",
      subhead: "National Public Radio, Marketplace, Science Friday",
      date: "April 2018 - Present",
      dek: "Produces original news content for programs that reach up to 46 million people a week",
      subdek: [
        "• Files sound-rich feature articles and those appearing on newscasts and digital platforms",
        "• Has appeared on nationally syndicated talk shows “Here & Now” and “Science Friday” to discuss original investigative reporting"
      ]
    },
    {
      title: "News Fellow",
      subhead: "WSHU Public Radio, Stony Brook, NY",
      date: "January 2018 - September 2018",
      dek: "Worked in Long Island News Bureau pitching, producing daily and enterprise stories for web and broadcast audiences across Connecticut and Long Island",
      subdek: [
        "• Supervised, edited and trained 5 news interns in reporting, script writing, and audio mixing",
        "• Helped solidify WSHU’s coverage expansion to 200,000 people on Eastern Long Island"
      ]
    },
    {
      title: "Dow Jones News Fund Digital Media Intern",
      subhead: "AccuWeather, State College, PA",
      date: "June 2018 - August 2018",
      dek: "Pitched, produced, and edited news packages and digital-first videos for AccuWeather’s website, social media, and national T.V. broadcast network as one of 20 Dow Jones News Fund Digital Media Interns placed at newsrooms nationwide",
      subdek: [
        "• Filled content gaps by working collaboratively within AccuWeather’s 10-person video team",
        "• Produced video content topping 5 million views on company’s website and social media"
      ]
    }
  ],
  educationHed: "Education",
  education: [
    {
      title: "LaunchCode",
      subhead: " - St. Louis, MO — September 2022 - June 2023",
      dek: "30-week full-stack development course in JavaScript, Angular, Java, and Spring Boot"
    },
    {
      title: "Investigative Reporters and Editors",
      subhead: " - Columbia, MO — August 2022",
      dek: "Data Journalism Bootcamp"
    },
    {
      title: "Stony Brook University",
      subhead: " - Stony Brook, NY — Class of 2018",
      dek: "Bachelor of Arts in Journalism, Business Management Minor"
    }
  ],
  skillsHed: "Technical Proficiencies",
  skills: [
    {
      title: "Programming Languages & Frameworks",
      dek: [
        "• JavaScript",
        "• Java",
        "• HTML5 / CSS3",
        "• React",
        "• Svelte",
        "• Spring Boot"
      ]
    },
    {
      title: "Data & Analysis",
      dek: [
        "• Excel",
        "• SQL"
      ]
    },
    {
      title: "Databases",
      dek: [
        "• MySQL",
        "• PostgreSQL"
      ]
    },
    {
      title: "File Management & Version Control",
      dek: [
        "• FTP",
        "• Git & GitHub"
      ]
    }
  ],
  awardsHed: "Awards & Honors",
  awards: [
    {
      title: "2023 Region 5 Murrow Award & 2022 IRE Award Finalist",
      dek: [
        "For original and revelatory watchdog journalism exposing a 25-year coverup of toxic groundwater contamination in Springfield, Missouri."
      ]
    },
    {
      title: "Keynote Speaker",
      dek: [
        "2022 Mississippi River Basin Ag & Water Desk Conference"
      ]
    },
    {
      title: "2022 INBA Crystal Mic Awards",
      dek: [
        "Investigative Report - 1st place",
        "Use of Sound - 1st place",
        "Best Reporter - 2nd place"
      ]
    }
  ]
};
const resumes = {
  software,
  journalism
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resume = resumes.journalism;
  let jrnStyle = "bg-hover-red border-solid border-8 border-black text-white mt-3 mb-3 p-5 text-center";
  let softwareStyle = "bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red";
  console.log(resume);
  return `<section><div class="max-w-screen-lg block mr-auto ml-auto"><div class="m-10 text-7xl font-semibold text-center">Resume
            <div class="flex flex-col ml-1/5 mr-1/5 mt-6 mb-4 text-xl md:ml-0 md:mr-0 md:flex-row md:justify-around"><button${add_attribute("class", jrnStyle, 0)}>Journalism</button>
                <button${add_attribute("class", softwareStyle, 0)}>Software Development
                </button></div></div>
        <div class="ml-8 mr-8 mb-10 flex flex-col"><hr class="mb-8">
                <div><p class="-ml-1 text-8xl font-bold">${escape(resume.name)}</p>
                    <p class="text-2xl font-semibold ">${escape(resume.subhead)}</p>
                    <p class="font-light text-lg mt-2">${escape(resume.dek)}</p>
                    <p class="font-extralight text-lg mt-3">${each(resume.links, (link) => {
    return `${escape(link.text)}<span class="text-dark-red hover:text-hover-red"><a${add_attribute("href", link.href, 0)} target="_blank">${escape(link.href)}</a></span>`;
  })}</p>
                    ${resume.projects ? `<p class="text-2xl font-semibold mt-3 ">${escape(resume.projectHed)}</p>
                    ${each(resume.projects, (project) => {
    return `<p class="text-lg mt-2"><span class="font-semibold">${escape(project.title)}</span> — ${escape(project.subhead)}</p>
                        ${each(project.dek, (dek) => {
      return `<p class="leading-tight text-base">${escape(dek)}</p>`;
    })}`;
  })}` : ``}</div>
                <div class="flex flex-col lg:flex-row"><div class="mr-5 lg:w-9/12"><p class="text-2xl font-semibold mt-3">${escape(resume.experienceHed)}</p>
                        ${each(resume.experiences, (experience) => {
    return `<div class="mb-2"><p class="text-lg"><span class="font-semibold">${escape(experience.title)}</span> — ${escape(experience.subhead)}</p>
                            <p class="-mt-1 font-light"><em>${escape(experience.date)}</em></p>
                            <p class="leading-none">${escape(experience.dek)}</p>
                            ${experience.subdek ? `${each(experience.subdek, (subdek) => {
      return `<p class="mt-1 ml-5 leading-none text-base">${escape(subdek)}</p>`;
    })}` : ``}
                        </div>`;
  })}
                        <p class="text-2xl font-semibold mt-3 ">${escape(resume.educationHed)}</p>
                        ${each(resume.education, (education) => {
    return `<div class="mb-2"><p class="text-lg"><span class="font-semibold">${escape(education.title)}</span>${escape(education.subhead)}</p>
                            <p class="leading-none">${escape(education.dek)}</p>
                            ${education.subdek ? `${each(education.subdek, (subdek) => {
      return `<p class="mt-1 ml-5 leading-tight text-base">${escape(subdek)}</p>`;
    })}` : ``}
                        </div>`;
  })}</div>
                    <div class="flex flex-row lg:flex-col lg:w-3/12"><div class="w-2/5 mr-2 lg:w-auto"><p class="text-2xl font-semibold mt-3">${escape(resume.skillsHed)}</p>
                            ${each(resume.skills, (skill) => {
    return `<div class="mb-2"><p class="text-lg leading-none font-semibold mb-2 mt-2">${escape(skill.title)}</p>
                                ${each(skill.dek, (dek) => {
      return `<p class="leading-tight text-lg">${escape(dek)}</p>`;
    })}
                            </div>`;
  })}</div>
                        <div class="w-3/5 ml-2 lg:w-auto"><p class="text-2xl font-semibold mt-3 ">${escape(resume.awardsHed)}</p>
                            ${each(resume.awards, (award) => {
    return `<div class="mt-2 mb-3"><p class="text-lg font-semibold leading-none">${escape(award.title)}</p>
                                    ${each(award.dek, (dek) => {
      return `<p class="leading-none mt-1">${escape(dek)}</p>`;
    })}
                                </div>`;
  })}</div></div></div></div></div></section>`;
});
export {
  Page as default
};
