<template>
    <table id="table">
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Checked In?</th>
          <!-- <th>Check-in Guest</th> -->
          <th>Delete booking</th>
      </tr>
      <bookings-item v-for="guest in guests" :key="guest._id" :guest="guest" />
  </table>
  
</template>

<script>
import BookingsItem from './BookingsItem.vue'

export default {
name: "bookings-list",
props: ['guests'],
components: {
    "bookings-item": BookingsItem
}
}
</script>

<style scoped>
#table {
    width: 80%;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    border: none;
    border-collapse: collapse;
}

tr:nth-child(odd) * {
    background: rgb(160, 188, 188);
}

th {
    padding: 10px;
}

div {
    display: flex;
    flex-direction: column;
}

</style>