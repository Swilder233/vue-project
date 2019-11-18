<template>
        <div class="header">
            <div>
                <v-touch tag="i" @tap="back()" class="iconfont">&#xe605;</v-touch>
                <span>{{title}}</span>
                <i class="iconfont" @click="handleCaidan()">&#xe606;</i>
            </div>
        </div>
    
</template>
<script>
import MessageBox from "../../../lib/messageBox/index.js"; 
export default {
   name:"headers",
   props:{
       title:{
           type:String,
           required:true
       }
   },
   data() {
       return {
           flag:false,
       }
   },
   methods:{
       back(){
            this.$router.back();
       },
        handleCaidan(){
            if(this.flag == 0){
                 MessageBox({
                     flag:true
                 });
                 this.flag = 1;
            }else{
                 MessageBox({
                     flag:false
                 });
            }
        }
   }
}
</script>
<style lang="scss">

       .header{
            height: .44rem;
            width: 100%;
            background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            z-index:100;
        }

        .header div {
            width: 3rem;
            height: .28rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header div span {
            color: white;
            font-family: Simhei;
            font-size: .17rem;
        }
        .header div i {
            font-size: .18rem;
            color: white;
        }
    </style>
</head>
</style>