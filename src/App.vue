<template>
    <div id="app">
 <div style="height: 100vh"></div>
      <div v-animate-in-view="{ enterClass: 'fade-in', leaveClass: 'fade-out', leaveAtTop:true }">
        This element will fade in and out when 25% visible due to scrolling.
      </div>
      <div style="height: 100vh"></div>
      <!-- Slide In from Left and Slide Out to Left -->
      <div>
        <div  v-animate-in-view="{ enterClass: 'slide-in-left', leaveClass: 'slide-out-left' }">
          This element will slide in from the left and slide out to the left when 25% visible due to scrolling.
        </div>
      </div>

      <!-- Slide In from Right and Slide Out to Right -->
      <div v-animate-in-view="{ enterClass: 'slide-in-right', leaveClass: 'slide-out-right' }">
        This element will slide in from the right and slide out to the right when 25% visible due to scrolling.
      </div>

      <!-- Slide In from Up and Slide Out to Up -->
      <div v-animate-in-view="{ enterClass: 'slide-in-up', leaveClass: 'slide-out-up'}">
        This element will slide in from the bottom and slide out to the top when 25% visible due to scrolling.
      </div>

      <!-- Slide In from Down and Slide Out to Down -->
      <div v-animate-in-view="{ enterClass: 'slide-in-down', leaveClass: 'slide-out-down' }">
        This element will slide in from the top and slide out to the bottom when 25% visible due to scrolling.
      </div>

      <!-- Scale In and Out -->
      <div v-animate-in-view="{ enterClass: 'scale-in', leaveClass: 'scale-out' }">
        This element will scale in and out when 25% visible due to scrolling.
      </div>

      <!-- Rotate In and Out -->
      <div v-animate-in-view="{ enterClass: 'rotate-in', leaveClass: 'rotate-out' }">
        This element will rotate in and out when 25% visible due to scrolling.
      </div>

      <!-- Flip In X and Flip Out X -->
      <div v-animate-in-view="{ enterClass: 'flip-in-x', leaveClass: 'flip-out-x' }">
        This element will flip in horizontally and flip out when 25% visible due to scrolling.
      </div>

      <!-- Flip In Y and Flip Out Y -->
      <div v-animate-in-view="{ enterClass: 'flip-in-y', leaveClass: 'flip-out-y' }">
        This element will flip in vertically and flip out when 25% visible due to scrolling.
      </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
div{
  margin-top: 25vh;
  margin-bottom: 25vh;
}
</style>
