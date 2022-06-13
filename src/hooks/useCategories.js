import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function useCategories(category) {
  const products = ref([]);
  const isLoading = ref(false);
  const isError = ref(false);
  const activeCategory = ref(category);

  const fetchCategory = async (newCategory) => {
    try {
      activeCategory.value = newCategory;
      products.value = [];
      isLoading.value = true;
      // prettier-ignore
      const path = newCategory === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${newCategory}`;
      const response = await axios.get(path);
      products.value = response.data;
      isLoading.value = false;
    } catch (error) {
      isError.value = true;
    }
  };

  onMounted(fetchCategory(category));

  return {
    products,
    activeCategory,
    isLoading,
    isError,
    fetchCategory,
  };
}
