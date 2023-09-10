<template>
    <aside class="bg-cyan-700 top-0 sticky text-cyan-50 flex flex-col justify-between h-screen w-48 p-4">
        <ul class="grid">
            <NuxtLink to="/users" active-class="active-link">Users</NuxtLink>
            <NuxtLink to="/devices" active-class="active-link">Devices</NuxtLink>
        </ul>

        <NuxtLink to="/" class="text-right">Logout</NuxtLink>
    </aside>
</template>

<style>
  .active-link {
    border-bottom: 1px solid white;
  }
</style>
