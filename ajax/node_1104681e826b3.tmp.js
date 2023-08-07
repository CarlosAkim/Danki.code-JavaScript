<html>
    <body>
        <script>
            /*

            // isto aqui é ajax.

            var xml = new XMLHttpRequest();

            xml.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);

            xml.onload = function(){
                if (this.status >=200 & this.status <400){
                    // requisição bem sucedida.
                    var data  = JSON.parse(this.response);
                    console.log(data)
                }else{
                    // erro.
                }
            }

            xml.onerror = function(){

            }

            xml.send();


            */

            // isso é fetch

            fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))


        </script>
    </body>
</html>