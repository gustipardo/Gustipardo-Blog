
clonar repo
npm i 
npm run dev

Tiene Typescript, 
Permite avisa cuando un componente esta falto de un prop necesario y verificar el tipo

tTene rutas dinamicas configuradas en 


no se usa google fonts por el inpacto en el rendimiento, conviene hacer un font self host

Hay que precargar las fuentes

Tiene Taildwind

Astro sync para actualizar los tipos de las coleccioens


Utiliza Taildwind typography para agregar estilos por defecto a los posts

Usar siempre webp es mas liviano

Utiliza Astro Icon y lucide icons
En astro Config se estan importando todos los iconos, cuando se termine el proyecto se deberia modificar para importar solo los usados (son 1400 iconos si no)

Si se crea un nuevo blog en este proyecto se debe modificar el path de la imagen en BaseHead.astro y el description
    
Deploy waring: Astro.config.msj tiene la url del host, si se cambia la url de host se debe modificar tambien 

En pages/rss.xml.js se debe modificar si se quiere usar el proyecto :check