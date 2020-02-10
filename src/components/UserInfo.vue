<template>
	<div class="UserInfo">
		 <div class="loading" v-if="isloading">
            <img src="../assets/loading.gif" >
         </div>
         <div class="userInfomation">
         	<section>
         		<img v-bind:src="userinfo.avatar_url">
         		<span>{{userinfo.loginname}}</span>
         		<p>{{userinfo.score}}积分</p>
         		<p>注册时间：{{userinfo.create_at|formatDate}}</p>
         	</section>
         	<div class="replies">
         		<p>回复的主题</p>
         		<ul>
         			<li v-for="item in userinfo.recent_replies">
         				<router-link v-bind:to="{name:'post_content',params:{
         					id:item.id
         				}}">
         					{{item.title}}
         				</router-link>
         			</li>
         		</ul>
         	</div>
         	<div class="topics">
         		<p>创建的主题</p>
         		<ul>
         			<li v-for="item in userinfo.recent_topics">
         				<router-link v-bind:to="{name:'post_content',params:{
         					id:item.id
         				}}">
         					{{item.title}}
         				</router-link>
         			</li>
         		</ul>
         	</div>
         </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'UserInfo',
		data:function(){
			return {
				isloading:false,
				userinfo:{}
			}
		},
		methods:{
			getData:function(){

			  this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
              .then(res=>{
              	console.log(res)
                if(res.data.success == true){
                  this.isLoading =false;
                  this.userinfo = res.data.data;
                }
              })
              .catch(function (err) {
                console.log(err)
              })
			}
		},
		beforeMount:function(){
			this.getData()
		}
	}
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation img {
    width: 30px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

</style>
