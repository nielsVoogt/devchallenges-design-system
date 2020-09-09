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
          via a slot. All user stories are still achieved by doing it this way.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
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
          You can hint the user at errors in the form by adding
          <code>error</code> prop.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
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
        Every input type can be disabled by adding the
        <code>disabled</code> attribute to the native HTML element.
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
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
        You can assist the user by adding help text. Adding this is as simple as
        adding the
        <code>help</code> prop. This prop accepts a string.
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" help="Some interesting text">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
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
          Icons are not bound to the
          <code>FormGroup</code> component. There is a named slot,
          <code>icon</code>,
          available for adding a icon. To have your icon right aligned add the prop
          <code>icon-right</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon>
              <PhoneIcon />
            </template>
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" icon-right>
            <input type="password" placeholder="Placeholder" />
            <template v-slot:icon>
              <LockIcon />
            </template>
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- COLORS -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Colors</strong>
        <p>
          There are currently two colors you can assign to the component. You can change the color by
          adding the
          <code>color</code> prop, this prop accepts the following colors:
          <code>secondary</code> and
          <code>tetriary</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" color="primary">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" color="tetriary">
            <input type="password" placeholder="Placeholder" />
          </FormGroup>
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" color="primary">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon>
              <PhoneIcon />
            </template>
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" icon-right color="tetriary">
            <input type="password" placeholder="Placeholder" />
            <template v-slot:icon>
              <LockIcon />
            </template>
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- SIZES -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Sizes</strong>
        <p>
          There are three input sizes that you can use. You can change the
          input size by adding the
          <code>size</code> prop, this prop accepts the following sizes:
          <code>sm</code>,
          <code>md</code> and
          <code>lg</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="sm">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="sm">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon>
              <PhoneIcon />
            </template>
          </FormGroup>
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="md">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="md">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon>
              <PhoneIcon />
            </template>
          </FormGroup>
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="lg">
            <input type="text" placeholder="Placeholder" />
          </FormGroup>
        </div>
        <div class="design-system-element design-system-element--fixed-width">
          <FormGroup label="Label" size="lg">
            <input type="text" placeholder="Placeholder" />
            <template v-slot:icon>
              <PhoneIcon />
            </template>
          </FormGroup>
        </div>
      </div>
    </div>

    <!-- INPUT TYPES -->

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Input types</strong>
        <p>
          Just add whatever input type you need, for example a
          <code>textarea</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element design-system-element--fixed-width">
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
