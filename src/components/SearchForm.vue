<template>
  <div class="search-container">
    <form @submit.prevent="handleSearch" class="search-form">
      <input
          v-model="query"
          :name="query"
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
import {useBooksStore} from '../stores';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const query = ref(route.query.q || '');
    const booksStore = useBooksStore();

    const handleSearch = () => {
      if (!query.value) {
        return alert('Please enter a valid search term');
      }
      router.push({query: {q: query.value}});
    };

    watch(() => route.query.q, (newQuery) => {
      if (newQuery) {
        booksStore.findBooks({q: newQuery});
      }
    }, {immediate: true});

    return {query, handleSearch};
  },

};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--ligthColor);
  border-radius: 8px;
  box-shadow: var(--searchContentShadow);
  margin: 2rem auto;
}

.search-form {
  display: flex;
  width: 100%;
}

.search-input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 2px solid var(--tableBorderColor);
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: var(--primaryColor);
}

.search-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background-color:var(--primaryColor);
  color: var(--white-color);
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

@media (max-width: 586px) {
  .search-container {
    padding: 2rem 20px;
  }

  .search-input {
    width: 100%;
  }
  .search-button{
    padding: 10px;
  }
}
</style>

