# Platzom

Platzom es un idioma inventado para el Curso de Fundamentos de JavaScript de Platzi,
el mejor lugar de educación online.

##Descripción del idioma

-Si la palabra termina con "ar", se le quitan esas 2 letras
-Si la palabra inicia con Z, se le añade "pe" al final.
-Si la palabra traudida tiene 10 o más letras,se debe partir
en 2 por la mitad y unir con un gion medio.
-ninguna rrgla anterior cuenta y se devuelve la misma palabra pero intercalando
letras mayúsculas y minusculas

##Instalación
```
npm install platzom
```
##Uso
```
import platzom from 'platzom'
platzom("Programar") //Program

platzom('Programar') /*program*/
platzom('Zorro') /*Zorrope*/
platzom('Zarpar') /*Zarppe*/
platzom('abecedario') /*abece-dario*/
platzom('sometemos') /*SoMeTeMoS*/
```



##Creditos
-[viviana ]

##Licencia
[MIT]
