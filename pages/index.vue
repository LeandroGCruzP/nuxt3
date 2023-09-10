<template>
    <div 
        class="
            w-full bg-white border border-cyan-400 p-6 rounded-lg shadow-md text-cyan-950
            md:w-4/5
            xl:w-2/3
        "
    >
        <h1 class="text-2xl font-semibold text-center">LOGIN</h1>

        <form class="grid gap-4">
            <div class="grid">
                <label for="username">Username</label>
                <input id="username" type="text" autofocus class="h-10 border border-cyan-100 px-2 outline-none focus:border-cyan-400" />
                <label for="username" class="text-red-500 text-sm">* Error</label>
            </div>

            <div class="grid">
                <label for="password">Password</label>
                <input id="password" type="password" class="h-10 border border-cyan-100 px-2 outline-none focus:border-cyan-400" />
                <label for="password" class="text-red-500 text-sm">* Error</label>
            </div>

            <button type="submit" class="h-10 rounded-md bg-cyan-700 text-white outline-none transition-all hover:bg-cyan-600 focus:bg-cyan-600">Login</button>
        </form>
    </div>
</template>