import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="w-full h-screen flex items-center justify-center bg-black">
    <div class="relative w-96 h-auto bg-gray-200 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div class="absolute rounded-full bg-gray-100 w-28 h-28 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div class="rounded-full bg-black w-full h-full overflow-auto">
                <img src="https://avatars.githubusercontent.com/u/100142076?s=400&u=94bb7a4a35cd1505c046a24721c0a55fd6cedc00&v=4">
            </div>
        </div>
        <label class="font-bold text-lg">
            Algo Hispano
        </label>
        <p class="text-center mt-2 leading-relaxed">
        Club de Algoritmia Hispano, comunidad de personas interesadas en el mundo de los algoritmos, las estructuras de datos y las ciencias de la computación.
        </p>
        <ul class="flex flex-row gap-2 mt-4">
                <!-- discord -->
                <a href="https://discord.gg/6dewW2j" target="_blank">
                <svg width="36px" height="36px" class="h-10 w-10 hover:text-gray-600 transition" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="512" cy="512" r="512" style="fill:#5865f2"/>
                    <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" style="fill:#fff"/>
                </svg>
             
                </a>

                <!-- twitter -->
                <a href="https://twitter.com/algohispano" target="_blank">
                <svg width="36px" height="36px" class="h-10 w-10 hover:text-gray-600 transition" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 112.197 112.197" style="enable-background:new 0 0 112.197 112.197;" xml:space="preserve">
             <g>
               <circle style="fill:#55ACEE;" cx="56.099" cy="56.098" r="56.098"/>
               <g>
                 <path style="fill:#F1F2F2;" d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417
                   c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409
                   c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742
                   c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17
                   c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239
                   c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188
                   c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734
                   C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"/>
               </g>
             </g>
             </svg>
                </a>

                <!-- github -->
                <a href="https://github.com/algohispano" target="_blank">
                <svg width="38px" height="38px" class="h-10 w-10 hover:text-gray-600 transition" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
                </a>

                <!-- youtube -->
                <a href="https://www.youtube.com/c/AlgoHispano/videos" target="_blank">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" class="h-10 w-10 hover:text-gray-600 transition"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<circle style="fill:#D22215;" cx="256" cy="256" r="256"/>
<path style="fill:#A81411;" d="M384.857,170.339c-7.677,2.343-15.682,4.356-23.699,6.361
	c-56.889,12.067-132.741-20.687-165.495,32.754c-27.317,42.494-35.942,95.668-67.017,133.663L294.629,509.1
	c110.47-16.72,197.773-104.036,214.476-214.511L384.857,170.339z"/>
<path style="fill:#FFFFFF;" d="M341.649,152.333H170.351c-33.608,0-60.852,27.245-60.852,60.852v85.632
	c0,33.608,27.245,60.852,60.852,60.852h171.298c33.608,0,60.852-27.245,60.852-60.852v-85.632
	C402.501,179.578,375.256,152.333,341.649,152.333L341.649,152.333z M300.494,260.167l-80.12,38.212
	c-2.136,1.019-4.603-0.536-4.603-2.901v-78.814c0-2.4,2.532-3.955,4.67-2.87l80.12,40.601
	C302.947,255.602,302.904,259.019,300.494,260.167L300.494,260.167z"/>
<path style="fill:#D1D1D1;" d="M341.649,152.333h-87.373v78.605l46.287,23.455c2.384,1.208,2.341,4.624-0.069,5.773l-46.218,22.044
	v77.459h87.373c33.608,0,60.852-27.245,60.852-60.852v-85.632C402.501,179.578,375.256,152.333,341.649,152.333z"/>
</svg>
                </a>


                <!-- youtube -->
                <a href="https://www.twitch.tv/algohispano" target="_blank">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38px" height="38px" class="h-10 w-10 hover:text-gray-600 transition"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <circle style="fill:#A258CB;" cx="256" cy="256" r="256"/>
                    <path style="fill:#933EC6;" d="M256,0c-11.317,0-22.461,0.744-33.391,2.167C348.216,18.53,445.217,125.933,445.217,256
                        s-97.002,237.47-222.609,253.833C233.539,511.256,244.683,512,256,512c141.385,0,256-114.616,256-256S397.385,0,256,0z"/>
                    <path style="fill:#6E2C92;" d="M169.472,409.345l-23.026-37.754c-1.282-2.101-3.565-3.384-6.027-3.384H95.546
                        c-3.899,0-7.06-3.161-7.06-7.06V157.973c0-1.28,0.347-2.536,1.006-3.632l30.572-50.951c1.276-2.126,3.574-3.427,6.054-3.427h279.206
                        c3.899,0,7.06,3.161,7.06,7.06v168.89c0,1.872-0.743,3.667-2.068,4.992l-85.235,85.235c-1.323,1.323-3.12,2.068-4.992,2.068h-82.111
                        c-2.442,0-4.712,1.262-5.999,3.338l-23.48,37.846c-1.288,2.076-3.556,3.338-5.999,3.338h-27
                        C173.038,412.729,170.754,411.447,169.472,409.345z"/>
                    <path style="fill:#FFFFFF;" d="M167.87,323.685h-19.702c-2.226,0-4.03-1.804-4.03-4.03v-160.01c0-2.226,1.804-4.029,4.03-4.029
                        h226.793c2.226,0,4.03,1.804,4.03,4.03v95.262c0,1.069-0.424,2.094-1.18,2.849l-64.748,64.748c-0.756,0.756-1.781,1.18-2.849,1.18
                        h-99.65c-1.446,0-2.781,0.775-3.498,2.03l-14.349,25.11c-1.547,2.707-5.451,2.707-6.998,0l-14.349-25.11
                        C170.652,324.46,169.316,323.685,167.87,323.685z"/>
                    <g>
                        <path style="fill:#6E2C92;" d="M199.791,264.494v-60.817c0-1.954,1.585-3.539,3.539-3.539h27.425c1.954,0,3.539,1.585,3.539,3.539
                            v60.817c0,1.954-1.585,3.539-3.539,3.539h-27.425C201.376,268.033,199.791,266.448,199.791,264.494z"/>
                        <path style="fill:#6E2C92;" d="M277.704,264.494v-60.817c0-1.954,1.585-3.539,3.539-3.539h27.425c1.954,0,3.539,1.585,3.539,3.539
                            v60.817c0,1.954-1.585,3.539-3.539,3.539h-27.425C279.289,268.033,277.704,266.448,277.704,264.494z"/>
                    </svg>
                </a>

        </ul>
    </div>
</div>
`;
