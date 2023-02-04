// JavaScript Document
$(function(){
			$("#uid").focus(function(){
				$(this).select();
				$("#pwd").val("");
			});
			$("#pwd").focus(function(){
				$(this).val("");
			});
		});

$(document).ready(function(){
			$('#login_button').click(function() {
            $.get('user.txt', function(data) {
                data = JSON.parse(data);
				login(data);
            }, 'text');
		})
			function login(data){
				var zhanghu = $("#uid").val();
				var mima = $("#pwd").val();
				$.each(data,function(i,n){
					if(zhanghu == n["username"] && mima == n["password"] && n["key"] == "1"){
						window.location = "index.html"
					}
				})
			}
	})