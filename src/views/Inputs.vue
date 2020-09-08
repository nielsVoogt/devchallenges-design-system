<template>
  <Page title="Inputs">
    <FormGroup label="Label" error-text="Wrong answer buddy">
      <input type="text" placeholder="Placeholder" />
      <template v-slot:icon>
        <CartPlusIcon />
      </template>
    </FormGroup>
  </Page>
</template>

<script>
import "vue-material-design-icons/styles.css";

import Page from "@/components/Page.vue";
import FormGroup from "@/components/FormGroup.vue";
import CartPlusIcon from "vue-material-design-icons/CartPlus.vue";

export default {
  name: "Inputs",
  components: {
    FormGroup,
    CartPlusIcon,
    Page,
  },
};
</script>
