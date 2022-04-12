

document.querySelector('#button').addEventListener('click', getData);

function getData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'api.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            let data = JSON.parse(this.responseText);
            
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of data){
                res.innerHTML += `
                <tr>
                <th>Date:</th>
                    <td> ${item.created} </td>
                <th>State:</th>
                    <td> ${item.description} </td>
                </tr>
                `
            }

        }
    }
}