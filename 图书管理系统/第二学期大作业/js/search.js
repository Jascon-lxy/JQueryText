// JavaScript Document
$(document).ready(function(){
			$("#button").click(function(){
            	$.get('book.txt', function(data) {
					console.log(data);
					console.log(JSON.parse(data));
                	data = JSON.parse(data);
					search(data);
            }, 'text');
			});
			function search(data){
				var txt = $("#uinput").val();
				var html= "";
				$.each(data,function(i,n){
					if(txt == n["bookid"] || txt == n["bookname"] || txt == n["writer"]){
						html += "<tr><td>" + n["bookid"]+"</td>" + "<td>"+"《" +n["bookname"] + "》"+"</td>" + "<td>" + n["writer"] + "</td>" + "<td>" + n["press"] + "</td>" +"<td>" +"￥"+ n["price"] +"</td>"+ "<td>"+n["number"]+"</td></tr>";
						$(".booklist").append(html);
					}
				})
			}
		});