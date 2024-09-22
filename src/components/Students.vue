<template>
  <section>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Name and surname</th>
        <th>E-mail address</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td><a :href="'mailto:'+ student.email">{{student.email}}</a></td>

        <td>
          <a href="#" class="btn btn-green-400">Edit</a>
          <button class="button button-red">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { StudentsService } from "@/services/Students.service";

export default {

  data (){
    return {students: []}
  },
  async created(){
    const studentService = new StudentsService();
    this.students = await studentService.getStudents();
  }
}
</script>