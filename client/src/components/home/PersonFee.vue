<template>
  <div class="fee">
    <table border="1">
      <thead>
        <th>业主ID</th>
        <th>物业费定额</th>
        <th>收费时间</th>
        <th>物业费</th>
        <th>停车费</th>
        <th>其它费用</th>
        <th>当日缴清</th>
        <th>欠缴</th>
      </thead>
      <tbody>
        <template v-if="fee">
          <tr>
          <td>{{fee.userId}}</td>
          <td>{{fee.fixMoney}}</td>
          <td :title="fee.chargeTime">{{fee.chargeTime}}</td>
          <td>{{fee.propertyFee}}</td>
          <td>{{fee.parkFee}}</td>
          <td>{{fee.otherFee}}</td>
          <td>{{fee.paid}}</td>
          <td>{{fee.nonPay}}</td>
        </tr>
        </template>
        <template v-if="!fee">
          <tr>
            <td colspan="8">无收费</td>
          </tr>
        </template>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import * as feeServ from "@/api/fee.js";
export default {
  data() {
    return {
      fee: "",
    };
  },
  async created() {
    const resp = await feeServ.getUserFee(this.$store.state.user.user.id);
    this.fee = resp.data;
  },
};
</script>

<style scoped>
@import '~@/assets/css/table.css';
</style>