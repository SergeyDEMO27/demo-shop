import axios from 'axios';
import { ref, onMounted } from 'vue';

export default function useProducts(categories, productsLimit) {
  const products = ref([]);
  const isProductsLoading = ref(false);
  const isError = ref(false);

  const fetching = () => {
    categories.map(async (categorie) => {
      try {
        isProductsLoading.value = true;
        // prettier-ignore
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${categorie}`,
          {
            params: {
              limit: productsLimit,
            },
          },
        );
        products.value = [...products.value, ...response.data];
        isProductsLoading.value = false;
      } catch (error) {
        isError.value = true;
      }
    });
  };

  onMounted(fetching);

  return {
    products,
    isProductsLoading,
    isError,
  };
}
