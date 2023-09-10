<script setup>
    definePageMeta({ layout: 'auth' })

    import 'devextreme/dist/css/dx.light.css'
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
    import { useAuth } from '@/stores/auth'
    import { useUsers } from '@/stores/users'

    const auth = useAuth()
    const user = useUsers()

    onMounted(async () => {
      await user.listUsers();
    })
</script>

<template>
    <div>
        <h1>Page Users</h1>
        <span>Welcome {{ auth.user.username }}</span>

        <DxDataGrid :data-source="user.users">
          <DxColumn data-field="id" />
          <DxColumn data-field="name" />
          <DxColumn data-field="createdAt" data-type="date" />
        </DxDataGrid>
    </div>
</template>
