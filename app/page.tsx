const HomePage = () => (
<main className="bg-background-2 dark:bg-background-7">
  {/* =========================
Hero section
===========================*/}
  <section id="overview" className="hero-section pt-[160px] lg:pt-[180px] xl:pt-[228px] bg-background-3 dark:bg-background-7 relative z-10 overflow-hidden">
    <figure data-ns-animate data-delay="0.5" className="max-w-[835px] w-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-start justify-between -z-10">
      <div data-hero-line className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-1 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-2 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-3 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="sm:block hideen w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-4 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="sm:block hideen w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-5 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-6 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-7 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
      <div data-hero-line className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
        <div className="gradient-line-8 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
      </div>
    </figure>
    <div className="main-container">
      <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
        <div className="flex flex-col items-center">
          <span data-ns-animate data-delay="0.08" className="badge badge-yellow mb-2 md:mb-3 mx-auto">
            MVP Pilot • Testing Edition
          </span>
          <span data-ns-animate data-delay="0.1" className="badge badge-green mb-3 md:mb-4 lg:mb-5 mx-auto">
            Built for architects, trusted by builders
          </span>
          <div className="space-y-3 md:space-y-4 md:mx-10 lg:mx-0">
            <h1 data-ns-animate data-delay="0.2" className="max-w-[842px] text-center mx-auto">
              Blueprints reimagined and simplified with Ecadoc AI. 
            </h1>
            <p data-ns-animate data-delay="0.3" className="text-center max-w-[760px] mx-auto">
              Ecadoc AI pairs architectural insight with vision-grade detection, turning every plan, section, and elevation into a searchable, answer-ready workspace.
            </p>
          </div>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-y-3 text-center md:gap-x-4 pt-8 md:pt-10 lg:pt-12 xl:pt-14 w-full sm:w-auto">
            <li data-ns-animate data-delay="0.3" data-direction="left" data-offset={50} className="w-full">
              <a href="https://app.ecadoc.ai/" className="btn btn-primary hover:btn-secondary btn-w btn-xl w-[90%] sm:w-auto dark:hover:btn-white">
                <span>Start a free workspace</span>
              </a>
            </li>
            <li data-ns-animate data-delay="0.5" data-direction="left" data-offset={50} className="w-full">
              <a href="/contact" className="btn btn-white hover:btn-primary btn-xl w-[90%] sm:w-auto dark:btn-transparent">
                <span>Book a Demo</span>
              </a>
            </li>
          </ul>
        </div>
        {/* video  */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-0">
          <figure className="hero-perspective opacity-0">
            <img src="/images/hero-vedio.png" alt="Ecadoc AI interpreting blueprint" className="w-full h-auto" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  {/* =========================
AI Feature section
===========================*/}
  <section id="capabilities" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
    <div className="main-container">
      <div className="text-center mb-10 md:mb-[70px]">
        <span data-ns-animate data-delay="0.1" className="badge badge-green-v2 mb-5"> Features </span>
        <h2 data-ns-animate data-delay="0.2" className="mb-3">
          Elevate your drawing and project <br className="hidden md:block" />
          reviews with
          <span className="text-primary-500 inline-block">Ecadoc AI.</span>
        </h2>
        <p data-ns-animate data-delay="0.3" className="mb-8 lg:max-w-[696px] mx-auto">
          Deliver precise takeoffs with Ecadoc AI. Ask the drawing a question and receive measurements, markups, and context instantly.
        </p>
      </div>
      {/* Feature Grid */}
      <div className="grid grid-cols-12 gap-y-8 gap-x-4 md:gap-x-6 lg:gap-x-[42px]">
        {/* Feature Card 1 */}
        <article data-ns-animate data-delay="0.4" className="col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="bg-white dark:bg-background-6 rounded-[20px] px-4 md:px-6 pt-4 md:pt-6 pb-6 md:pb-8 w-full h-full group">
            <div className="bg-background-3 group-hover:bg-background-3/50 group-hover:scale-[102%] transition-all duration-300 ease-out dark:bg-background-7 dark:group-hover:bg-background-7/50 rounded-2xl p-4 mb-6 md:mb-8">
              <img className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-black bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] mt-5" src="/images/avatar-9.png" alt="Avatar 1" />
              <h3 className="text-lg md:font-medium my-2">Live project workspace</h3>
              <ul className="flex items-center justify-between mb-4">
                <li className="space-y-1">
                  <p className="text-tagline-3 font-normal">Document</p>
                  <p className="text-tagline-3 font-normal">Sync status</p>
                </li>
                <li className="space-y-1">
                  <p className="text-tagline-3 font-semibold text-secondary dark:text-accent">
                    Level 12 Core
                  </p>
                  <p className="text-tagline-3 font-semibold text-secondary dark:text-accent">3 syncs</p>
                </li>
              </ul>
              <div className="flex items-center gap-2 mb-5">
                <div>
                  <a href="#" className="btn text-tagline-3 btn-sm btn-secondary dark:!bg-black dark:!text-white">Annotate</a>
                </div>
                <div>
                  <a href="#" className="btn text-tagline-3 btn-sm btn-green">Share</a>
                </div>
              </div>
            </div>
            {/* text content- */}
            <h4 className="font-normal text-heading-6 md:text-heading-5 mb-2">
              Drawings ready on arrival
            </h4>
            <p>Ecadoc normalizes PDFs, CAD exports, and scans—aligning sheets and isolating layers so you start from a perfectly structured set.</p>
          </div>
        </article>
        {/* Feature Card 2 */}
        <article data-ns-animate data-delay="0.5" className="col-span-12 group lg:col-span-6 xl:col-span-4 relative overflow-hidden rounded-[20px]">
          {/* background image  */}
          <figure className="absolute rotate-[44deg] size-[560px] md:size-[900px] lg:size-[650px] xl:size-[560px] bottom-[-266px] left-[-81px] lg:bottom-[-319px] xl:bottom-[-266px] md:bottom-[-445px] overflow-hidden select-none pointer-events-none">
            <img src="/images/gradient-17.png" alt="gradient-img" className="size-full object-cover" />
          </figure>
          <div className="bg-white dark:bg-background-6 rounded-[20px] px-4 md:px-6 pt-4 md:pt-8 pb-6 w-full h-full">
            <h3 className="font-normal text-heading-6 md:text-heading-5 mb-2">
              Vision-grade recognition
            </h3>
            <p>
              Automatic object recognition tags walls, cores, openings, symbols, and room labels with millimetre precision, always referenced back to the source sheet.
            </p>
            <div className="bg-background-3 group-hover:bg-background-3/90 group-hover:scale-[102%] transition-all duration-300 ease-out dark:bg-background-7 dark:group-hover:bg-background-7/50 rounded-2xl p-4 space-y-4 mt-8 relative z-10">
              <ul className="flex items-center justify-between">
                <li className="space-y-1">
                  <h4 className="text-tagline-1 font-medium">Ecadoc AI</h4>
                  <p className="text-tagline-3 flex items-center gap-2 font-normal">
                    <span> Ask Ecadoc </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} viewBox="0 0 9 8" fill="none">
                        <circle cx="4.33594" cy={4} r={4} fill="#C6F56F" />
                      </svg>
                    </span>
                    <span>Online</span>
                  </p>
                </li>
                <li className="flex items-center gap-[18px]">
                  {/* <p class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <rect x="2.67188" y="5.125" width="14.4845" height="13.7503" class="stroke-secondary dark:stroke-accent" stroke-width="1.5" stroke-linecap="square"></rect>
              <path d="M17.6779 9.38221L22.6719 5.99609V18.006L17.6779 14.3872" class="stroke-secondary dark:stroke-accent" stroke-width="1.5" stroke-linecap="square"></path>
              <path d="M9.82812 9.08594H13.0329" class="stroke-secondary dark:stroke-accent" stroke-width="1.5" stroke-linecap="square"></path>
            </svg>
          </p> */}
                  {/* <p class="group-hover:rotate-12 transition-transform duration-300 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.6719 3C11.3587 3 10.0583 3.25866 8.84504 3.7612C7.63178 4.26375 6.52939 5.00035 5.60081 5.92893C3.72544 7.8043 2.67188 10.3478 2.67188 13V20C2.67188 20.2652 2.77723 20.5196 2.96477 20.7071C3.1523 20.8946 3.40666 21 3.67188 21H6.67188C7.46752 21 8.23059 20.6839 8.7932 20.1213C9.3558 19.5587 9.67188 18.7956 9.67188 18V16C9.67188 15.2044 9.3558 14.4413 8.7932 13.8787C8.23059 13.3161 7.46752 13 6.67188 13H4.67188C4.67188 10.8783 5.51473 8.84344 7.01502 7.34315C8.51531 5.84285 10.5501 5 12.6719 5C14.7936 5 16.8284 5.84285 18.3287 7.34315C19.829 8.84344 20.6719 10.8783 20.6719 13H18.6719C17.8762 13 17.1132 13.3161 16.5506 13.8787C15.9879 14.4413 15.6719 15.2044 15.6719 16V18C15.6719 18.7956 15.9879 19.5587 16.5506 20.1213C17.1132 20.6839 17.8762 21 18.6719 21H21.6719C21.9371 21 22.1914 20.8946 22.379 20.7071C22.5665 20.5196 22.6719 20.2652 22.6719 20V13C22.6719 10.3478 21.6183 7.8043 19.7429 5.92893C17.8676 4.05357 15.324 3 12.6719 3ZM6.67188 15C6.93709 15 7.19145 15.1054 7.37898 15.2929C7.56652 15.4804 7.67188 15.7348 7.67188 16V18C7.67188 18.2652 7.56652 18.5196 7.37898 18.7071C7.19145 18.8946 6.93709 19 6.67188 19H4.67188V15H6.67188ZM20.6719 19H18.6719C18.4067 19 18.1523 18.8946 17.9648 18.7071C17.7772 18.5196 17.6719 18.2652 17.6719 18V16C17.6719 15.7348 17.7772 15.4804 17.9648 15.2929C18.1523 15.1054 18.4067 15 18.6719 15H20.6719V19Z" class="fill-secondary dark:fill-accent"></path>
            </svg>
          </p> */}
                </li>
              </ul>
              <div className="flex items-start gap-6">
                <div>
                  <p className="text-tagline-3 font-normal p-2 text-secondary dark:text-accent bg-white dark:bg-black rounded-l-2xl mb-2 rounded-br-2xl">
                    “Can you calculate the floor area of the Garbage and Recycling Room shown in the Level 1 plan?.
                  </p>
                  <time dateTime="2025-07-18T10:21:00" className="justify-self-end text-tagline-3 font-normal text-secondary/60 dark:text-accent block">10:21 am</time>
                </div>
                <img className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-black bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" src="/images/avatar-9.png" alt="Avatar 1" />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <img className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-black bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" src="/images/avatar-ai.png" alt="Avatar 1" />
                <p className="text-tagline-3 font-normal p-2 text-secondary dark:text-accent bg-white dark:bg-black rounded-l-2xl mb-2 rounded-br-2xl">
                  “The Garbage and Recycling Room occupies an estimated 53.5 square meters on the Level 1 plan.
                </p>
              </div>
            </div>
          </div>
        </article>
        {/* Feature Card 3 */}
        <article data-ns-animate data-delay="0.6" className="group cursor-alias col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="bg-white dark:bg-background-6 rounded-[20px] px-4 md:px-6 pt-4 md:pt-6 pb-4 md:pb-8 w-full h-full">
            <div className="bg-background-3 dark:bg-background-7 rounded-2xl grid grid-cols-2 gap-4 p-4 mb-8">
              {/* 1 */}
              <div className="bg-white dark:bg-background-5 flex flex-col justify-center rounded-xl px-2.5 py-[26px]">
                <figure className="flex items-start mb-2 gap-2">
                  <img src="/images/user.svg" alt="User" />
                  <figcaption className="text-tagline-2 dark:text-accent font-normal">
                    Floorplans
                  </figcaption>
                </figure>
                <p className="text-tagline-3 font-normal dark:text-accent/60">2,490 Sheets</p>
              </div>
              {/* 2 */}
              <div className="bg-secondary dark:bg-background-6 flex flex-col justify-center rounded-xl -rotate-[10deg] lg:-rotate-[20deg] px-2.5 py-[26px] group-hover:rotate-0 transition-transform duration-300 ease-[cubic-bezier(0.8, 0, 0.2, 9)]">
                <figure className="flex items-start mb-2 gap-2">
                  <img src="/images/weixin-favorites.svg" alt="Orders" />
                  <figcaption className="text-tagline-2 text-white dark:text-accent font-normal">
                    Markups
                  </figcaption>
                </figure>
                <p className="text-tagline-3 text-accent/60 font-normal">11,559 Markups</p>
              </div>
              {/* 3 */}
              <div className="bg-white dark:bg-background-5 flex flex-col justify-center rounded-xl px-2.5 py-[26px]">
                <figure className="flex items-start mb-2 gap-2">
                  <img src="/images/project.svg" alt="User" />
                  <figcaption className="text-tagline-2 font-normal dark:text-accent">
                    Projects
                  </figcaption>
                </figure>
                <p className="text-tagline-3 font-normal dark:text-accent/60">490 Syncs</p>
              </div>
              {/* 4 */}
              <div className="bg-white dark:bg-background-5 flex flex-col justify-center rounded-xl px-2.5 py-[26px]">
                <figure className="flex items-start mb-2 gap-2">
                  <img src="/images/user-v2.svg" alt="User" />
                  <figcaption className="text-tagline-2 font-normal dark:text-accent">
                    Revisions
                  </figcaption>
                </figure>
                <p className="text-tagline-3 font-normal dark:text-accent/60">2,490 Notes</p>
              </div>
            </div>
            {/* text content- */}
            <h6 className="font-normal text-heading-6 md:text-heading-5 mb-2">Collaboration without friction</h6>
            <p>Ecadoc keeps architects, engineers, and contractors aligned with shared annotations, rollbacks, and instant version snapshots.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* =========================
