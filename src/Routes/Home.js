import React from 'react'
import {movieApi} from "api"


var data = [{id:123}]
movieApi.popular().then( res => { data = res.data.results; console.log(data); } );

const Content = ({id}) => (<>
    <h1>{id}</h1>
</>)

export default () => (<>
    <h1>Hello</h1>
    {data2components()}
</>);

function data2components () {
    return data.map(movie => (<Content {...movie} key={movie.id}/>))
}