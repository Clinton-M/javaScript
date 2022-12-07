const API_URL =
 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_VCWbGvgAzeHyzcClU6nnqP533toKRMYtQvrUaOpeOZ1BpUN4LAFq2WDbsYcLP2HO';

async function reload(){
    const res = await fetch(API_URL)
    const data = await res.json();

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');

    // code --> live_VCWbGvgAzeHyzcClU6nnqP533toKRMYtQvrUaOpeOZ1BpUN4LAFq2WDbsYcLP2HO

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
        
    console.log(data)
}

reload();