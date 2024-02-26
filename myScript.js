const fetch_api=async()=>{
    let response= await fetch('Data.json')
    response=await response.json()
    console.log(response)
    let tab=""
    const size=response.length
    for(let i=0;i<size;i++)
    {
        tab+=`<div class="col-sm-6 api_data" style="width: 18rem; ">
        <img src="..." class="card-body"  alt="image_here">
        <div class="card-body">
        <h6> ${response[i].Name}<h6>
        <p >${response[i].ShortDesc}</p>
        </div>
      </div>`
    }
    document.querySelector(".row").innerHTML=tab
}
fetch_api()

const showMore=()=>{
  document.getElementById("data_to_hide").classList.remove("hide");
}