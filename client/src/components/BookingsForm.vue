<template>
  <form @submit="addGuest" id="form">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <input type="submit" value="Add Booking" id="submit">
  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: "bookings-form",
    data() {
        return {
            name: '',
            email: '',
            checkedIn: false
        }
    },
    methods: {
    addGuest(event) {
        event.preventDefault();
        const guest = {
            name: this.name,
            email: this.email,
            checkedIn: this.checkedIn
        }
        BookingsService.postGuest(guest)
        .then(res => eventBus.$emit('guest-added', res))
        form.reset()
    }
  }
}
</script>

<style scoped>

    input, label {
        margin: 5px;
    }

    #submit {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }


</style>