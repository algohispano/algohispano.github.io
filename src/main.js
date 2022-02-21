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
        </ul>
    </div>
</div>
`;
