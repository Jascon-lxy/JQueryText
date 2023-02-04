// JavaScript Document
$(document).ready(function(){
			localStorage.clear();
			$.get('book.txt', function(data) {
                console.log(data);
                console.log(JSON.parse(data));
                data = JSON.parse(data);
				var html= "";
				var button = "<button class='ok'>确定</button><button class='cancel'>取消</button>"
				$.each(data,function(i,n){
					html += "<tr><td>" + n["bookid"]+"</td>" + "<td>"+"《" +n["bookname"] + "》"+"</td>" + "<td>" + n["writer"] + "</td>" + "<td>" + n["press"] + "</td>" +"<td>" +"￥"+ n["price"] +"</td>"+ "<td>"+"<button id='change'>修改</button>"+button+"<button id='delet'>删除</button>"+"</td></tr>";
				});
				$(".booklist").append(html);
            }, 'text');
			
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
				var bkprice = $("#bprice").val();
				var html = "";
				html += "<tr><td>" +bkid +"</td>" + "<td>"+"《" + bkname + "》"+"</td>" + "<td>" + bkwrite + "</td>" + "<td>" +  bkcbs + "</td>" +"<td>" +"￥"+ bkprice +"</td>"+ "<td>"+"<button id='change'>修改</button>"+"<button id='delet'>删除</button>"+"</td></tr>";
				$(".booklist").append(html);
				alert("恭喜你，添加成功！");
			});
			
			$(".booklist").on('click',"#change",function(){
				$(this).hide();
				$("#delet").hide();
				$(this).next('.ok').show().next(".cancel").show();
				var $tr = $(this).parent().parent();
				var $td1 = $tr.children("td").eq(1);
				$td1.append("<input type='text' value='"+$td1.text()+"'>");
				var $td2 = $tr.children("td").eq(2);
				$td2.append("<input type='text' value='"+$td2.text()+"'>");
				var $td3 = $tr.children("td").eq(3);
				$td3.append("<input type='text' value='"+$td3.text()+"'>");
				var $td4 = $tr.children("td").eq(4);
				$td4.append("<input type='text' value='"+$td4.text()+"'>");
		    	$td1.find("input").select().focus();
			});
			
			$(".booklist").on('click',".ok",function(){
				$(this).hide().next('.cancel').hide();
				$(this).prev("#change").show();
				$("#delet").show();
				var $tr = $(this).parent().parent();
				$tr.find("input[type=text]").hide();
				var $td1 = $tr.children("td").eq(1);
				var bn = $td1.find("input").eq(0).val();
				$td1.html(bn);
				var $td2 = $tr.children("td").eq(2);
				var pages = $td2.find("input").eq(0).val();
				$td2.html(pages);
				var $td3 = $tr.children("td").eq(3);
				var cbs = $td3.find("input").eq(0).val();
				$td3.html(cbs);
				var $td4 = $tr.children("td").eq(4);
				var price = $td4.find("input").eq(0).val();
				$td4.html(price);
			});
			
			$(".booklist").on('click',"#delet",function(){
				if(confirm("你确定吗？删除数据无法恢复！"))
					$(this).parent().parent().remove();
				});
			$(".booklist").on("click",".cancel",function(){
				$(this).hide();
				$('.ok').hide();
				$("#change").show();
				$("#delet").show();
				var $tr = $(this).parent().parent();
				$tr.find("input[type=text]").remove();
			})
		})