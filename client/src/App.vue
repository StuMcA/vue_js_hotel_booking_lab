<template>
  <div id="app">
    <h1>Book a Guest</h1>
    <bookings-form/>
    <bookings-list :guests="guests"/> 
  </div>
</template>

<script>
import BookingsForm from '@/components/BookingsForm.vue';
import BookingsList from '@/components/BookingsList.vue';
import BookingsService from '@/services/BookingsService.js'
import {eventBus} from '@/main.js'

export default {
  name: 'App',
  data() {
    return {
      guests: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList
  },
  mounted() {
    BookingsService.getGuests()
    .then(guests => this.guests = guests);

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)  
    })

    eventBus.$on('guest-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    })

    eventBus.$on('guest-updated', (updatedGuest) => {
      let index = this.guests.findIndex(guest => guest._id === updatedGuest._id)
      const data = {
        name: updatedGuest.name,
        email: updatedGuest.email,
        checkedIn: updatedGuest.checkedIn
      }
      BookingsService.updateGuest(updatedGuest._id, data)
      this.guests.splice(index, 1, updatedGuest)
    })
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
