<template>
	<ul>
		<li>
		<router-link v-bind:to="{name:'HelloWorld',params:{msg2:'加'}}">点击我渲染A</router-link>
	   </li>
        <li>
        <router-link v-bind:to="{name:'Text1',params:{msg1:'油'}}">点击我渲染B</router-link>
       </li>
	</ul>
	
</template>
<script type="text/javascript">
	export default{
		name:'list'
	}
</script>