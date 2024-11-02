/*  URL로 페이지를 나누는 행위: 라우팅(Routing)
    서브 페이지: app폴더 안에 설정할 이름 폴더를 만들고 page.js파일 생성(<-이름 변경 불가능!) */

'use client'
import Image from 'next/image' 
import 이미지경로 from '/public/food0.png' //이미지를 import를 해서 가져오면 layoutShift(이미지로딩으로 페이지깨지는거) 방지가능
import { useState } from 'react'

export default function sub_page1(){

    let 상품 = ['Tomatoes', 'Pasta', 'Coconut', 'Musk']
    let 상품가격 = [0.1, 0.2, 0.3, 9999]
    let [수량, 수량변경] = useState([0, 0, 0, 0]) /*State변수: 페이지내에서 자동으로 재랜더링되는 변수
                                                1. let [변수이름, 함수이름] = State(초기값) 
                                                2. State([초기값1, 초기값2 ...]) <- 길이가 n인 배열로 변수선언
                                                */
    //html 반복문map
    let arr = ["첫번째 값", "두번째 값", "세번째 값"]
    arr.map((val, cnt)=>{ // 첫번쨰 전역번수: n번쨰 배열값
                          // 두번쨰 전역변수: n번쨰 반복
        console.log(cnt+". "+val)
    })

    //변수선언후 return으로 배열만들기 가능
    let arr2 = arr.map((a)=>{
        return a
    })
    console.log(arr2)

    return(
        <div>
            <h4 className='title'>상품목록</h4>

            { //html코드 영역안에서 map쓸땐 중괄호
                상품.map((goodsList, i)=>{
                    return( //html을 반복생성하려면 return안에 넣기
                        <div className='food' key={i}> {/*반복문에는 유니크한 키값을 넣어주는게 좋음*/}
                        <img src={`/food${i}.png`} alt="제품설명" className='food-img'></img> {/*문자안에 변수넣는 2가지 방법
                                                                                                    1. {'문자1' + 변수 + '문자2'} 
                                                                                                    2. {`문자${변수}문자2`} <- ~밑에 `임, 작은따옴표아님 */}
                        <h4>{goodsList} {상품가격[i]}$</h4>
                        <button onClick={()=>{  //Onclick = {()=>{자바스크립트 코드}}로 버튼시 동작하는 간단한 코드 구현가능 

                            let copy = [...수량]       /*배열인 State를 변경할때 주의점 */
                            if(copy[i]>0){
                                copy[i]--             // 1. 배열State의 복사본을 만듦[...arr]
                                수량변경(copy)        // 2. 복사된 배열의 값을 변경후 변경함수(복사한배열)
                            }
                        }}>-</button>
                        <span> {수량[i]} </span>
                        <button onClick={()=>{
                            let copy = [...수량]
                            copy[i]++
                            수량변경(copy)
                        }}>+</button>
                        </div>
                    )
                })

            }
        </div>
    )
}