import axios from 'axios';
import { ref, onMounted } from 'vue';

export default function useSingleProduct(productId) {
  const product = ref({});
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchProduct = async () => {
    try {
      isLoading.value = true;
      // prettier-ignore
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`,
      );
      product.value = response.data;
      isLoading.value = false;
    } catch (error) {
      isError.value = true;
    }
  };

  onMounted(fetchProduct);

  return {
    product,
    isLoading,
    isError,
  };
}
