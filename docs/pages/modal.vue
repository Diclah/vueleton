<template>
  <section>
    <h3>Modal</h3>
    <button @click="onShow">Show modal</button>
    <button @click="onShowMessage">Show message</button>
    <modal transition="fade" :visible="visible" @close="onClose">
      <div class="demo-modal-body">
        <h1>Hello, world!</h1>
        <button @click="onClose">Close</button>
      </div>
    </modal>
  </section>
</template>

<script>
import Modal from 'vueleton/lib/modal';
import doc from '~/components/modal/doc.md';
import Message from '~/components/modal/message';
import store from '~/assets/store';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    store.doc = doc;
  },
  methods: {
    onShow() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onShowMessage() {
      Modal.show(h => h(Message), {
        transition: 'in-out',
      });
    },
  },
};
</script>

<style>
.demo-modal-body {
  width: 200px;
  margin: 100px auto 0;
  padding: 30px;
  background: white;
}

.in-out {
  &-appear,
  &-enter,
  &-leave-active {
    > .demo-modal-message {
      transform: translateY(-120%);
    }
  }
  &-appear-active,
  &-enter-active,
  &-leave-active {
    &,
    > * {
      transition: transform .5s;
    }
  }
}

.fade {
  &-appear,
  &-enter,
  &-leave-active {
    > * {
      opacity: 0;
    }
  }
  &-appear-active,
  &-enter-active,
  &-leave-active {
    &,
    > * {
      transition: opacity .5s;
    }
  }
}
</style>
