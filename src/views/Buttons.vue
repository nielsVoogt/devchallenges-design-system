<template>
  <Page title="Buttons">
    <!-- DEFAULT -->
    <div class="design-system-element-row">
      <div class="design-system-element">
        <code>
          <pre>&lt;Button /&gt;</pre>
        </code>
        <Button />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button variant=&quot;outline&quot; /&gt;</pre>
        </code>
        <Button variant="outline" />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button variant=&quot;text&quot; /&gt;</pre>
        </code>
        <Button variant="text" />
      </div>
    </div>

    <!-- OUTLINE -->
    <div class="design-system-element-row"></div>

    <!-- TEXT -->
    <div class="design-system-element-row"></div>

    <!-- NO SHADOW  -->
    <div class="design-system-element-row">
      <div class="design-system-element">
        <code>
          <pre>&lt;Button disableShadow /&gt;</pre>
        </code>
        <Button disableShadow color="primary" />
      </div>
    </div>

    <!-- DISABLED -->
    <div class="design-system-element-row">
      <div class="design-system-element">
        <code>
          <pre>&lt;Button disabled/&gt;</pre>
        </code>
        <Button disabled />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button disabled variant=&quot;outline&quot; /&gt;</pre>
        </code>
        <Button disabled variant="outline" />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button disabled variant=&quot;text&quot; /&gt;</pre>
        </code>
        <Button disabled variant="text" />
      </div>
    </div>

    <!-- SIZE -->
    <div class="design-system-element-row">
      <div class="design-system-element">
        <code>
          <pre>&lt;Button size=&quot;sm&quot; /&gt;</pre>
        </code>
        <Button color="primary" size="sm" />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button size=&quot;md&quot; /&gt;</pre>
        </code>
        <Button color="primary" size="md" />
      </div>
      <div class="design-system-element">
        <code>
          <pre>&lt;Button size=&quot;lg&quot; /&gt;</pre>
        </code>
        <Button color="primary" size="lg" />
      </div>
    </div>

    <!-- COLORS -->
    <div class="design-system-element-row">
      <div class="design-system-element">
        <code>
          <pre></pre>
        </code>
        <Button color="default" />
      </div>
      <div class="design-system-element">
        <code>
          <pre></pre>
        </code>
        <Button color="primary" />
      </div>
      <div class="design-system-element">
        <code>
          <pre></pre>
        </code>
        <Button color="secondary" />
      </div>
      <div class="design-system-element">
        <code>
          <pre></pre>
        </code>
        <Button color="danger" />
      </div>
    </div>

    <Button>
      <template v-slot:icon-left>
        <AccountIcon />
      </template>
      My account
    </Button>

    <Button>
      <template v-slot:icon-left>
        <CartPlusIcon />
      </template>
      Add to shoppingcart
    </Button>

    <Button>
      <template v-slot:icon-left>
        <AccountPlusIcon />
      </template>
      Add account
    </Button>

    <Button>
      <template v-slot:icon-left>
        <PrinterIcon />
      </template>
      Print
    </Button>

    <Button>
      <template v-slot:icon-left>
        <PhoneIcon />
      </template>
      Call
    </Button>
  </Page>
</template>

<script>
import "vue-material-design-icons/styles.css";

import Page from "@/components/Page.vue";
import Button from "@/components/Button.vue";

import AccountIcon from "vue-material-design-icons/Account.vue";
import CartPlusIcon from "vue-material-design-icons/CartPlus.vue";
import PrinterIcon from "vue-material-design-icons/Printer.vue";
import AccountPlusIcon from "vue-material-design-icons/AccountPlus.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";

export default {
  name: "Home",
  components: {
    Button,
    Page,
    AccountIcon,
    CartPlusIcon,
    PrinterIcon,
    AccountPlusIcon,
    PhoneIcon,
  },
};
</script>

<style lang="scss">
.design-system-element-row {
  display: flex;
}

.design-system-element {
  min-width: 15em;
  margin-bottom: 2em;
  code {
    margin-bottom: 1em;
    display: block;
  }
}
</style>
