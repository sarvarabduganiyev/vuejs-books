<template>
  <div class="search-container">
    <form @submit.prevent="handleSearch" class="search-form">
      <input
          v-model="query"
          type="text"
          placeholder="Search..."
          class="search-input"
      />
      <button type="submit" class="search-button">Search</button>
    </form>
  </div>
</template>

<script>
import {ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useBooksStore} from "../stores";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const query = ref(route.query.q || '');
    const books = ref([]);
    const booksStore = useBooksStore();

    const handleSearch = () => {
      if (!query.value) {
        return alert("Please enter a valid search term");
      }
      router.push({query: {q: query.value}});
    };


    // const validateAlpha = ($event) => {
    //   const charCode = $event.keyCode || $event.which;
    //   if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
    //     $event.preventDefault();
    //   }
    // };

    watch(() => route.query.q, (newQuery) => {
      if (newQuery) {
        booksStore.fetchBooksOrBook({ q: newQuery });
      }
    }, {immediate: true});

    return {query, handleSearch, books};
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}

.search-form {
  display: flex;
  width: 100%;
  max-width: 500px;
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #007BFF;
}

.search-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #007BFF;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

.results-container {
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
}

.results-list {
  list-style: none;
  padding: 0;
}

.result-item {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

.result-item:nth-child(even) {
  background-color: #f1f1f1;
}

.result-item:last-child {
  border-bottom: none;
}
</style>
