// JavaScript Document
$(document).ready(function(){
			localStorage.clear();
			$.get('book.txt', function(data) {
                console.log(data);
                console.log(JSON.parse(data));
                data = JSON.parse(data);
				var txt = "<input type='checkbox' class='dxk'>";
				var html= "";
				$.each(data,function(i,n){
					html += "<tr>"+"<td>"+txt+"</td>"+"<td>" + n["bookid"]+"</td>" + "<td>"+"《" +n["bookname"] + "》"+"</td>" + "<td>" + n["writer"] + "</td>" + "<td>" + n["press"] + "</td>" + "<td>"+"<button class='borrow'>借出</button>"+"</td></tr>";
				});
				$(".booklist").append(html);
            }, 'text');
			$("#qx").change(function(){
				if(this.checked){
					$(".dxk").prop("checked", true);
				}else{
					$(".dxk").prop("checked", false);
				}
			});
			
			$(".booklist").on('click',".borrow",function(){
				$(this).parent().parent().remove();
				alert("借出成功！");
			});
			
			$(".allborrow").click(function(){
				$(".booklist>tbody tr:gt(0)").each(function(index,ele){
						if($(ele).find("input").is(":checked")){
						  $(ele).remove();  
						}
				})
			})
		})