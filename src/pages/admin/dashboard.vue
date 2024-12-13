<template>
  <NavigationDrawer />
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Dashboard</v-card-title>
          <v-card-text>
            Welcome to the dashboard.
            <v-row>
              <v-col
                cols="12"
                xs="6"
                sm="3"
                md="3"
              >
                <v-card color="green">
                  <v-card-title>Total Companys</v-card-title>
                  <v-card-text class="text-h3 text-right">
                    52
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                xs="6"
                sm="3"
                md="3"
              >
                <v-card color="blue">
                  <v-card-title>Total Users</v-card-title>
                  <v-card-text class="text-h3 text-right">
                    102
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                xs="6"
                sm="3"
                md="3"
              >
                <v-card color="red">
                  <v-card-title>Total Chats</v-card-title>
                  <v-card-text class="text-h3 text-right">
                    102
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                xs="6"
                sm="3"
                md="3"
              >
                <v-card color="purple">
                  <v-card-title>Total Messages</v-card-title>
                  <v-card-text class="text-h3 text-right">
                    102
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>


      <v-col
        cols="12"
        md="6"
        class="pa-4"
      >
        <v-card
          class="mx-auto text-center"
          dark
        >
          <v-card-title>Bar Chart</v-card-title>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <Bar
                :data="chart1.data"
                :options="chart1.options"
              />
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pa-4"
      >
        <v-card
          class="mx-auto text-center"
          dark
        >
          <v-card-title>Line Chart</v-card-title>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <Line
                :data="chart2.data"
                :options="chart2.options"
              />
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>



      <v-col
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>Users</v-card-title>
          <v-card-text>
            <v-table
              height="300px"
              fixed-header
            >
              <thead>
                <tr>
                  <th class="text-left">
                    Company
                  </th>
                  <th class="text-left">
                    users
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in users"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.users }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>Users</v-card-title>
          <v-card-text>
            <v-data-table :items="datatableitems" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, LineElement, BarElement, PointElement, Title, Tooltip, Legend);
import { Bar, Line } from 'vue-chartjs'

definePage({
  meta: {
    title: 'Dashboard',
    description: 'The page for administrators to manage the system.',
    requiresAuth: true,
    adminOnly: true,
  },
});

const chart1 = ref({
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [40, 20, 12, 32, 44, 22, 33],
      label: 'Sales',
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
    }]
  },
  options: {
    responsive: true
  }
});

const chart2 = ref({
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true
  }
});

const users = ref([
  { name: 'Company 1', users: 10 },
  { name: 'Company 2', users: 20 },
  { name: 'Company 3', users: 30 },
  { name: 'Company 4', users: 40 },
  { name: 'Company 5', users: 50 },
  { name: 'Company 6', users: 60 },
  { name: 'Company 7', users: 70 },
  { name: 'Company 8', users: 80 },
  { name: 'Company 9', users: 90 },
  { name: 'Company 10', users: 100 },
]);

const datatableitems = ref([
  { name: 'Company 1', status: 'Active', users: 10, test: 'test' },
  { name: 'Company 2', status: 'Active', users: 20, test: 'test' },
  { name: 'Company 3', status: 'Active', users: 30, test: 'test' },
  { name: 'Company 4', status: 'Active', users: 40, test: 'test' },
  { name: 'Company 5', status: 'Active', users: 50, test: 'test' },
  { name: 'Company 6', status: 'Active', users: 60, test: 'test' },
  { name: 'Company 7', status: 'Active', users: 70, test: 'test' },
  { name: 'Company 8', status: 'Active', users: 80, test: 'test' },
  { name: 'Company 9', status: 'Active', users: 90, test: 'test' },
  { name: 'Company 10', status: 'Active', users: 100, test: 'test' },
]);
</script>