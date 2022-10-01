// import fetch from 'node-fetch';

// const url = 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvalVixMpzQY&format=mp3&responseFormat=json&lang=en';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9ec8105266msh076540f029a5c95p1fab41jsn30454a7ed3b6',
    'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
  }
};
const API_START='https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=';
const API_END='&format=mp3&responseFormat=json&lang=en';
// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json.YoutubeAPI.urlMp3))
// 	.catch(err => console.error('error:' + err));
function show(donde,data){
  let view=`<nav><h3>tu mp3</h3></nav>
  <article>
      <img src="${data.YoutubeAPI.thumbUrl}" width="200px" alt="logo" id="img_mp3">
  </article>
  <form >
      <label for="url_video" class="texto_interno">${data.YoutubeAPI.titolo}</label><br>
      <a href="${data.YoutubeAPI.urlMp3}"> <input type="button" value="TU MP3 ESTA LISTO DALE CLICK" ></a>
  </form>
  <h3>descripción</h3>
  <p class="texto_interno">${data.YoutubeAPI.descrizione}</p>`
  donde.innerHTML=view;
}
async function fetch_data(urlApi){
  let response=await fetch(urlApi,options);
  let data= await response.json();
  return data;
}
// let fet= await fetch_data(url);
// console.log(fet.YoutubeAPI.urlMp3)
const where=document.getElementById("card_mp3");
const btn_buscar_mp3=document.getElementById("buscar_mp3").addEventListener('click',async function(){
  let url_info=document.getElementById("url_video").value;
  console.log(url_info);
  let data_info=await fetch_data(`${API_START}${url_info}${API_END}`);
  console.log(data_info);
show(where,data_info);
});