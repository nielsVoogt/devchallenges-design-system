<template>
  <Page title="Inputs">
    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Form group</strong>
        <p>
          I didn't feel that incorporating a label, help- and error-texts into a
          'input' component would make any sense. Thus I created a
          <code>FormGroup</code> component instead that takes a
          <code>input</code>
          via a slot.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- ERROR -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Error</strong>
        <p>
          ....
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label" error>
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- DISABLED -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Disabled</strong>
        <p>
          ....
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label">
            <input type="text" placeholder="Placeholder" disabled />
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- HELP -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Help text</strong>
        <p>
          ....
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label" help="Some interesting text">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element">
          <FormGroup label="Label" help="Some interesting text" error>
            <input type="password" placeholder="Placeholder" />
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- ICON -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Icons</strong>
        <p>
          ....
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon><PhoneIcon /></template>
          </FormGroup>
        </div>
        <div class="design-system-element">
          <FormGroup label="Label" icon-right>
            <input type="password" placeholder="Placeholder" />
            <template v-slot:icon><LockIcon /></template>
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- INPUT TYPES -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Input types</strong>
        <p>
          ....
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <FormGroup label="Label">
            <textarea placeholder="Placeholder" />
          </FormGroup>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import FormGroup from "@/components/FormGroup.vue";
import LockIcon from "vue-material-design-icons/Lock.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";

import "vue-material-design-icons/styles.css";

export default {
  name: "Inputs",
  components: {
    FormGroup,
    PhoneIcon,
    LockIcon,
    Page,
  },
};
</script>
