<template>
        <div class="header">
            <div>
                <i class="iconfont">&#xe605;</i>
                <span>{{title}}</span>
                <i class="iconfont">&#xe606;</i>
            </div>
        </div>
    
</template>
<script>
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
           
       }
   },
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