angular.module("myapp",['routeJs','ngRoute'])
// .directive('showmore', function (){ 
// 		return {
// 	 		restrict: 'E', 
// 			template:'<div class="{{show?\'more2 \':\'more\'}}">' +'<a href="javascript:;" 
// 			ng-click="show=!show">显示更多</a>' + '<span ng-transclude></span></div>', 
// 			transclude: true 
// 		};
//  	});
.controller("mainctrl",function($scope){
	$scope.users=username;
	$scope.tmp=true;
	$scope.nav={'glyphicon glyphicon-home':'首页',
				'glyphicon glyphicon-file':'简介',
				'glyphicon glyphicon-envelope':'信息'};
	//将导航栏存为对象，分别存储各栏目的图标样式和栏目名称，通过ng-repeat获取
	$scope.userName="冬瓜";//得到用户名
	$scope.displaySrc="images/header.jpg";//获取用户头像
	

	//设置侧边栏导航中操作的显示与隐藏
	$scope.listShow=false;
	$scope.showhide=function()
	{
		$scope.listShow=!$scope.listShow;
	}

	//点击支持他点赞数+1，再次点击取消
	$scope.support="支持他！";
	$scope.supportnum=0;
	$scope.addFans=function()
	{
		if($scope.tmp==true)
		{
			$scope.supportnum=$scope.supportnum+1;
		    $scope.support="不再支持";
		    $scope.tmp=false;
		}
		else
		{
			$scope.supportnum=$scope.supportnum-1;
		    $scope.support="支持他！";
		    $scope.tmp=true;
		}
	}


	$scope.sendMsg=function()
	{
		var src=$scope.displaySrc;
		var msg=document.getElementById("commentMsg").value;	
		var username=$scope.userName;
		document.getElementById("commentMsg").value="";
		$scope.commentMsg=msg;
		var newItem=document.createElement("div");
		newItem.innerHTML="<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+src+"'></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>1aaaa</span><a href=''>"+username+"：</a>"+msg+"</div></div></div>";
		document.getElementById("commentArea").insertBefore(newItem,document.getElementById("comment"));	
	}
	$scope.sendEmotionMsg=function()
	{
		var emotionMsg=document.getElementById("emotionMsg").value;
		var emotionImgSrc=document.getElementById("emotionImg").value;
		var username=$scope.userName;
		var src=$scope.displaySrc;
		if(emotionImgSrc=="")
		{
			emotionRealImgSrc="";
		}
		else
		{
			emotionRealImgSrc="images/"+emotionImgSrc.substr(12);
		}
		
		var parentNode=document.getElementById("myCircle");
		var child=parentNode.childNodes;
		var newItem=document.createElement("div");
		newItem.innerHTML='<br/><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="'+src+'" class="img-circle"alt="..."></a><div class="m-l-lg m-b-lg"><div class="m-b-xs"><a href=""class="h4">'+username+'</a><span class="text-muted m-l-sm pull-right">现在 </span></div><div class="m-b"><div class="m-b">'+emotionMsg+'</div><img src="'+emotionRealImgSrc+'"class="b b-a wrapper-xs bg-white img-responsive"><div class="m-t-sm"><a href=""class="text-muted m-xs"><i class="icon-action-redo"></i></a><a href=""class="text-muted m-xs"><i class="icon-star"></i></a><a href=""class="text-muted m-xs"><i class="icon-refresh"></i>13</a></div></div></div></div>';
		parentNode.insertBefore(newItem,child[1]);
	}
	$scope.setFuc=function()
	{
		var username=document.getElementById("username").value;
		$scope.userName=username;
		var displaysrc=document.getElementById("displaysrc").value;
		if(displaysrc=="")
		{
			$scope.displaySrc="images/a0.jpg";
		}
		else
		{
			$scope.displaySrc="images/"+displaysrc.substr(12);
		}	
	}
});
