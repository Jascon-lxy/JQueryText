// JavaScript Document
$(document).ready(function(){
			localStorage.clear();
			$.get('user.txt', function(data) {
                console.log(data);
                console.log(JSON.parse(data));
                data = JSON.parse(data);
				var html= "";
				$.each(data,function(i,n){
					html += "<tr><td>" + n["id"]+"</td>" + "<td>" +n["type"]+"</td>" + "<td>" + n["name"] + "</td>" + "<td>" + n["number"] + "</td>" + "<td>"+"<button id='disable'>禁用</button>"+"<button id='delet'>删除</a>"+"</button></tr>";
				});
				$(".booklist").append(html);
            }, 'text');
			
			$(".booklist").on('click',"#disable",function(){
				alert("禁用成功");
			});
			
			$(".booklist").on('click',"#delet",function(){
				if(confirm("你确定吗？删除数据无法恢复！"))
					$(this).parent().parent().remove();
				});
	
			$("#img").click(function() {
				$("#main").removeClass("show");
				$("#main").addClass("none");
			});
			
			$("#add_button").click(function() {
				$("#main").removeClass("none");
				$("#main").addClass("show");
			});	
			$( "#main" ).draggable();
			
			$("#qrbutton").click(function(){
				var bkid = $("#bid").val();
				var bkname = $("#bname").val();
				var bkwrite = $("#bwriter").val();
				var bkcbs = $("#bcbs").val();
				var html = "";
				html += "<tr><td>" +bkid +"</td>" + "<td>"+ bkname +"</td>" + "<td>" + bkwrite + "</td>" + "<td>" +  bkcbs + "</td>" + "<td>"+"<button id='disable'>禁用</button>"+"<button id='delet'>删除</button>"+"</td></tr>";
				$(".booklist").append(html);
				alert("恭喜你，添加成功！");
			});
		})