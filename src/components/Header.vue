<template>
	 <div class="header">
	  <router-link v-bind:to="{name:'root'}">
          <img src="../assets/cnodejs_light.svg" alt="">
     </router-link>
       <ul>
         <li><a href="#">首页</a></li>
         <li><a href="#">新手入门</a></li>
         <li><a href="#">API</a></li>
         <li><a href="#">关于</a></li>
         <li><a href="#">注册</a></li>
         <li><a href="#">登录</a></li>    
       </ul> 
    </div>
</template>
<script type="text/javascript">
</script>

<style type="text/css" scoped>
     *{
    margin:0px;
    padding:0px;
  }
	.header{
		background-color:#5a5555;
		height:50px;
	}
	img{
		max-width:120px;	
		margin-left:66px;
		margin-top:10px;
		margin-bottom:3px;
	}
	ul{
		margin-top:10px;
		list-style: none;
		float:right;
		margin-right:66px;
	}
	li{
		display: inline-block;
	}
	a{
		text-decoration: none;
		color:#ccc;
		font-size:13px;
		text-shadow:nonr;
		padding:10px 15px;
	}
</style>