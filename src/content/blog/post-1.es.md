---
id: "what-i-will-write"
title: "Qué encontrarás en esta sección del blog"
date: "2025-05-25 18:22"
lang: "es"
summary: "Una pequeña idea sobre los tipos de artículos que escribiré en el blog."
---

# Introducción a la sección de artículos y tutoriales personales

En esta sección del portafolio se podrán encontrar registros de los proyectos que realizaré, un diario de desarrollo donde mostraré el progreso con los proyectos, así como las complicaciones y soluciones que encuentre. Además, posiblemente incluiré pequeños tutoriales sobre temas de mi ínteres.

Actualmente tengo ciertas ideas de proyectos que me gustaría realizar, aún me falta definirlos un poco más, pero me gustaría que el blog fuera un punto de partida para poder comenzar a escribir sobre el tema.

Los proyectos que he pensado son:

- Mejorar el scraper de anime
- Hacer un app móvil que funcione como closet virtual
- Un chat en una aplicación móvil
- Realizar notebooks de análisis exploratorio de datos y seguir progresando en ese ámbito

## ¿El por qué me interesa cada proyecto?

### Mejorar el scraper de anime

Yo suelo ver anime por internet, sin embargo prefiero descargar los capítulos y verlos en mi celular o con una aplicación en particular _VLC_ además de que no me gusta esperar que carguen los capítulos, suelo ver animes ya terminados o suelo dejarlos a mitad por alguna eventualidad por lo que tenerlos ya descargados me resulta más cómodo.

El problema con descargar estos capítulos es que suelen ser 12 o más capítulos y aunque el proceso es simple, suele terminar siendo tedioso por la cantidad de publicidad y acortadores de link que hay que atravesar por cada capítulo. En ese momento decidí buscar una forma de automatizar el proceso de descarga.

La solución inició como un script en python que hacía scraping con `Selenium` donde era eficiente, pero poco flexible, ya que debía configurar todo en el código previamente para descargar. Posteriormente decidí convertirlo en una API de `FastAPI` que me permitía usarlo desde cualquier lenguaje que soportara `REST`. A partír de ahí hice una web para consumirla y ofrecer una experiencia más cómoda al usuario que lo utilizaría _(en este caso, solo yo y posiblemente mis amigos)_, para esto utilicé `Next`. Finalmente uní el Frontend y el Backend mediante `docker-compose` para que todo se ejecutase en un contenedor, de esta forma no tenía que preocuparme por el entorno del servidor. Puedes ver un resumen de la versión actual en proyectos [Anime Scraper](/es/project/anime-scraper)

Por otro lado hace no mucho compré una [Mini PC](https://a.co/d/9tuUmhh) para tenerlo como servidor casero y utilizar con proyectos open source o aplicaciones interesantes. Allí desplegué el scraper para tener acceso 24/7, sin necesidad de encender mi computadora principal.

Investigando más sobre servidores personales y aplicaciones útiles descubrí [Jellyfin](https://jellyfin.org/) que, en resumen, es un servidor de streaming de video que, a partir de distintos tipos de recursos (en este caso hablaré de videos) se puede buscar la metadata de los mismos, tenerlos alojados en una interfaz similar a Netflix y servirlos a los distintos dispositivos que tengan acceso al servidor.

La idea de mejorarlo nace de adaptar mi sistema de archivos de descargas al estandar de Jellyfin para que detecte los capítulos correctamente, en ese sentido, mi scraper de anime funcionará como un proveedor de este contenido para que Jellyfin haga uso, obtenga metadatos y los sirva. Hay otras razones menores, relacionadas principalmente relacionadas con la experiencia del usuario (sí, yo soy el usuario), bugs o estéticas que identifiqué.

### Hacer un app móvil que funcione como closet virtual

Hace unos meses me di cuenta de que tenía una gran cantidad de prendas que no utilizaba y otras que sí, entonces quería una forma de poder tener un inventario de fácil acceso, además de poder hacer seguimiento a las prendas que uso con mayor frecuencia. Adicionalmente añadí la posibilidad que la app tenga un modelo de IA para identificar el tipo de prenda y sugerir una combinación de prendas.

El proyecto se encuentra solamente diseñado, es decir que está las tecnologías pensadas, la arquitectura, las funcionalidades y las pantallas que tendrá, sin embargo aún no se encuentra en desarrollo y no lo estará por ahora. Puedes ver las pantallas en el siguiente link [Clean Style](https://www.figma.com/design/uanCTXnN5up4c5tsSVAe0s/Clean-Style?node-id=0-1&t=ph1Zcf0zXlFCXbFk-1).

### Un chat en una aplicación móvil

La razón no es muy larga, quería practicar un uso más profundo de websockets y la tecnología de `React Native` junto a un servicio de base de datos `Sqlite` gratuito con replicación llamado [Turso](https://turso.tech/).

### Los notebooks de análisis exploratorio de datos

En pocas palabras, aprender más sobre ciencia de datos.

---

Trataré de escribir todos estos artículos con la mínima intervención de algun LLM porque deseo mejorar mis habilidades de redacción que he perdido por el uso constante de LLMs. Sin embargo, la traducción al inglés podrá ser con o sin ayuda de algún LLM, pero no la redacción.