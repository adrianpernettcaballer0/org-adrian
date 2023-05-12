import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/AdrianJP2000/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.facebook.com/AdrianJP2000/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/adrianpernett18/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Adiran Yiuliano Pernett Caballero</strong>
    </footer>
}

export default Footer