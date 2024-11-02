

export default function RootLayout({ children }) {
    return (
        <div>
            <div className='eventbar'>
                <a>현대카드 10% 할인중</a>
            </div>
            {children}
        </div>
    )
}
