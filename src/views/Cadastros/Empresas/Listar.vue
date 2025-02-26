<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div
      class="h-full rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12"
    >
      <div class="mx-auto w-full text-center">
        <el-table :data="state.tableData" v-loading="state.loading" style="width: 100%">
          <el-table-column prop="id_empresa" label="#" width="50" />
          <el-table-column prop="razao" label="Empresa" />
          <el-table-column prop="email" label="Email" />

          <el-table-column label="" width="120">
            <template #default="{ row }">
              <div class="flex space-x-2">
                <el-button @click="{ row }" type="primary" :icon="Edit" circle />

                <el-button @click="{ row }" type="danger" :icon="Delete" circle />
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <pagination
        :pagination="state.pagination"
        :handlePageChange="handlePageChange"
        :handleCurrentChange="handleCurrentChange"
      />
    </div>
  </AdminLayout>
</template>

<script setup>
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import Pagination from '@/components/pagination/index.vue'
import { onMounted, reactive, ref, computed } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const currentPageTitle = ref('Unidades')

const store = useStore()

const state = reactive({
  tableData: [],
  loading: true,
  pagination: {
    currentPage: 1,
    perPage: 10,
    total: 0,
  },
})

const handlePageChange = (page) => {
  state.pagination.currentPage = page
  listCompany(state.pagination)
}

const handleCurrentChange = (page) => {
  state.pagination.perPage = page
  listCompany(state.pagination)
}

async function listCompany(pagination) {
  try {
    let result = await store.dispatch('Empresa/listar', pagination)
    state.tableData = result.data.data
    state.pagination = result.data.pagination
  } catch (error) {
    console.log('Erro ao listar unidades', error)
  } finally {
    state.loading = false // Desativa o loading
  }
}

onMounted(() => {
  listCompany(state.pagination)
})
</script>

<style></style>
