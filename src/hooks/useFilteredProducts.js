import { computed, ref } from 'vue';

export default function useFilteredProducts(products) {
  const selectValue = ref('');

  const filteredProducts = computed(() => {
    switch (selectValue.value) {
      case 'priceUp':
        return [...products.value].sort((a, b) => a.price - b.price);
      case 'priceDown':
        return [...products.value].sort((a, b) => b.price - a.price);
      case 'titleDown':
        return [...products.value].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return [...products.value].sort((a, b) => a.title.localeCompare(b.title));
    }
  });

  return {
    selectValue,
    filteredProducts,
  };
}
