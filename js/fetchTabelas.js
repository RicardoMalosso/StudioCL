    $.getJSON("js/valores.json", function (data) {

      console.log(data);
            
      var i;
      for (i = 0; i < data; i++) {
        console.log(data.entry);
        var id = data.id

        document.getElementById('tyakisobas').innerHTML += ('<tr>'+'<th>'+prato+'</th>'+'<th>'+preco+'</th>'+'</tr>');
        
      }
    })

    