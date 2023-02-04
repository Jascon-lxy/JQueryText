// JavaScript Document
$(document).ready(function(){
			$("#button").click(function(){
            	$.get('user.txt', function(data) {
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
					if(txt == n["id"] || txt == n["name"] || txt == n["number"]){
						html += "<tr><td>" + n["id"]+"</td>" + "<td>"+n["type"]+"</td>" + "<td>" + n["name"] + "</td>" + "<td>" + n["number"] + "</td>" +"<td>" + n["username"] +"</td>"+ "<td>"+n["password"]+"</td>"+"<td>"+n["key"]+"</td></tr>";
						$(".booklist").append(html);
					}
				})
			}
		});