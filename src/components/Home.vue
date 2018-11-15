<template>
<div>
  <v-header></v-header>
  <div class="hello">
      <div>正在进行时</div>
    <input type="text" v-model="list" @keydown="addList($event)"> <button @click="addList">+增加</button>
      <ul>
        <li class="list" v-for="(item,index) in lists" v-if="!item.checked" :key=item.index>
          <input type="checkbox" v-model="item.checked" @change="saveList">
          {{ item.title }}
          <button @click="removeData(index)">删除</button>
        </li>
      </ul>
      <br>
      <div>已经结束了</div>
      <router-link to="/list">我是兄弟LIST</router-link>
      <div class="new"><a @click="$goRoute('/news')">我是news啊啊啊</a></div>
      
      <ul>
        <li class="list" v-for="(item,index) in lists" v-if="item.checked" :key=item.index>
          <input type="checkbox" v-model="item.checked" @change="saveList">
          {{ item.title }}
          <button @click="removeData(index)">删除</button>
        </li>
      </ul>
  </div>
    <div>
        <router-link to="/news">About</router-link>
    </div>
    
  <router-view></router-view>
</div>

</template>

<script>
import storage from "../model/storage.js"
import header from "./header.vue";
export default {
  data () {
    return {
      list: '',
      lists:[]
    }
  },
  components:{
      "v-header":header
  },
  methods:{
    addList:function (e) {
      console.log(e)
      if (this.list) {
        if (e.keyCode==13){
          this.lists.push({
            title:this.list,
            checked:false
          })
          // json对象转换成json字符串
         const objlist = JSON.stringify(this.lists);
         console.log(objlist)
        //  localStorage.setItem("list",objlist)
        storage.set("list",this.lists)
        }

      }
      console.log()
    },
    removeData:function (key) {

        this.lists.splice(key,1)
        const objlist = JSON.stringify(this.lists);
         console.log(objlist)
        //  localStorage.setItem("list",objlist)
         storage.set("list",this.lists)
    },
    saveList() {
      // localStorage.setItem('list', JSON.stringify(this.lists))
      storage.set('list',this.lists)
    }
  }, mounted() {
    //  var that = this;
    //  var lists = JSON.parse(localStorage.getItem("list"))
     var lists = storage.get("list")
    if (lists) {
      this.lists = lists;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .hello {
        color: red;
    }
</style>
