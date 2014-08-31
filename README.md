Plantilla simple para empezar a maquetar con stylus
---------------------------------------------------


```sh
git clone https://github.com/tn314/plantilla-stylus.git
cd plantilla-stylus
npm install
```



- Para maquetar en los archivos y que se compile al archivo style.css
```sh
grunt observer
```

- Para minificar el css al archivo style.min-css
```sh
grunt deploy
```



## Archivos

#### 1 - variables.styl
background, colores, font-family

#### 2 - mixins.styl
mixins de ayuda para prefijos...

#### 3 - normalize.styl
http://necolas.github.io/normalize.css/

#### 4 - base.styl
valores para etiquetas html

#### 5 - utilities.styl
clases utiles

#### 6 - theme.styl
estilos del sitio

#### 7 - mediaqueries.styl