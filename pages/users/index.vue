<script setup>
    definePageMeta({ layout: 'auth' })
    // import { useCounterStore } from '@/stores/counter'
    import { useAuth } from '@/stores/auth'

    // const counter = useCounterStore()
    const auth = useAuth()

    console.log(auth.user)
</script>

<template>
    <div>
        <h1>Page Users</h1>
        <span>Welcome {{ auth.user.username }}</span>

        <!-- <div>Current Count: {{ counter.$state }}</div> -->

        <!-- <button @click="counter.increment()">Count</button> -->
    </div>
</template>
