<template>
  <h1 class="font-handwriting text-5xl text-lightGray">
    Hey
    <span id="itsme" class="text-brightRed inline-block">it's-a me</span>
    <span class="block mt-2 md:inline-block md:pl-4">Burak!</span>
  </h1>
</template>

<style scoped>
#itsme {
  animation: myAnim 0.75s ease-in-out 0s 1 normal forwards;
}

@keyframes myAnim {
  0% {
    transform: scale(0.1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
