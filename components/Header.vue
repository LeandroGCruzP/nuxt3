<script>
  import { useAuth } from '~/stores/auth'

  const auth = useAuth()

  console.log('DATA', auth.user.username)
</script>

<template>
  <div class="flex justify-between">
    <div></div>

    <!-- <span>Welcome {{ auth.user.username }}</span> -->
    <span>Welcome!</span>
  </div>
</template>
