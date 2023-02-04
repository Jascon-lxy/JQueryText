$(document).ready(function(){
			localStorage.clear();
			$.get('book.txt', function(data) {
                console.log(data);
                console.log(JSON.parse(data));
                data = JSON.parse(data);
				var txt = "<input type='checkbox' class='dxk'>";
				var html= "";
				$.each(data,function(i,n){
					html += "<tr>"+"<td>"+txt+"</td>"+"<td>" + n["bookid"]+"</td>" + "<td>"+"《" +n["bookname"] + "》"+"</td>" + "<td>" + n["writer"] + "</td>" + "<td>" + n["press"] + "</td>" + "<td>"+"<button class='borrow'>还回</button>"+"</td></tr>";
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
				var str = getFormatDate();
				$(this).parent().parent().remove();
				alert("还书成功，当前时间为"+str);
			});
			
			$(".allborrow").click(function(){
				var str = getFormatDate();
				alert("还书成功，当前时间为"+str);
				$(".booklist>tbody tr:gt(0)").each(function(index,ele){
						if($(ele).find("input").is(":checked")){
						  $(ele).remove();  
						}
				})
			})
		function getFormatDate(){
   			 var nowDate = new Date();
  			 var year = nowDate.getFullYear();
   			 var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
   			 var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    		 var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
   			 var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
  			 var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
   			 return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
		}
		})