<template>
        <tr :class="guest.checkedIn ? 'checkedIn' : 'notCheckedIn'">
            <td>{{guest.name}}</td>
            <td>{{guest.email}}</td>
            <!-- <td>{{guest.checkedIn}}</td> -->
            <td v-if="!guest.checkedIn">
                <button @click="updateCheckIn">Check-In</button>
            </td>
            <td v-else>&#10003</td>
            <td>
                <button @click="deleteGuest">Delete</button>
            </td>
        </tr>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import {eventBus} from '@/main.js'

export default {
    name:"bookings-item",
    props: ['guest'],
    methods: {
        deleteGuest: function() {
            BookingsService.deleteGuest(this.guest._id)
            .then(() => eventBus.$emit('guest-deleted', this.guest._id))
        },

        updateCheckIn: function() {
            const updatedGuest = {
               ...this.guest,
               checkedIn: true
            };
            eventBus.$emit('guest-updated', updatedGuest)
        }
    }

}
</script>

<style scoped>

.checkedIn:nth-child(even), .notCheckedIn:nth-child(even) {
    background:  rgba(160, 188, 188, 0.122);
}

.checkedIn {
    font-weight: bolder;
    color: rgb(160, 188, 188);
    order: 99;
}

td {
    padding: 10px;
    width: 20%;
}

</style>