import {age, name, Hello} from './data.js'  //export가 {변수}로 되어있으면 작명불가, 무조건 원래파일명 그대로

export default function Cart(){
    let 장바구니 = ['Tomatoes', 'Pasta']
    return(
        <div>
            <h4 className='title'>Cart</h4>
            <h4 className='title-sub'>{age}</h4>
            <Hello></Hello>
            {장바구니.map((goodsname, i)=>{
                return(
                <CartItem 상품명 = {(i+1) +'. '+ goodsname}/>       /*컴포넌트에 전역변수 보내기
                                                        1. html안에 변수이름 = 보낼 데이터 
                                                        2. 컴포넌트 전역변수자리에 props 작성
                                                        3. 코드에서 {props.변수이름}하면 끝 */
                )
            })
            }
            <RedBtn 색깔 = 'blue'/>                       
        </div>

    )
}
//Component: html을 함수처럼 덩어리화
/* 컴포넌트 종류
1. 서버 컴포넌트: 디폴트, html안에 onClick같은 자바스크립트 코드 실행 불가
2. 클라이언트 컴포넌트: 파일 맨위에 'user client'넣고 만들면됨, 자바스트립트 코드 실행 가능
 그럼 싹다 클라 컴포넌트로 만들면 되는거 아님?
 -> 그럼 과부하 오짐
*/
function CartItem(props){
    return(
        <div className='cart-item'>
            <p style={{textAlign: 'left'}}>{props.상품명}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}
function RedBtn(props){
    return(
        <button className="Button" style={{backgroundColor: props.색깔}}> 버튼! </button>
    )
}