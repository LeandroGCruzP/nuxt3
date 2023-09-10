<script setup>
    definePageMeta({ layout: 'auth' })

    import 'devextreme/dist/css/dx.light.css'
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
    import { useUsers } from '@/stores/users'

    const users = useUsers()

    onMounted(async () => {
      await users.listUsers();
    })
</script>

<template>
    <div>
        <h1>Users</h1>

        <DxDataGrid :data-source="users.users">
          <DxColumn data-field="id" />
          <DxColumn data-field="name" />
          <DxColumn data-field="createdAt" data-type="date" />
        </DxDataGrid>
    </div>
</template>
