<template>
  <div
    :draggable="draggable"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script setup>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "../constants";

const props = defineProps({
  draggable: { type: Boolean, default: true },
  dataTransfer: {
    type: Object,
    required: true,
  },
});

function onDrag({ dataTransfer }) {
  dataTransfer.effectAllowed = MOVE;
  dataTransfer.dropEffect = MOVE;
  dataTransfer.setData(
    DATA_TRANSFER_PAYLOAD,
    JSON.stringify(props.dataTransfer)
  );
}
</script>
