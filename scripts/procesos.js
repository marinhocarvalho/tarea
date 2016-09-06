
var id = 4;
	
                            function cargarClientes() {
                                
                                var clientes = {
                                    "nombre": $('#nombre').val(),
                                    "apellido": $('#apellido').val(),
                                    "ci": $('#ci').val()
                                };
                                console.log(clientes);
                               // alert(clientes);
                                $('#tabla tr:last').after('<tr><th>'+id+'</th><td>' + clientes.nombre + '</td><td>' + clientes.apellido + '</td><td>' + clientes.ci + '</td><td> <input type="button" value="Eliminar" onclick="Eliminar(this.parentNode.parentNode.rowIndex)"/> </td></tr>');
                                
                                id++;
                            }

                            function Eliminar(i) {
                                document.getElementById('tabla').deleteRow(i);
                            }



