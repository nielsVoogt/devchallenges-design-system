<template>
  <Page title="Buttons">
    <!-- DEFAULT -->
    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Variants</strong>
        <p>
          There are three button variants that you can use. You can change the
          button variant by adding the
          <code>variant</code> prop, this prop accepts the following variants:
          <code>default</code>,
          <code>outline</code> and
          <code>text</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="primary" />
        </div>
        <div class="design-system-element">
          <Button variant="outline" color="primary" />
        </div>
        <div class="design-system-element">
          <Button variant="text" color="primary" />
        </div>
      </div>
    </div>

    <!-- DISABLED -->
    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Disabled</strong>
        <p>
          Every button variant can be disabled by adding the
          <code>disabled</code> attribute.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button disabled color="primary" />
        </div>
        <div class="design-system-element">
          <Button disabled variant="outline" color="primary" />
        </div>
        <div class="design-system-element">
          <Button disabled variant="text" color="primary" />
        </div>
      </div>
    </div>

    <!-- SIZE -->
    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Sizing</strong>
        <p>
          There are three button sizes that you can use. You can change the
          button size by adding the
          <code>size</code> prop, this prop accepts the following sizes:
          <code>sm</code>,
          <code>md</code> and
          <code>lg</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="primary" size="sm" />
        </div>
        <div class="design-system-element">
          <Button color="primary" size="md" />
        </div>
        <div class="design-system-element">
          <Button color="primary" size="lg" />
        </div>
      </div>
    </div>

    <!-- COLORS -->
    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Colors</strong>
        <p>
          There are five button colors. You can change the button color by
          adding the
          <code>color</code> prop, this prop accepts the following colors:
          <code>default</code>,
          <code>primary</code>,
          <code>secondary</code> and
          <code>danger</code>.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="default" />
        </div>
        <div class="design-system-element">
          <Button color="primary" />
        </div>
        <div class="design-system-element">
          <Button color="secondary" />
        </div>
        <div class="design-system-element">
          <Button color="danger" />
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="default" variant="outline" />
        </div>
        <div class="design-system-element">
          <Button color="primary" variant="outline" />
        </div>
        <div class="design-system-element">
          <Button color="secondary" variant="outline" />
        </div>
        <div class="design-system-element">
          <Button color="danger" variant="outline" />
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="default" variant="text" />
        </div>
        <div class="design-system-element">
          <Button color="primary" variant="text" />
        </div>
        <div class="design-system-element">
          <Button color="secondary" variant="text" />
        </div>
        <div class="design-system-element">
          <Button color="danger" variant="text" />
        </div>
      </div>
    </div>

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>Icons</strong>
        <p>
          Icons are not bound to the button component. There are two named slots
          available for icon alignment,
          <code>icon-left</code> and
          <code>icon-right</code>. Use these slots to
          add the icon you need, icons inherit size and color.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="default">
            <template v-slot:icon-left>
              <AccountIcon />
            </template>
            My account
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="primary">
            <template v-slot:icon-left>
              <CartPlusIcon />
            </template>
            Add to shoppingcart
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="secondary">
            <template v-slot:icon-left>
              <AccountPlusIcon />
            </template>
            Add account
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="danger">
            <template v-slot:icon-left>
              <DeleteIcon />
            </template>
            Delete
          </Button>
        </div>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button color="default">
            My account
            <template v-slot:icon-right>
              <AccountIcon />
            </template>
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="primary">
            Add to shoppingcart
            <template v-slot:icon-right>
              <CartPlusIcon />
            </template>
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="secondary">
            Add account
            <template v-slot:icon-right>
              <AccountPlusIcon />
            </template>
          </Button>
        </div>
        <div class="design-system-element">
          <Button color="danger">
            Delete
            <template v-slot:icon-right>
              <DeleteIcon />
            </template>
          </Button>
        </div>
      </div>
    </div>

    <div class="design-system-element-row">
      <div class="design-system-element-row__description">
        <strong>No shadow</strong>
        <p>
          If you don't want a shadow you can remove the box-shadow by adding the
          <code>disable-shadow</code> prop.
        </p>
      </div>
      <div class="design-system-element-row__content">
        <div class="design-system-element">
          <Button disable-shadow color="primary" />
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import Button from "@/components/Button.vue";

import AccountIcon from "vue-material-design-icons/Account.vue";
import CartPlusIcon from "vue-material-design-icons/CartPlus.vue";
import AccountPlusIcon from "vue-material-design-icons/AccountPlus.vue";
import DeleteIcon from "vue-material-design-icons/Delete.vue";

import "vue-material-design-icons/styles.css";

export default {
  name: "Home",
  components: {
    Button,
    Page,
    AccountIcon,
    CartPlusIcon,
    AccountPlusIcon,
    DeleteIcon,
  },
};
</script>
