import React from 'react'

const HomePage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <header>
                <div className="banner">
                    <img src="https://picsum.photos/1920/300" alt="" />
                </div>
            </header>
            <main style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flex: 1,


            }}>

                <div style={{
                    flex: 1, display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: '20px',
                }}>
                    <div className="left-column" style={{
                        height: '100%',
                        padding: '20px'
                    }}>
                        <img src="https://picsum.photos/1920/300" alt="" height={250} width={500} />
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div className="right-column" style={{
                        height: '100%',
                        padding: '20px'
                    }}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsum ratione alias dicta voluptates aperiam nobis quae accusantium non cupiditate architecto recusandae officia molestias, laboriosam ducimus veritatis, ipsam deserunt. Aliquid!</p>
                    </div>
                </div>

            </main>
            <footer>
                <div className="banner">
                    <img src="https://picsum.photos/1920/100" alt="" />
                </div>
            </footer>
        </div>
    )
}

export default HomePage