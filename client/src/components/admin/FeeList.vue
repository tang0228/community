<template>
  <div class="fee-list">
    <button class="add" @click="add">新增收费</button>
    <table border="1">
      <thead>
        <th>用户ID</th>
        <th>物业费定额</th>
        <th>收费时间</th>
        <th>物业费</th>
        <th>停车费</th>
        <th>其它费用</th>
        <th>当日缴清</th>
        <th>欠缴</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item, i) in feeList">
          <td>{{ item.userId }}</td>
          <td>{{ item.fixMoney }}</td>
          <td :title="item.chargeTime">
            {{ item.chargeTime.slice(0, item.chargeTime.indexOf("T")) }}
          </td>
          <td>{{ item.propertyFee }}</td>
          <td>{{ item.parkFee }}</td>
          <td>{{ item.otherFee }}</td>
          <td>{{ item.paid }}</td>
          <td>{{ item.nonPay }}</td>
          <td class="operation">
            <button class="edit" @click="edit(item)">编辑</button>
            <button class="del" @click="del(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="edit-form" v-show="editing">
      <p>
        <label for="homeId">用户ID：</label>
        <input type="text" id="homeId" v-model="feeData.userId" />
      </p>
      <p>
        <label for="loginPwd">物业费定额：</label>
        <input type="text" id="loginPwd" v-model="feeData.fixMoney" />
      </p>
      <p class="sex">
        <label for="sex">收费时间：</label>
        <input
          :type="feeData.id ? 'text' : 'date'"
          id="sex"
          v-model="feeData.chargeTime"
          value="2017-06-03"
        />
      </p>
      <p>
        <label for="profession">物业费：</label>
        <input type="text" id="profession" v-model="feeData.propertyFee" />
      </p>
      <p>
        <label for="entryTime">停车费：</label>
        <input type="text" id="entryTime" v-model="feeData.parkFee" />
      </p>
      <p>
        <label for="homeSize">其它费用：</label>
        <input type="number" id="homeSize" v-model="feeData.otherFee" />
      </p>
      <p>
        <label for="peoples">当日缴清：</label>
        <input type="number" id="peoples" v-model="feeData.paid" />
      </p>
      <p>
        <label for="userName">欠缴：</label>
        <input type="text" id="userName" v-model="feeData.nonPay" />
      </p>
      <p>
        <button class="commit" @click="commit">提交</button>
      </p>
    </div>
    <div class="cancel" v-show="editing" @click="cancel">x</div>
  </div>
</template>

<script>
import * as feeServ from "@/api/fee";
export default {
  data() {
    return {
      feeList: "",
      editing: false,
      feeData: {
        userId: "0",
        fixMoney: "0",
        chargeTime: "0",
        propertyFee: "0",
        parkFee: "0",
        otherFee: "0",
        paid: "0",
        nonPay: "0",
      },
    };
  },
  async created() {
    const resp = await feeServ.getAllFee();
    this.feeList = resp.data.datas;
  },
  methods: {
    edit(item) {
      this.editing = true;
      this.feeData = item;
    },
    async del(id) {
      const resp = await feeServ.deleteFee(id);
      if (resp.data) {
        alert("删除成功");
        const resp = await feeServ.getAllFee();
        this.feeList = resp.data.datas;
      }
    },
    async commit() {
      if (this.feeData.id) {
        const resp = await feeServ.updateFee(this.feeData.id, {
          userId: this.feeData.userId,
          fixMoney: this.feeData.fixMoney,
          chargeTime: this.feeData.chargeTime,
          propertyFee: this.feeData.propertyFee,
          parkFee: this.feeData.parkFee,
          otherFee: this.feeData.otherFee,
          paid: this.feeData.paid,
          nonPay: this.feeData.nonPay,
        });
        if (resp) {
          alert("修改成功");
          this.editing = false;
        }
      } else {
        const resp = await feeServ.addFee({
          userId: this.feeData.userId,
          fixMoney: this.feeData.fixMoney,
          chargeTime: this.feeData.chargeTime,
          propertyFee: this.feeData.propertyFee,
          parkFee: this.feeData.parkFee,
          otherFee: this.feeData.otherFee,
          paid: this.feeData.paid,
          nonPay: this.feeData.nonPay,
        });
        if (resp.data) {
          alert("添加成功");
          const resp = await feeServ.getAllFee();
          this.feeList = resp.data.datas;
          this.editing = false;
        }
      }
    },
    cancel() {
      this.editing = false;
      this.feeData = {
        userId: "0",
        fixMoney: "0",
        chargeTime: "0",
        propertyFee: "0",
        parkFee: "0",
        otherFee: "0",
        paid: "0",
        nonPay: "0",
      };
    },
    add() {
      this.editing = true;
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/table.css";
.fee-list {
  position: relative;
}
.edit-form {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 50%;
  transform: translate(-50%, 0%);
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 3px #123456, -1px 2px 3px #123456, 0px -2px 3px #123456;
}
.edit-form p {
  display: flex;
  justify-content: center;
}
p label {
  flex-basis: 20%;
  text-align: right;
}
p input {
  flex-basis: 70%;
  display: block;
  padding: 7px;
  border-radius: 4px 4px;
  font-size: 14px;
  color: #4d4d4d;
  border: 1px solid #ccc;
  background-color: #fff;
  background-image: none;
  outline-color: #4e6ef2;
}
button.commit {
  font-size: 18px;
  background-color: #4e6ef2;
  color: #fff;
  border: none;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
}
div.cancel {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  right: 200px;
  top: 300px;
  font-size: 30px;
  border-radius: 50%;
  background-color: #fff;
  color: #4e6ef2;
  cursor: pointer;
}
button.add {
  padding: 5px;
  outline: none;
  border: none;
  background-color: #4e6ef2;
  color: #fff;
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
}
</style>