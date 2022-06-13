import { computed, ref } from 'vue';

export default function useFilterSearchedProducts(filteredProducts) {
  const searchValue = ref('');

  // eslint-disable-next-line arrow-body-style
  const filterSearchedProducts = computed(() => {
    // prettier-ignore
    return filteredProducts.value.filter(
      ({ title, description }) =>
        // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
        title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()) ||
        description.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()),
    );
  });

  return {
    searchValue,
    filterSearchedProducts,
  };
}