Feature V2 section
===========================*/}
  <section id="automation" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-24 lg:pb-[140px] xl:pb-[150px]">
    <div className="main-container space-y-[220px] md:space-y-[300px] xl:space-y-[300px]">
      {/* Features 1 Section */}
      <div className="flex flex-col gap-x-5 lg:gap-x-20 gap-y-28 sm:gap-y-24 md:gap-y-20 items-start lg:flex-row justify-between">
        <div className="w-full lg:w-1/2">
          <div className="space-y-3 mb-10 lg:mb-14 text-center md:text-left px-4 sm:px-0">
            <h2 data-ns-animate data-delay="0.1">
              Spatial intelligence, delivered
              <span className="text-primary-500">in real time.</span>
            </h2>
            <p data-ns-animate data-delay="0.2" className="lg:max-w-[462px]">
              Keep the entire conversation inside the drawing. Ecadoc routes annotated context to the right discipline the moment a decision is made.
            </p>
          </div>
          <div data-ns-animate data-delay="0.3" className="flex justify-center md:justify-start">
            <a href="https://app.ecadoc.ai" className="btn btn-md block md:inline-block btn-white w-[90%] md:w-auto dark:btn-transparent hover:btn-primary">
              <span>Explore collaboration</span>
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 -mt-20">
          <figure data-ns-animate data-delay="0.4" className="max-w-full lg:max-w-[452px] h-auto">
            <img src="/images/features-1.png" alt="features Images" className="w-full h-full object-cover object-center" />
          </figure>
          <div className="absolute space-y-1.5 lg:space-y-3 z-10 -bottom-20 sm:-bottom-8 md:-bottom-16 lg:-bottom-24 -right-3 sm:right-0">
            <figure data-ns-animate data-delay="0.5" data-spring data-duration={2} className="max-w-[240px] sm:max-w-[350px] rounded-[20px] overflow-hidden h-auto">
              <img src="/images/sub-features-1.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover block dark:hidden" />
              <img src="/images/sub-features-dark-1.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover hidden dark:block" />
            </figure>
            <figure data-ns-animate data-delay="0.6" data-spring data-duration={2} className="max-w-[240px] sm:max-w-[350px] rounded-2xl overflow-hidden h-auto">
              <img src="/images/sub-features-2.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover block dark:hidden" />
              <img src="/images/sub-features-dark-2.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover hidden dark:block" />
            </figure>
            <figure data-ns-animate data-delay="0.7" data-spring data-duration={2} className="max-w-[240px] sm:max-w-[350px] rounded-2xl shadow-2 overflow-hidden h-auto">
              <img src="/images/sub-features-3.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover block dark:hidden" />
              <img src="/images/sub-features-dark-3.png" alt="Ecadoc interface preview" className="w-full h-auto shadow-2 object-center object-cover hidden dark:block" />
            </figure>
          </div>
        </div>
      </div>
      {/* Features 2 Section */}
      <div className="flex flex-col-reverse gap-x-5 md:gap-x-10 lg:gap-x-16 2xl:gap-x-24 gap-y-28 sm:gap-y-24 md:gap-y-20 items-center lg:items-start lg:flex-row-reverse justify-between">
        <div className="w-full lg:w-1/2">
          <div className="space-y-3 mb-8 lg:mb-14 text-center md:text-left px-4 sm:px-0">
            <h3 data-ns-animate data-delay="0.3" className="md:text-heading-3 lg:text-heading-2">
              Secure blueprint storage for today’s
              <span className="text-primary-500">distributed teams.</span>
            </h3>
            <p data-ns-animate data-delay="0.4" className="lg:max-w-[596px]">
              Keep PDFs, CAD exports, and markups encrypted at rest with retention rules and trade-specific permissions, so every sheet stays audit-ready.
            </p>
          </div>
          {/* <div data-ns-animate="" data-delay="0.5" class="flex justify-center md:justify-start">
    <a href="https://app.ecadoc.ai/" class="btn btn-md block md:inline-block btn-white dark:btn-transparent hover:btn-primary w-[90%] md:w-auto">
      <span>Try now</span>
    </a>
  </div> */}
        </div>
        {/* Features Image */}
        <div className="relative -mt-20 md:-mt-36 w-full lg:w-1/2">
          <figure data-ns-animate data-delay="0.4" className="max-w-full lg:max-w-[452px] h-auto lg:justify-self-end">
            <img src="/images/secure.png" alt="features Images" className="w-full h-full object-cover object-center" />
          </figure>
          {/* <div class="absolute flex flex-col items-center z-20 top-[55%] -left-3 md:-left-5 lg:-left-2 xl:-left-3 2xl:-left-8">
    <figure data-ns-animate="" data-delay="0.5" data-spring="" data-duration="2" class="max-w-[280px] md:max-w-[320px] md:self-end rounded-[20px] overflow-hidden md:h-[74px]">
      <img src="/images/sub-features-4.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-3 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-4.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-3 object-cover hidden dark:block">
    </figure>
    <figure data-ns-animate="" data-delay="0.6" data-spring="" data-duration="2" class="max-w-[280px] md:max-w-[320px] rounded-2xl object-cover overflow-hidden md:h-[74px] my-1 md:my-2">
      <img src="/images/sub-features-5.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-3 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-5.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-3 object-cover hidden dark:block">
    </figure>
    <figure data-ns-animate="" data-delay="0.7" data-spring="" data-duration="2" class="max-w-[250px] md:max-w-[310px] relative shadow-7 rounded-2xl overflow-hidden z-40 max-h-[72px]">
      <img src="/images/sub-features-6.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-6.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover hidden dark:block">
    </figure>
    <figure data-ns-animate="" data-delay="0.8" data-spring="" data-duration="2" class="max-w-[200px] md:max-w-[280px] rounded-2xl shadow-7 overflow-hidden max-h-[72px] -mt-[37px] z-30 hidden md:block">
      <img src="/images/sub-features-7.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-7.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover hidden dark:block">
    </figure>
    <figure data-ns-animate="" data-delay="0.9" data-spring="" data-duration="2" class="max-w-[180px] md:max-w-[260px] rounded-2xl shadow-7 overflow-hidden max-h-[72px] -mt-[37px] z-20 hidden md:block">
      <img src="/images/sub-features-8.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-8.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover hidden dark:block">
    </figure>
    <figure data-ns-animate="" data-delay="1" data-spring="" data-duration="2" class="max-w-[240px] rounded-2xl shadow-7 overflow-hidden max-h-[72px] -mt-[37px]">
      <img src="/images/sub-features-9.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover block dark:hidden">
      <img src="/images/sub-features-dark-9.png" alt="Ecadoc interface preview" class="w-full h-auto object-center shadow-2 object-cover hidden dark:block">
    </figure>
  </div> */}
        </div>
      </div>
    </div>
  </section>
  {/* =========================
Integration section
===========================*/}
  <section id="integrations" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-24 lg:pb-[140px] xl:pb-[200px]">
    <div className="main-container">
      <article className="flex flex-col lg:flex-row gap-x-20 gap-y-20">
        <div className="w-full lg:w-1/2 max-lg:text-center">
          <span data-ns-animate data-delay="0.1" className="badge badge-green-v2 mb-5">
            Toolset
          </span>
          <h2 data-ns-animate data-delay="0.2" className="mb-3">
            Command every drawing with <span className="text-primary-500">intelligent annotation tools.</span>
          </h2>
          <p data-ns-animate data-delay="0.3" className="mb-8 lg:max-w-[596px]">
            Mark up, measure, and comment through natural language while Ecadoc maintains sheet alignment, viewports, and layer precision.
          </p>
          <div data-ns-animate data-delay="0.4">
            <a href="https://app.ecadoc.ai/" className="btn btn-primary btn-lg md:btn-xl block md:inline-block w-[90%] md:w-auto mx-auto md:mx-0 hover:btn-white-dark">
              <span>See it in action</span>
            </a>
          </div>
        </div>
        <div data-ns-animate data-delay="0.5" className="w-full space-y-6 flex flex-col items-center lg:w-1/2 relative">
          <a href="./integration-page-01.html" aria-label="View toolset page">
            <span className="sr-only">View toolset page</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 size-[100px] md:size-[140px] rounded-full flex items-center justify-center z-10 hover:scale-[103%] hover:perspective-origin-top hover:shadow-primary-500/20 transition-transform duration-200 ease-in">
              <img src="/images/sqare-matrix-right-arrow.svg" alt="arrow" />
            </div>
          </a>
          <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
          <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
          <div className="logos-marquee-container">
            <div className="flex items-center gap-x-6">
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center ml-6 p-3">
                <img src="/images/notion.svg" alt="notion-icon " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/dropbox.svg" alt="dropbox-icon " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/svelte.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/slack.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/asana.svg" alt="Notion " />
              </figure>
            </div>
          </div>
          <div className="logos-right-marquee-container">
            <div className="flex items-center gap-x-6">
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center ml-6 p-3">
                <img src="/images/angle.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/notion.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/reddit.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/dropbox.svg" alt="Notion " />
              </figure>
            </div>
          </div>
          <div className="logos-marquee-container">
            <div className="flex items-center gap-x-6">
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center ml-6 p-3">
                <img src="/images/slack.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/drive-google.svg" alt="drive-google" />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/spanchat-v2.svg" alt="spanchat-logo" />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/dropbox.svg" alt="Notion " />
              </figure>
              <figure className="bg-white dark:bg-background-7 rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center p-3">
                <img src="/images/area.svg" alt="Notion " />
              </figure>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
  {/* =========================
Understanding section
===========================*/}
  {/* =========================
Pricing section
===========================*/}
  <section id="pricing" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] max-2xl:px-4">
    <div className="relative overflow-hidden max-w-[1440px] bg-black rounded-2xl md:rounded-4xl mx-auto py-16 md:py-[100px] sm:px-5 md:px-10 lg:px-5 xl:px-[67px] flex flex-col gap-[70px]">
      <figure data-ns-animate data-delay="0.1" data-direction="up" data-offset={200} className="select-none pointer-events-none absolute hidden md:block md:-top-[1070px] lg:-top-[570px] xl:-top-[560px] left-1/2 -translate-x-1/2 rotate-[28deg] max-w-[1440px] max-h-[1170px] w-full h-full">
        <img src="/images/gradient-17.png" alt="Pricing Gradient" className="w-full h-full object-cover" />
      </figure>
      <div className="flex relative flex-col items-center text-center">
        <span data-ns-animate data-delay="0.2" className="badge badge-blur text-ns-green mb-5">Our Pricing</span>
        <h2 data-ns-animate data-delay="0.3" className="max-w-[800px] mx-auto mb-4 text-white max-md:px-4">
          Pricing plans launching Q3 2026 so join our pilot program today.
        </h2>
        {/* Original promo badge hidden during MVP
<span data-ns-animate="" data-delay="0.4" data-direction="up" data-offset="100" data-start="top 93%" class="badge badge-blur bg-ns-yellow absolute z-30 top-[70%] text-secondary font-normal capitalize text-tagline-2 px-1.5 sm:px-3.5 py-1.5 rounded-[36px] rotate-[20deg] ms-60">
  save 40%
</span>
*/}
        {/* Pricing toggle hidden during MVP
<div data-ns-animate="" data-delay="0.5" class="bg-white/20 dark:bg-background-6 py-6 px-14 backdrop-blur-[18px] dark:backdrop-blur-[20px] rounded-full">
  <label class="relative inline-flex items-center cursor-pointer z-[10]">
    <span class="mr-2.5 text-base text-accent font-normal">6 Months</span>
    <input type="checkbox" id="priceCheck" class="sr-only peer" aria-label="Toggle between monthly and yearly pricing">
    <span class="relative w-13 h-[28px] bg-white/20 border border-white rounded-[34px] peer-checked:after:translate-x-[93%] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent after:rounded-full after:h-6 after:w-6 after:transition-all"></span>
    <span class="ms-2.5 text-base text-accent font-normal">Yearly</span>
  </label>
</div>
*/}
        <div className="pt-4">
          <a href="/contact" className="btn btn-primary btn-xl hover:btn-white-v2 dark:hover:btn-accent">
            <span>Join Pilot Program</span>
          </a>
        </div>
      </div>
      {/* Visible pricing tiers hidden during MVP
    <div class="relative px-5 sm:px-0">
<div class="grid grid-cols-1 lg:grid-cols-4 items-start gap-8">
  <div data-ns-animate="" data-delay="0.6" class="bg-background-3 dark:bg-background-7 p-8 rounded-[20px] max-w-[408px] w-full mx-auto">
    <h3 class="mb-2 font-normal text-heading-5">Solo Plan</h3>
    <p class="mb-6 max-w-[250px]">For individual analysts needing Ecadoc reviews.</p>
    <div class="price-month mb-7">
      <h4 class="text-heading-4 font-normal">$<span>899.94 CAD</span></h4>
      <p class="text-secondary dark:text-accent">6-Month billing (charged every 6 months)</p>
    </div>
    <div class="price-year mb-7">
      <h4 class="text-heading-4 font-normal">$<span>1,799.88 CAD</span></h4>
      <p class="text-secondary dark:text-accent">Yearly billing (charged once per year)</p>
    </div>
    <a href="https://app.ecadoc.ai/" class="btn btn-md btn-white w-full block dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 before:content-none first-letter:uppercase">
      Get started
    </a>
    <ul class="relative list-none space-y-2.5">
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-secondary dark:fill-accent/80"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-white dark:fill-background-8"></path>
        </svg>

        <span class="text-secondary dark:text-accent/80 font-normal text-tagline-1">Includes one-month free trial</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">3 active projects, 15GB storage</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Version control workspace</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Natural language AI chat with citations</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Embedded PDF viewer and manual tools</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">350 AI markups each month</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Standard email support</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Bluebeam Studio Sync</span>
      </li>
    </ul>
  </div>
  <div data-ns-animate="" data-delay="0.7" class="p-2.5 rounded-[20px] bg-[url('/images/home-page-2/price-bg.png')] bg-no-repeat bg-center bg-cover max-w-[408px] w-full mx-auto">
    <div class="bg-white dark:bg-black p-5 sm:p-8 rounded-[12px]">
      <div class="flex justify-end -mt-3 mb-2.5">
        <span class="-mr-4 bg-ns-green text-background-8 py-1.5 px-3 rounded-full font-normal capitalize">Best value</span>
      </div>
      <h3 class="mb-2.5 font-normal text-heading-5">Team Plan</h3>
      <p class="mb-6 text-secondary/60 dark:text-accent/60 max-w-[250px]">For teams up to five users sharing Ecadoc dashboards.</p>
      <div class="price-month mb-7">
        <h4 class="text-heading-4 font-normal">$<span>3,599.94 CAD</span></h4>
        <p class="text-secondary dark:text-accent">6-Month billing (charged every 6 months)</p>
      </div>
      <div class="price-year mb-7">
        <h4 class="text-heading-4 font-normal">$<span>7,199.88 CAD</span></h4>
        <p class="text-secondary dark:text-accent">Yearly billing (charged once per year)</p>
      </div>
      <a href="https://app.ecadoc.ai/" class="btn btn-md btn-secondary w-full block dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark mb-8 before:content-none first-letter:uppercase">
        Get started
      </a>
      <ul class="relative list-none space-y-2.5">
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-secondary dark:fill-accent/80"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-white dark:fill-background-8"></path>
        </svg>

        <span class="text-secondary dark:text-accent/80 font-normal text-tagline-1">Includes Solo Plan features</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Up to 5 users with shared dashboards</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Team collaboration toolkit</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">50GB secure storage</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">2000 AI-driven actions monthly</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Bluebeam Studio Export</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Priority email and chat support</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">10-version project history</span>
      </li>
    </ul>
    </div>
  </div>
  <div data-ns-animate="" data-delay="0.8" class="bg-background-3 dark:bg-background-7 p-8 rounded-[20px] max-w-[408px] w-full mx-auto">
    <h3 class="mb-2 font-normal text-heading-5">Business Plan</h3>
    <p class="mb-6 max-w-[250px] text-secondary/60 dark:text-accent/60">For mid-size firms scaling Ecadoc across departments.</p>
    <div class="price-month mb-7">
      <h4 class="text-heading-4 font-normal">$<span>10,199.94 CAD</span></h4>
      <p class="text-secondary dark:text-accent">6-Month billing (charged every 6 months)</p>
    </div>
    <div class="price-year mb-7">
      <h4 class="text-heading-4 font-normal">$<span>20,399.88 CAD</span></h4>
      <p class="text-secondary dark:text-accent">Yearly billing (charged once per year)</p>
    </div>
    <a href="https://app.ecadoc.ai/" class="btn btn-md btn-white w-full block dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 before:content-none first-letter:uppercase">
      Get started
    </a>
    <ul class="relative list-none space-y-2.5">
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-secondary dark:fill-accent/80"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-white dark:fill-background-8"></path>
        </svg>

        <span class="text-secondary dark:text-accent/80 font-normal text-tagline-1">Includes Team Plan features</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Up to 20 users with workspace groups</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Unlimited AI-driven markups</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Role-based permissions and SSO</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Dedicated onboarding and training</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">100GB plan archive storage</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">20-version project history retention</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Priority escalation response</span>
      </li>
    </ul>
  </div>
  <div data-ns-animate="" data-delay="0.9" class="bg-background-3 dark:bg-background-7 p-8 rounded-[20px] max-w-[408px] w-full mx-auto">
    <h3 class="mb-2 font-normal text-heading-5">Enterprise Plan</h3>
    <p class="mb-6 max-w-[250px] text-secondary/60 dark:text-accent/60">For organizations standardizing Ecadoc at scale. Contact us for 50+ users.</p>
    <div class="price-month mb-7">
      <h4 class="text-heading-4 font-normal">$<span>38,999.94 CAD</span></h4>
      <p class="text-secondary dark:text-accent">6-Month billing (charged every 6 months)</p>
    </div>
    <div class="price-year mb-7">
      <h4 class="text-heading-4 font-normal">$<span>77,999.88 CAD</span></h4>
      <p class="text-secondary dark:text-accent">Yearly billing (charged once per year)</p>
    </div>
    <a href="https://app.ecadoc.ai/" class="btn btn-md btn-white w-full block dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 before:content-none first-letter:uppercase">
      Get started
    </a>
    <ul class="relative list-none space-y-2.5">
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-secondary dark:fill-accent/80"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-white dark:fill-background-8"></path>
        </svg>

        <span class="text-secondary dark:text-accent/80 font-normal text-tagline-1">Includes Business Plan features</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Up to 50 users with enterprise SSO</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">300GB secure storage pool</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">30-version project history retention</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Custom AI model integration</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Advanced security with audit logs</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Custom ERP and CRM integrations</span>
      </li>
      <li class="flex items-center gap-2.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <rect width="20" height="20" rx="10" fill="" class="fill-white dark:fill-background-9"></rect>
          <path d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z" fill="" class="fill-secondary/60 dark:fill-accent/80"></path>
        </svg>

        <span class="text-secondary/60 dark:text-accent/40 font-normal text-tagline-1">Dedicated manager plus quarterly consulting</span>
      </li>
    </ul>
  </div>
</div>
    </div>
    */}
    </div>
  </section>
  <section id="insights" className="bg-background-3 dark:bg-background-7 pt-16 md:pt-24 lg:pt-[150px] xl:pt-[200px] pb-16 md:pb-24 lg:pb-[150px] xl:pb-[200px]">
    <div className="main-container">
      {/* Section header */}
      <div className="text-center mb-10 md:mb-[70px]">
        <span data-ns-animate data-delay="0.1" className="badge badge-green-v2 mb-5">
          Drawing Insight
        </span>
        <h2 data-ns-animate data-delay="0.2" className="mb-3">
          Experience live intelligence to streamline
          <br className="hidden md:block" />
          <span className="text-primary-500 inline-block">every decision.</span>
        </h2>
        <p data-ns-animate data-delay="0.3" className="mb-8 lg:max-w-[562px] mx-auto">
          Ecadoc mines each sheet for quantities, relationships, and context so project teams can resolve open items before they stall the schedule.
        </p>
      </div>
      <div className="relative">
        <figure data-ns-animate data-delay="0.4" className="flex justify-center items-center mx-auto">
          <div className="p-2.5 max-w-[756px] rounded-4xl relative z-10 overflow-hidden">
            {/* background image  */}
            <figure className="absolute left-[-35%] -z-10 top-[-63%] w-[630px] md:w-[1030px] select-none pointer-events-none">
              <img src="/images/gradient-36.png" alt="Chat dashboard interface background" className="w-full h-full" />
            </figure>
            <figure className="max-w-[576px] mx-auto">
              <img src="/images/understanding-chat.png" alt="Ecadoc AI answering drawing questions" className="block dark:hidden rounded-[25px]" />
              <img src="/images/understanding-chat-dark.png" alt="Ecadoc AI answering drawing questions" className="hidden dark:block rounded-[25px]" />
            </figure>
          </div>
        </figure>
        <div className="absolute flex flex-col items-center z-20 top-[53%] -left-4 md:left-[8.4%]">
          <figure data-ns-animate data-delay="0.5" data-spring data-duration={2} className="max-w-[220px] md:max-w-[300px] relative shadow-7 z-40 max-h-[72px] rounded-2xl overflow-hidden">
            <img src="/images/sub-features-6.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-3 object-cover block dark:hidden" />
            <img src="/images/sub-features-dark-6.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-3 object-cover dark:block hidden" />
          </figure>
          <figure data-ns-animate data-delay="0.6" data-spring data-duration={2} className="max-w-[200px] md:max-w-[280px] max-h-[72px] -mt-[22px] shadow-7 z-30 rounded-2xl overflow-hidden">
            <img src="/images/sub-features-7.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-3 object-cover block dark:hidden" />
            <img src="/images/sub-features-dark-7.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-3 object-cover dark:block hidden" />
          </figure>
          <figure data-ns-animate data-delay="0.7" data-spring data-duration={2} className="max-w-[170px] md:max-w-[260px] max-h-[72px] shadow-7 rounded-2xl overflow-hidden -mt-[22px] z-20">
            <img src="/images/sub-features-8.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-2 object-cover block dark:hidden" />
            <img src="/images/sub-features-dark-8.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-2 object-cover dark:block hidden" />
          </figure>
          <figure data-ns-animate data-delay="0.8" data-spring data-duration={2} className="max-w-[160px] md:max-w-[240px] max-h-[72px] shadow-9 -mt-[22px] rounded-2xl overflow-hidden">
            <img src="/images/sub-features-9.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-2 object-cover block dark:hidden" />
            <img src="/images/sub-features-dark-9.png" alt="Ecadoc interface preview" className="w-full h-auto object-center shadow-2 object-cover dark:block hidden" />
          </figure>
        </div>
        {/* user activity */}
        <div data-ns-animate data-delay="0.5" data-direction="right" data-offset={100} data-spring data-duration={2} className="absolute top-1/2 z-10 -translate-y-1/2 rounded-2xl overflow-hidden right-0 xl:right-14 hidden lg:block shadow-4">
          <figure className="shadow-9">
            <img src="/images/user-activity-chart.svg" alt="User activity" className="block dark:hidden" />
            <img src="/images/user-activity-chart-dark.svg" alt="User activity" className="hidden dark:block" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  {/* =========================
Testimonial section
===========================*/}
  {/* <section class="pt-20 md:pt-24 lg:pt-[150px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
  <div class="max-w-[1440px] mx-auto px-4 md:px-[67px]">

    <div class="text-center mb-14 lg:mb-[70px]">
<span data-ns-animate="" data-delay="0.1" class="badge badge-green-v2 mb-5"> Reviews </span>
<h2 data-ns-animate="" data-delay="0.2" class="mb-3">
  Hear from our customers about
  <br class="hidden md:block">
  their
  <span class="text-primary-500 inline-block">experiences with us</span>
</h2>
    </div>
  </div>


  <div data-ns-animate="" data-delay="0.3" class="cards-marquee-container">
    <div class="flex items-center justify-center py-4 gap-8">

<div class="relative max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] group perspective-[1000px] ml-8">
  <div class="flipper w-full h-full">

    <div class="front rounded-[20px] space-y-8 w-full absolute top-0 p-8 left-0 h-fit bg-white dark:bg-background-6">
      <p class="text-secondary dark:text-accent max-w-[297px] text-wrap">
        "Ecadoc flags missing fire walls before review meetings and cites the sheets automatically. It's become our second set of eyes."
      </p>
      <div class="border-t border-stroke-4 dark:border-stroke-5"></div>
      <figure class="flex items-center gap-3">
        <img src="/images/avatar-1.png" class="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" alt="Avery Kim's avatar" width="44" height="44" loading="lazy">
        <figcaption>
          <h3 class="text-tagline-1 font-medium dark:text-accent">Avery Kim</h3>
          <p class="text-tagline-2 dark:text-accent/60">Design Technology Lead</p>
        </figcaption>
      </figure>
    </div>


    <div class="back max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] overflow-hidden p-8 flex flex-col justify-center items-center rounded-[20px] space-y-2 w-full h-full absolute top-0 left-0 bg-secondary dark:bg-background-6">
      <div class="absolute -left-[184px] -top-[185px] -rotate-[90deg] w-full h-full z-10 bg-[url('/images/gradient/gradient-9.png')] bg-no-repeat bg-contain"></div>
      <h3 class="text-[64px] font-light leading-[1.1] text-ns-green relative z-20">4.9</h3>
      <figure class="w-20 h-10 relative z-20">
        <img src="/images/trustpilot-logo.svg" alt="Trustpilot logo" class="w-full h-full object-contain">
      </figure>
    </div>
  </div>
</div>

<div class="relative max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] group perspective-[1000px]">
  <div class="flipper w-full h-full">

    <div class="front rounded-[20px] space-y-8 w-full absolute top-0 p-8 left-0 h-fit bg-white dark:bg-background-6">
      <p class="text-secondary dark:text-accent max-w-[297px] text-wrap">
        "We extract takeoffs in minutes now. Voice prompts pull dimensions, assemblies, and notes without leaving the model."
      </p>
      <div class="border-t border-stroke-4 dark:border-stroke-5"></div>
      <figure class="flex items-center gap-3">
        <img src="/images/avatar-2.png" class="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" alt="Leon Patel's avatar" width="44" height="44" loading="lazy">
        <figcaption>
          <h3 class="text-tagline-1 font-medium dark:text-accent">Leon Patel</h3>
          <p class="text-tagline-2 dark:text-accent/60">Preconstruction Director</p>
        </figcaption>
      </figure>
    </div>


    <div class="back max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] overflow-hidden p-8 flex flex-col justify-center items-center rounded-[20px] space-y-2 w-full h-full absolute top-0 left-0 bg-secondary dark:bg-background-6">
      <div class="absolute -left-[184px] -top-[185px] -rotate-[90deg] w-full h-full z-10 bg-[url('/images/gradient/gradient-9.png')] bg-no-repeat bg-contain"></div>
      <h3 class="text-[64px] font-light leading-[1.1] text-ns-green relative z-20">5.0</h3>
      <figure class="w-20 h-10 relative z-20">
        <img src="/images/trustpilot-logo.svg" alt="Trustpilot logo" class="w-full h-full object-contain">
      </figure>
    </div>
  </div>
</div>

<div class="relative max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] group perspective-[1000px]">
  <div class="flipper w-full h-full">

    <div class="front rounded-[20px] space-y-8 w-full absolute top-0 p-8 left-0 h-fit bg-white dark:bg-background-6">
      <p class="text-secondary dark:text-accent max-w-[297px] text-wrap">
        "Coordination used to live in email chains. Ecadoc writes the markup, tags the trade, and pushes it to sheet history."
      </p>
      <div class="border-t border-stroke-4 dark:border-stroke-5"></div>
      <figure class="flex items-center gap-3">
        <img src="/images/avatar-3.png" class="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" alt="Morgan Ellis's avatar" width="44" height="44" loading="lazy">
        <figcaption>
          <h3 class="text-tagline-1 font-medium dark:text-accent">Morgan Ellis</h3>
          <p class="text-tagline-2 dark:text-accent/60">Senior Estimator</p>
        </figcaption>
      </figure>
    </div>


    <div class="back max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] overflow-hidden p-8 flex flex-col justify-center items-center rounded-[20px] space-y-2 w-full h-full absolute top-0 left-0 bg-secondary dark:bg-background-6">
      <div class="absolute -left-[184px] -top-[185px] -rotate-[90deg] w-full h-full z-10 bg-[url('/images/gradient/gradient-9.png')] bg-no-repeat bg-contain"></div>
      <h3 class="text-[64px] font-light leading-[1.1] text-ns-green relative z-20">4.8</h3>
      <figure class="w-20 h-10 relative z-20">
        <img src="/images/trustpilot-logo.svg" alt="Trustpilot logo" class="w-full h-full object-contain">
      </figure>
    </div>
  </div>
</div>

<div class="relative max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] group perspective-[1000px]">
  <div class="flipper w-full h-full">

    <div class="front rounded-[20px] space-y-8 w-full absolute top-0 p-8 left-0 h-fit bg-white dark:bg-background-6">
      <p class="text-secondary dark:text-accent max-w-[297px] text-wrap">
        "Field teams reply to annotations immediately because Ecadoc routes every markup to the right discipline and sheet."
      </p>
      <div class="border-t border-stroke-4 dark:border-stroke-5"></div>
      <figure class="flex items-center gap-3">
        <img src="/images/avatar-4.png" class="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]" alt="Priya Das's avatar" width="44" height="44" loading="lazy">
        <figcaption>
          <h3 class="text-tagline-1 font-medium dark:text-accent">Priya Das</h3>
          <p class="text-tagline-2 dark:text-accent/60">Project Manager</p>
        </figcaption>
      </figure>
    </div>


    <div class="back max-w-[340px] sm:max-w-[358px] min-w-[340px] sm:min-w-[358px] min-h-[245px] overflow-hidden p-8 flex flex-col justify-center items-center rounded-[20px] space-y-2 w-full h-full absolute top-0 left-0 bg-secondary dark:bg-background-6">
      <div class="absolute -left-[184px] -top-[185px] -rotate-[90deg] w-full h-full z-10 bg-[url('/images/gradient/gradient-9.png')] bg-no-repeat bg-contain"></div>
      <h3 class="text-[64px] font-light leading-[1.1] text-ns-green relative z-20">4.8</h3>
      <figure class="w-20 h-10 relative z-20">
        <img src="/images/trustpilot-logo.svg" alt="Trustpilot logo" class="w-full h-full object-contain">
      </figure>
    </div>
  </div>
</div>
    </div>
  </div>
</section> */}
  {/* =========================
CTA section
===========================*/}
  <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] bg-background-2 dark:bg-background-5">
    <div className="main-container">
      <div className="text-center">
        <h2 data-ns-animate data-delay="0.1" className="mb-3">
          Try Ecadoc free today and
          <br className="hidden lg:block" />
          watch your
          <span className="text-primary-500">projects move.</span>
        </h2>
        <p data-ns-animate data-delay="0.2" className="mb-8 lg:max-w-[390px] mx-auto">
          Create an account to review drawings with AI-driven clarity across the entire project team.
        </p>
        <div data-ns-animate data-delay="0.3">
          <a href="https://app.ecadoc.ai/" className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md block w-full md:w-auto md:inline-block text-center mx-auto md:mx-0 text-tagline-2">
            <span>Get started</span>
          </a>
        </div>
        <ul className="flex flex-wrap max-lg:gap-5 items-center justify-center gap-[42px] max-lg:mt-5 mt-20">
          <li data-ns-animate data-delay="0.4" className="flex gap-3 items-center">
            <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                <path d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z" fill="white" />
              </svg>
            </span>
            <p>No credit card required</p>
          </li>
          <li data-ns-animate data-delay="0.5" className="flex gap-3 items-center">
            <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                <path d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z" fill="white" />
              </svg>
            </span>
            <p>Free 30-day pilot.</p>
          </li>
          <li data-ns-animate data-delay="0.6" className="flex gap-3 items-center">
            <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                <path d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z" fill="white" />
              </svg>
            </span>
            <p>Cancel anytime.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>
);

export default HomePage;
