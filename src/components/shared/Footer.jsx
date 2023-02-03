import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="copyright">
                Built by Nora Camacho for © Academlo 2023
            </div>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/noraelisacamacho/">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/noracamacho">
                    <GitHubIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer