
export function show(donde,data){
    let view=`<nav><h3>tu mp3</h3></nav>
    <article>
        <img src="${data.YoutubeAPI.thumbUrl}" width="20%" alt="logo" id="img_mp3">
    </article>
    <form >
        <label for="url_video" class="texto_interno" id="${data.YoutubeAPI.titolo}">ingresa la URL del video que deseas descargar y dale click</label><br>
        <input type="button" value="TU MP3 ESTA LISTO DALE CLICK" href="${data.YoutubeAPI.urlMp3}">
    </form>
    <h3>descripción</h3>
    <p class="texto_interno">${data.YoutubeAPI.descrizione}</p>`
    donde.innerHTML=view;
}