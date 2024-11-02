/*메인 페이지*/
/* 페이지를 열고 싶다면 npm run dev*/
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  let name = 'Kang Hyup'
  let link = "http://google.com"
  let [수량, 수량변경] = useState([0, 0, 0]); //길이가 3인 State변수 생성

  return ( //html문은 return안에
           //return은 하나의 태그를 반환해야함 ex) return( <div></div> <div></div> ) --> 불가능!
    <div>
      <h4 className='title' style={{color:'red', fontSize:'30px'}}>협팡 후레쉬</h4> {/*html에서 간단히 css바꾸기*/}
      <p className='title-sub'>by {name}</p>
      <div style={{textAlign:"center"}}>
        <Link href={link}>Google</Link>                                             {/*html상의 변수는 중괄호*/}
      </div>
    </div>
  )
}


