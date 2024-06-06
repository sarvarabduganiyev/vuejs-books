<template>
  <div class="main-container">
    <SearchForm/>
    <div v-if="booksStore.loading">
      <div v-for="item in staticArr" :key="item">
        <TableSkeleton/>
      </div>
    </div>
    <div v-if="!booksStore.loading && booksStore?.books?.items?.length">
      <table class="table">
        <thead>
        <tr>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>IMAGE</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in booksStore?.books?.items" :key="item.id">
          <td class="redirect_link" @click="navigateDetail(item?.volumeInfo?.industryIdentifiers?.[0]?.identifier)">
            {{ item?.volumeInfo?.title }}
          </td>
          <td>
            <p v-for="author in item?.volumeInfo?.authors">{{ author }}</p>
          </td>
          <td>
            <img :src="item.volumeInfo?.imageLinks?.thumbnail" alt="book-img">
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import SearchForm from "../components/SearchForm.vue";
import {useBooksStore} from "../stores/index.js";
import {useRouter} from "vue-router";
import TableSkeleton from "../components/TableSkeleton.vue";

const router = useRouter();

const booksStore = useBooksStore();
const staticArr = new Array(2).fill(null);

const navigateDetail = (param) => {
  router.push({path: `/book-detail/${param}`});
}

</script>

<style scoped>

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid var(--tableBorderColor);
  padding: 8px;
  width: 25%;
  text-align: left;
}


.table th img {
  width: 128px;
  height: 160px;
  object-fit: cover;
}

.table th {
  background-color: var(--primaryColor);
  color: var(--white-color);
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.redirect_link {
  color: var(--primaryColor);
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 586px) {
  .table {
    width: 586px;
    overflow-x: auto;
  }
}

</style>
