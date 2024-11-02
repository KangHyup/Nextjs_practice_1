'use client'
import { useState } from 'react'
import {age, name} from './data.js'

export default function Test(){
    let arr1 = [1, 2, 3]
    let arr2 = arr1
    arr1[0] = 100

    let [변수, 함수] = useState(0)
    변수 = 1

    return(
        <div>
            <h1>테스트 페이지</h1>
            <h4>{age} {name}</h4>
            <button onClick={()=>{
                    변수++
                    함수(변수)
                    console.log(변수)
            }}>버튼</button>
            <span>{변수}</span>
        </div>
    )
}