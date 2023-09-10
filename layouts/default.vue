<template>
    <div class="flex h-screen">
        <div class="
            hidden flex-col items-center justify-center bg-cyan-700 px-4
            sm:flex sm:w-1/3
            lg:w-1/2
        ">
            <div class="grid gap-2">
                <h1 class="text-4xl font-bold tracking-wide text-white">Welcome Page</h1>

                <p class="text-xl text-cyan-400">Sign in to continue access</p>
            </div>
        </div>
        
        <div class="flex flex-1 items-center justify-center bg-cyan-50 px-4">
            <slot />
        </div>
    </div>
</template>