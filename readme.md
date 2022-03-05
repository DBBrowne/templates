- [Styles](#styles)
- [Readmes](#readmes)
- [Coming Soon](#coming-soon)


### Styles
#### `/Styles/`
Style sheets are extensions of MVP.css v1.8 - https://github.com/andybrewer/mvp .

Each have depth/elevation, automated to some degree and settable via classes from `elevation-0` to `elevation-3`.  Adapted from [material.ui](https://material.io/design/color/dark-theme.html#properties).
Dark modes are softened.

See demos in `/styles/*.html`.

Three schemes - 
|Just Depth|Purple|Orange|
|---|---|---|
|![mvp default colours](https://user-images.githubusercontent.com/72463218/156858864-71a7a8bd-6c22-4713-a1a7-d5c9de2145aa.png)|![mvp purple](https://user-images.githubusercontent.com/72463218/156858640-cf3b32e0-9d0a-42f9-a44b-bc8cb96d2d2f.png)|![mvp orange](https://user-images.githubusercontent.com/72463218/156858918-e62cd7bf-dee1-42d9-b15d-0ce1fea056d7.png)|

Automated elevation on nested Aside and Form - 

|![automated depth dark](https://user-images.githubusercontent.com/72463218/156858742-4636fd09-7bf4-420d-96b0-e1a67f7d1bff.png)|![automated depth light](https://user-images.githubusercontent.com/72463218/156858768-3c32591b-61d0-46b9-9924-0bbe643aee9c.png)|
|---|---|

titlecase utility class
```css
.text-titlecase{
  text-transform: capitalize;
}
```

### Readmes
#### `/Readmes/`
Just some simple readme templates

### Coming Soon
- create react component CLI script - create file, export default function with matching name and `return (<p>{componentName}<p>)`
- automatic burger menu in styles (similar to [this demo](https://dbbrowne.github.io/blog/blog/pure-css-burger-menu/))