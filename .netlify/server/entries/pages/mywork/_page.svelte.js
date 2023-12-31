import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/index.js";
const previews = [
  {
    year: "2023",
    articles: [
      {
        slug: "Riverfront Developments",
        data: {
          img: {
            src: "./images/2023-05-24_ES_Mike Sertle_Lower-End-2.jpg",
            alt: "Mike Sertle in a restored wetland in Illinois."
          },
          caption: {
            text: "Mike Sertle indicates how high the water can get in a roughly 250-acre restored wetland behind him on Horseshoe Lake in Illinois on May 24. Sertle, who manages wetlands restoration projects on the Mississippi River for Ducks Unlimited, explained that these projects help store excess water from river flooding and heavy rains. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Wetlands restoration is key to avoiding the worst of future floods along the Mississippi",
          href: "https://news.stlpublicradio.org/health-science-environment/2023-06-29/wetlands-restoration-is-key-to-avoiding-the-worst-of-future-floods-along-the-mississippi",
          dek: [
            "A changing climate poses considerable threats to many communities, and those along the country's major rivers are no exception, especially during floods.",
            "The floods of today are carrying more water and lasting longer than they once did.",
            "Cities along the countries largest river are now turning to nature to protect their communities and investments along the Mississippi Riverfront."
          ],
          button: [
            {
              text: "Read here",
              href: "https://news.stlpublicradio.org/health-science-environment/2023-06-29/wetlands-restoration-is-key-to-avoiding-the-worst-of-future-floods-along-the-mississippi"
            },
            {
              text: "Listen on Marketplace",
              href: "https://www.marketplace.org/2023/06/20/as-mississippi-riverfront-development-booms-wetlands-become-crucial-to-stave-off-flooding/"
            }
          ]
        }
      },
      {
        slug: "Workforce Development",
        data: {
          img: {
            src: "./images/2023-04-19_ES_SWIC-2.jpg",
            alt: "Two students discuss how to machine a metal piece."
          },
          caption: {
            text: "Lemola Mason, left, and Aiden Johnson discuss the CNC mill machine settings for an assignment at Southwestern Illinois College's Sam Wolf Campus last month in Granite City. Mason and Johnson are students in the community college's precision machining program. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "St. Louis’ economic future requires a lot more trained workers and fast",
          href: "https://news.stlpublicradio.org/economy-business/2023-05-03/st-louis-economic-future-requires-a-lot-more-trained-workers-and-fast",
          dek: [
            "The St. Louis region has staked a significant portion of its future economic development on technologies and industries that are still emerging.",
            "To make this bet on things like geospatial, advanced manufacturing and agtech successful, the region will need many more workers ready to enter those fields when employers come calling in the next few years."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/economy-business/2023-05-03/st-louis-economic-future-requires-a-lot-more-trained-workers-and-fast"
            }
          ]
        }
      },
      {
        slug: "Ukraine Shipments",
        data: {
          img: {
            src: "./images/2022-08-09_USAF_UKRAINE-TRANSPORT.jpg",
            alt: "United States Airmen load supplies onto an airplane."
          },
          caption: {
            text: "Troops at Dover Air Force Base in Delaware load pallets of ammunition onto an aircraft bound for Ukraine on Aug. 9. CREDIT: ",
            credit: "CYDNEY LEE / U.S. AIR FORCE"
          },
          headline: "Pressures on Ukraine's power grid pose a challenge to U.S. aid delivery",
          href: "https://www.npr.org/2023/01/27/1152140618/pressures-on-ukraines-power-grid-pose-a-challenge-to-u-s-aid-delivery",
          dek: [
            "Since Russia’s invasion of Ukraine, the eastern European country has needed tanks, ammunition and other military aid.",
            "The war has also devastated Ukraine's energy grid, and U.S. aid plays a critical role as the country struggles to keep the lights on.",
            "But finding and sending components for Ukraine’s power sector is easier said than done."
          ],
          button: [
            {
              text: "Listen on NPR",
              href: "https://www.npr.org/2023/01/27/1152140618/pressures-on-ukraines-power-grid-pose-a-challenge-to-u-s-aid-delivery"
            }
          ]
        }
      }
    ]
  },
  {
    year: "2022",
    articles: [
      {
        slug: "Springfield Investigation",
        data: {
          img: {
            src: "./images/2022-10-18-BM-LITTON-ILLO.jpeg",
            alt: "Photo Illustration"
          },
          caption: {
            text: "For decades, officials knew pollution spread in Springfield’s groundwater but were slow to investigate. CREDIT: ",
            credit: "BRIAN MUÑOZ / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Missouri knew of contamination in Springfield’s groundwater decades before anyone told residents",
          href: "https://news.stlpublicradio.org/health-science-environment/2022-10-19/missouri-knew-of-contamination-in-springfields-groundwater-decades-before-anyone-told-residents",
          dek: [
            "People living near Litton Industries, a company that did work for the Navy had no idea that a toxic solvent, disposed of improperly, had made its way into their drinking water – until a public apology from the state in 2019.",
            "An investigation from St. Louis Public Radio and the Midwest Newsroom found the company and state regulators knew of the contamination as far back as 1980s and 90s."
          ],
          button: [
            {
              text: "Read the full Investigation",
              href: "https://news.stlpublicradio.org/health-science-environment/2022-10-19/missouri-knew-of-contamination-in-springfields-groundwater-decades-before-anyone-told-residents"
            }
          ]
        }
      },
      {
        slug: "Military Families Moving",
        data: {
          img: {
            src: "./images/2022-11-16_LK_HOUSING-IN-COLORADO-SPRINGS.jpeg",
            alt: "Homes line a stree with the Colorado mountains in the background."
          },
          caption: {
            text: "A view of the Colorado Springs subdivision where Lisa Koroma and her family live on Nov. 16. Koroma said her family spent a month searching for suitable housing when they moved to Colorado late last year. CREDIT: ",
            credit: "LISA KOROMA"
          },
          headline: "An ‘insane’ housing market is hitting military families hard when they have to move",
          href: "https://news.stlpublicradio.org/economy-business/2022-11-17/an-insane-housing-market-is-hitting-military-families-hard-when-they-have-to-move",
          dek: [
            "Military families don’t have much of a choice when or where the Defense Department tells them to move.",
            "Families who moved in 2021 and 2022 faced even more challenges than in years past. High inflation and tight housing markets in many parts of the U.S. forced them to spend more time and money just to find a place to live."
          ],
          button: [
            {
              text: "Read here",
              href: "https://news.stlpublicradio.org/economy-business/2022-11-17/an-insane-housing-market-is-hitting-military-families-hard-when-they-have-to-move"
            },
            {
              text: "Listen on NPR",
              href: "https://www.npr.org/2022/12/12/1142320361/military-families-contend-with-high-inflation-and-housing-costs"
            }
          ]
        }
      },
      {
        slug: "Space Force Fitness Tests",
        data: {
          img: {
            src: "./images/2022-06-09_ES_AIR-FORCE-FITNESS-TEST.jpeg",
            alt: "An airman in runs along an outdoor track."
          },
          caption: {
            text: "Air Force service members run a timed 1.5 miles during their annual physical fitness test at Scott Air Force Base in Illinois in June. The U.S. Space Force intends to do away with once-a-year assessments in favor of wearable technology.  CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "The Space Force is scrapping the annual fitness test in favor of wearable trackers",
          href: "https://www.npr.org/sections/health-shots/2022/08/02/1113936229/space-force-annual-fitness-test-wearable-trackers",
          dek: [
            "Annual physical fitness tests are a cornerstone of military life. Each service has its own take on the once-a-year assessment required by the Department of Defense.",
            "But the country's newest military branch is ditching that model.",
            "Members of the Space Force, called Guardians, won't have an annual test. Instead, they will get smart rings or other wearable fitness devices to keep track of their physical activity throughout the year."
          ],
          button: [
            {
              text: "Read here",
              href: "https://www.npr.org/sections/health-shots/2022/08/02/1113936229/space-force-annual-fitness-test-wearable-trackers"
            },
            {
              text: "Listen on NPR",
              href: "https://www.npr.org/2022/07/26/1113615351/encore-a-new-branch-of-the-military-is-taking-a-different-approach-to-fitness"
            }
          ]
        }
      },
      {
        slug: "Escape from Ukraine",
        data: {
          img: {
            src: "./images/2022-04-22_BM_ZRYBNIAKS.jpeg",
            alt: "The Zrybniak family outside of their home in St. Charles, MO."
          },
          caption: {
            text: "Viktor Zribnyak, 69, and his wife Svitlana Zribnyak, 72, outside their son’s St. Charles, Missouri home on Monday, April 4, 2022. The couple had trekked Ukraine in a coordinated escape from the Russian invasion of the country. CREDIT: ",
            credit: "BRIAN MUÑOZ / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Fear, hope and relief. One couple's journey from Ukraine to St. Charles",
          href: "https://news.stlpublicradio.org/culture-history/2022-04-14/fear-hope-and-relief-one-couples-journey-from-ukraine-to-st-charles",
          dek: [
            "About a week into Russia’s invasion of Ukraine, Viktor and Svitlana Zribnyak got a phone call from their son in St. Charles that would change their lives.",
            "Volodymyr Zribnyak told his parents they had an hour to pack what they could and leave their home of 40 years.",
            "“We realized there was an opportunity to avoid death,” Viktor said. “I had to act immediately. We collected all of the necessary documents that had been selected in advance, medicine, and left literally within an hour.”"
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/culture-history/2022-04-14/fear-hope-and-relief-one-couples-journey-from-ukraine-to-st-charles"
            }
          ]
        }
      },
      {
        slug: "Amazon Warehouse Investiagion",
        data: {
          img: {
            src: "./images/2021-12-22_BM_EDVL-WAREHOUSE.jpeg",
            alt: "A police officer talks with a bystander infront of a partially destroyed Amazon warehouse."
          },
          caption: {
            text: "A police officer speaks to an onlooker at an Amazon Distribution Hub in Edwardsville last December. Six people died when a tornado hit the facility, and warehouses surrounding it could be just as vulnerable in the next major storm. CREDIT: ",
            credit: "BRIAN MUÑOZ / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Even in tornado-prone areas, storm shelters aren't required in warehouses",
          href: "https://news.stlpublicradio.org/economy-business/2022-02-16/workers-at-dozens-of-metro-east-warehouses-have-no-safe-rooms-to-shelter-from-tornadoes",
          dek: [
            "In the U.S., tornadoes cause more annual fatalities than hurricanes and earthquakes combined. Yet there isn't a national standard mandating that large warehouses include storm shelters for workers, even after six died at an Edwardsville Amazon facility in December 2021.",
            "And it wouldn’t cost much for developers to add one or multiple storm shelters to these buildings to protect the lives of workers inside."
          ],
          button: [
            {
              text: "Read here",
              href: "https://news.stlpublicradio.org/economy-business/2022-02-16/workers-at-dozens-of-metro-east-warehouses-have-no-safe-rooms-to-shelter-from-tornadoes"
            },
            {
              text: "Listen on NPR",
              href: "https://www.npr.org/2022/03/01/1083775442/even-in-tornado-prone-areas-storm-shelters-arent-required-in-warehouses"
            }
          ]
        }
      }
    ]
  },
  {
    year: "2021",
    articles: [
      {
        slug: "Illinois Redistricting",
        data: {
          img: {
            src: "./images/2021-11-10_BM_OFALLON.jpeg",
            alt: "South Lincoln Avenue in O'Fallon, Illinois."
          },
          caption: {
            text: "Cars drive on South Lincoln Avenue in O'Fallon on Nov. 10, 2021. One of the fastest-growing cities in the Metro East will be split up by congressional redistricting. CREDIT: ",
            credit: "BRIAN MUÑOZ / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Illinois' new congressional maps may favor Democrats, but they carve up cities like O'Fallon",
          href: "https://news.stlpublicradio.org/government-politics-issues/2021-11-19/illinois-new-congressional-maps-may-favor-democrats-but-they-carve-up-cities-like-ofallon",
          dek: [
            "Gerrymandering, a party’s manipulation of district boundaries for political advantage, contributes to polarization in the United States, dividing neighbors, family and friends. Yet few seem to know or care that they’re being manipulated for political power.",
            "“It seems like cherry-picking as far as the representatives are choosing their demographics,” said Charlie Cook, 38, a lifelong O’Fallon resident who opened the Happy Bakery in O’Fallon, IL eight years ago. “I don’t really support the idea of our representation being split that way just because anyone from O’Fallon should be able to go to the same representatives and be heard.”"
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/government-politics-issues/2021-11-19/illinois-new-congressional-maps-may-favor-democrats-but-they-carve-up-cities-like-ofallon"
            }
          ]
        }
      },
      {
        slug: "Latino Census feature",
        data: {
          img: {
            src: "./images/2021-11-15_BM_LATINO-FEATURE.jpeg",
            alt: "The inside of a traditional Mexican restaurant in Fairmont City, Illinois"
          },
          caption: {
            text: "Patrons sit in Mi Tierra Bonita Mexican Restaurant on Monday, Nov. 15, 2021, in Fairmont City, Illinois. The renovated restaurant opened in 2016 and sits in the 2020 Census tract with the largest Latino population in the St. Louis region. CREDIT: ",
            credit: "BRIAN MUÑOZ / ST. LOUIS PUBLIC RADIO"
          },
          headline: "The St. Louis region is already home for many Latinos and more are moving here",
          href: "https://news.stlpublicradio.org/culture-history/2021-11-16/the-st-louis-region-is-already-home-for-many-latinos-and-more-are-moving-here",
          dek: [
            "The overall population in the St. Louis region has barely budged in the past 10 years, but there has been robust growth in minority communities, particularly Latinos.",
            "Their population grew nearly 50% in the past decade across the 14-county St. Louis region defined by the U.S. Census Bureau, adding about 35,000 people to eclipse 100,000.",
            "Latinos were one of the only groups to add people in every part of the region."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/culture-history/2021-11-16/the-st-louis-region-is-already-home-for-many-latinos-and-more-are-moving-here"
            }
          ]
        }
      },
      {
        slug: "",
        data: {
          img: {
            src: "./images/2021-03-20_ES_DEWANDA-CROCHRELL-CAMPAIGNING.jpeg",
            alt: "Dewanda Crochrell stands outside a voter's home in Madison, Illinois"
          },
          caption: {
            text: "Dewanda Crochrell speaks with a voter in Madison, IL on March 20, 2021. Crochrell won a spot on Venice Township’s Board of Trustees a in the following weeks. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Slate of Black candidates wins spots in Metro East municipal governments",
          href: "https://news.stlpublicradio.org/government-politics-issues/2021-03-26/metro-east-candidates-want-city-leadership-to-better-reflect-their-communities",
          dek: [
            "A slate of Black candidates across the Metro East notched victories in municipal elections in April 2021. Many of them were running for elected office for the first time and vying for spots that had mostly been held by white residents.",
            "The political newcomers saw an opportunity to transform their locally elected councils and boards into ones that better reflect the people who reside in their communities."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/government-politics-issues/2021-03-26/metro-east-candidates-want-city-leadership-to-better-reflect-their-communities"
            }
          ]
        }
      },
      {
        slug: "",
        data: {
          img: {
            src: "./images/2021-02-01_DH_POWER-PLANT-DEMOLITION.jpeg",
            alt: "The Woodriver Power station in East Alton, Illinois falls down as it's demolished"
          },
          caption: {
            text: "Workers watch from a safe distance as the main structure of the former Wood River Power Plant in East Alton is brought down by explosives on Feb. 1. There aren't established regulations in Illinois for how to demolish an old coal plant, leaving environmentalists worried there will be toxic disaster when more of these plants are demolished. CREDIT: ",
            credit: "DERIK HOLTMANN / BELLEVILLE NEWS-DEMOCRAT"
          },
          headline: "Lax oversight of coal plant demolitions could leave Illinois communities vulnerable",
          href: "https://news.stlpublicradio.org/health-science-environment/2021-03-03/lax-oversight-of-coal-plant-demolitions-could-leave-illinois-communities-vulnerable",
          dek: [
            "Environmentalists in Illinois worry that having few regulations for coal-fired power plant demolitions will increase the chance for a toxic disaster when these facilities are dismantled.",
            "Since 2009, 12 of the state’s 23 remaining coal power plants have closed, according to the Natural Resources Defense Council. More are set to come offline this decade. ",
            "The plant closures leave behind property with massive buildings and smokestacks laden with heavy metal byproducts, like mercury, arsenic and lead, from decades of burning coal. Most are still standing."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/health-science-environment/2021-03-03/lax-oversight-of-coal-plant-demolitions-could-leave-illinois-communities-vulnerable"
            }
          ]
        }
      }
    ]
  },
  {
    year: "2020",
    articles: [
      {
        slug: "Illegal Evictions",
        data: {
          img: {
            src: "./images/2020_DK_EVICTION-ILLO.png",
            alt: "Photo Illustration"
          },
          caption: {
            text: "Landlords have filed nearly 200 eviction cases in Madison County in the months following Illinois Gov. J.B. Pritzker's executive order banning eviction filings. The governor signed the executive order in late April. CREDIT: ",
            credit: "DAVID KOVALUK / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Madison County court allowed eviction cases to proceed despite Illinois' statewide ban",
          href: "https://news.stlpublicradio.org/government-politics-issues/2020-09-21/madison-county-court-allowed-eviction-cases-to-proceed-despite-illinois-statewide-ban",
          dek: [
            "The Madison County Circuit Court allowed landlords to file hundreds of eviction cases despite an order from the governor banning filings during the coronavirus pandemic.",
            "In late April, Illinois Gov. J.B. Pritzker barred individuals and organizations from filing residential eviction actions in court to help keep people who may have fallen behind on rent for their homes during the state’s stay-at-home orders. The decision to continue eviction proceedings renters confused and frustrated after thinking they were safe from official filings."
          ],
          button: [
            {
              text: "Read the Investigation",
              href: "https://news.stlpublicradio.org/government-politics-issues/2020-09-21/madison-county-court-allowed-eviction-cases-to-proceed-despite-illinois-statewide-ban"
            }
          ]
        }
      },
      {
        slug: "Gender Nonconforming Census Feature",
        data: {
          img: {
            src: "./images/2020_NT_CENSUS-ILLO.png",
            alt: "Photo Illustration"
          },
          caption: {
            text: "The census will only ask if respondents are 'male' or 'female.' That leaves out a growing number of people who identify outside of that gender binary. CREDIT: ",
            credit: "NAT THOMAS / ST. LOUIS PUBLIC RADIO"
          },
          headline: "The 2020 Census is underway, but nonbinary and gender-nonconforming respondents feel counted out",
          href: "https://news.stlpublicradio.org/politics-issues/2020-03-17/the-2020-census-is-underway-but-nonbinary-and-gender-nonconforming-respondents-feel-counted-out",
          dek: [
            "The U.S. Census Bureau started collecting responses to this year's headcount en masse, sending individual letters requesting a response to the headcount homes across on March 12.",
            "The survey, which happens once every decade in the U.S., collects the most comprehensive data about the demographic makeup of the country. ",
            "One small but vulnerable population in the U.S. won’t be counted in the survey this time around, however. That’s because of how the question that asks about people’s sex appears on the form. The 2020 headcount only asks if people are “male” or “female.”"
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/politics-issues/2020-03-17/the-2020-census-is-underway-but-nonbinary-and-gender-nonconforming-respondents-feel-counted-out"
            }
          ]
        }
      },
      {
        slug: "Metro East Underground Railroad",
        data: {
          img: {
            src: "./images/2020-02-26_ES_BROOKLYN-AME-CHAPLE.png",
            alt: "The Quinn Chapel AME Church in Brooklyn, Illinois"
          },
          caption: {
            text: "The Quinn Chapel A.M.E. Church in Brooklyn, Illinois. The church is one of two verified Underground Railroad locations in the Metro East. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Uncovering the underground railroad’s hidden past in the Metro East",
          href: "https://news.stlpublicradio.org/arts-culture/2020-02-28/uncovering-the-underground-railroads-hidden-past-in-the-metro-east",
          dek: [
            "On the outskirts of this St. Clair County village, a small green sign reveals how many people live there — about 750. The small community is about five square blocks and sits a few thousand feet from the Mississippi River. ",
            "Yet for a village with less than 1,000 residents, there are 12 churches. The oldest, the Quinn Chapel A.M.E. Church, was established in 1825 as a Methodist church.",
            "It stands apart for its role in the Underground Railroad, helping slaves in Missouri escape to freedom."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/arts-culture/2020-02-28/uncovering-the-underground-railroads-hidden-past-in-the-metro-east"
            }
          ]
        }
      }
    ]
  },
  {
    year: "2019",
    articles: [
      {
        slug: "Employers and Marijuana",
        data: {
          img: {
            src: "./images/2019-11-21_ES_EMPLOYERS-MARIJUANA-PRESENTATION.jpeg",
            alt: "Lawyer Benjamin Wesselschmidt gives a presentation infront of dozens of people."
          },
          caption: {
            text: "Lawyer Benjamin Wesselschmidt explains the new recreational cannabis law at the St. Clair County Country Club on Nov. 21. Many employers are re-thinking their drug-testing policies since recreational marijuana will be legal on Jan. 1. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "What employers and workers need to know about legal recreational marijuana in Illinois",
          href: "https://news.stlpublicradio.org/post/what-employers-and-workers-need-know-about-legal-recreational-marijuana-illinois",
          dek: [
            "Ahead of the new year, local businesses and employers across Illinois are trying to determine how legal recreational marijuana will impact them. ",
            "The law change, which came only six months ago, is forcing many employers to rethink how their workplaces handle drug policy and testing.",
            "Lawmakers in Springfield wrote parts of the Cannabis Regulation and Tax Act to protect a workplace’s existing drug policy, but many employers are still unclear about their responsibilities."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/post/what-employers-and-workers-need-know-about-legal-recreational-marijuana-illinois"
            }
          ]
        }
      },
      {
        slug: "Old Home Restorations",
        data: {
          img: {
            src: "./images/2019-10-30_ES_HOME-RESTORATION.jpeg",
            alt: "A home from the 1880s near Belleville, Illinois' mainstreet"
          },
          caption: {
            text: "Paula and Tom Haniszewski's house on South Charles Street in Belleville on Oct. 30. Their home was built in 1880. CREDIT: ",
            credit: "ERIC SCHMID / ST. LOUIS PUBLIC RADIO"
          },
          headline: "Belleville’s old homes are attracting new residents: Here’s who’s moving in and why",
          href: "https://news.stlpublicradio.org/post/belleville-s-old-homes-are-attracting-new-residents-here-s-who-s-moving-and-why",
          dek: [
            "Emily Smith is fascinated by older homes. It’s an interest she’s had since she was a child. As an 8-year-old, she carried around a disposable camera in her backpack just to snap pictures of buildings she liked.",
            "“I’ve always had a fascination with old homes and their character, and the craftsmanship and how it’s like basically living in a piece of art,” she said."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/post/belleville-s-old-homes-are-attracting-new-residents-here-s-who-s-moving-and-why"
            }
          ]
        }
      },
      {
        slug: "East St. Louis History",
        data: {
          img: {
            src: "./images/2019-10-14_CH_REGINALD-PETTY.jpeg",
            alt: "Reginald Petty"
          },
          caption: {
            text: "Reginald Petty sits in his East St. Louis home on Oct. 14, 2019. Petty is a driving force behind the East St. Louis Historical Society, an organization that seeks to document and share the cultural significance of the city. CREDIT: ",
            credit: "CAROLINA HIDALGO / ST. LOUIS PUBLIC RADIO"
          },
          headline: "This man wants East St. Louisans to know their history",
          href: "https://news.stlpublicradio.org/post/man-wants-east-st-louisans-know-their-history",
          dek: [
            "Reginald Petty knows the stereotypes of East St. Louis well. A native of the city, he has heard the way many people talk about it.",
            "“'Oh, it’s a high crime rate,'” he said. “'Don’t go to East St. Louis. Be careful.'”",
            "He admits the city has its issues but said crime rates don’t define the city. Petty prefers to focus on East St. Louis’ positive narratives as a city rich with black cultural heritage. After all, he says, the “City of Champions” produced famous athletes, musicians and other celebrities. "
          ],
          button: [
            {
              text: "Read and Listen",
              href: "https://news.stlpublicradio.org/post/man-wants-east-st-louisans-know-their-history"
            }
          ]
        }
      }
    ]
  },
  {
    year: "2018",
    articles: [
      {
        slug: "Terry Sheridan and 9/11",
        data: {
          img: {
            src: "./images/2018-09-11_SG_TERRY-SHERIDAN.jpeg",
            alt: "Terry Sheridan in a WSHU Public Radio Studio"
          },
          caption: {
            text: "WSHU News Director Terry Sheridan. CREDIT: ",
            credit: "SABRINA GARONE / WSHU"
          },
          headline: "A journalist recalls the transformational experience of covering 9/11",
          href: "http://www.wshu.org/post/journalist-recalls-transformational-experience-covering-911#stream/0",
          dek: [
            "Tragedies often make us think of first responders – firefighters, paramedics, police officers – but we rarely consider how emergencies affect the journalists who cover them.",
            "Terry Sheridan, now WSHU’s news director, reported on the aftermath of the 9/11 attacks. Eric Schmid spoke with Terry about his experience 17 years later."
          ],
          button: [
            {
              text: "Read and Listen",
              href: "http://www.wshu.org/post/journalist-recalls-transformational-experience-covering-911#stream/0"
            }
          ]
        }
      },
      {
        slug: "Unsheltered Project",
        data: {
          img: {
            src: "./images/2018-05-23_UNSHELTERED.png",
            alt: "Screenshot of the Unsheltered Homepage"
          },
          caption: {
            text: "",
            credit: ""
          },
          headline: "Unsheltered",
          href: "https://brookenf.github.io/Unsheltered/",
          dek: [
            "The 2018 Dow Jones News Fund Interns investigate homelessness in Phoenix, Arizona.",
            "The large scale multimedia project focuses on the some of the many challenges, like substance abuse and access to healthcare, that Phoenix's unsheltered homeless population faces daily."
          ],
          button: [
            {
              text: "Read more",
              href: "https://brookenf.github.io/Unsheltered/"
            }
          ]
        }
      },
      {
        slug: "Missing Representation",
        data: {
          img: {
            src: "./images/2018-03_ES_VIVETT-DUKES.jpeg",
            alt: "Vivett Dukes"
          },
          caption: {
            text: "Vivett Dukes, who teaches in New York. CREDIT: ",
            credit: "ERIC SCHMID"
          },
          headline: "Missing Representation",
          href: "http://eschmid.journodev.com/",
          dek: [
            "About 80% of all public school teachers in the United States are white, while the students in those classrooms are far more diverse.",
            "What problems and issues arise from majority white teaching staffs? And why should you care?"
          ],
          button: [
            {
              text: "Read more",
              href: "http://eschmid.journodev.com/"
            }
          ]
        }
      }
    ]
  }
];
const previews$1 = {
  previews
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="max-w-screen-lg block mr-auto ml-auto"><div><div class="flex items-center justify-center text-center text-5xl m-6"><p>My Work</p></div>
            <div class="flex items-center justify-center text-center m-6"><p>Articles published by National Public Radio, St. Louis Public Radio, WSHU Public Radio, and independently.</p></div></div>
        <div class="ml-5 mr-5"><hr>
            
            

            ${each(previews$1.previews, (preview) => {
    return `<p class="text-4xl font-semibold ml-2 mt-3 mb-2">${escape(preview.year)}</p>

            
            
            ${each(preview.articles, (article) => {
      return `<div class="flex flex-col md:flex-row content-between max-w-full">
                <div class="inline-block md:w-2/5 box-border items-start m-2"><img class="w-full"${add_attribute("src", article.data.img.src, 0)}${add_attribute("alt", article.data.img.alt, 0)}>
                    <p class="text-xs mt-3">${escape(article.data.caption.text)}
                    <em>${escape(article.data.caption.credit)}</em>
                    </p></div>
                
                <div class="md:w-3/5 items-start justify-end m-2"><p class="-mt-1.5 mb-3 text-2xl font-semibold">${escape(article.data.headline)}</p>
                
                    
                
                    ${each(article.data.dek, (dek) => {
        return `<p class="mt-3 text-lg font-extralight">${escape(dek)}</p>`;
      })}
                    <div class="flex justify-around mt-3">${each(article.data.button, (button) => {
        return `<a class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red"${add_attribute("href", button.href, 0)} target="_blank">${escape(button.text)}
                        </a>`;
      })}</div>
                </div></div>
            <hr class="mt-3 mb-6">`;
    })}`;
  })}</div></div></section>`;
});
export {
  Page as default
};
