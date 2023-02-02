import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/noraelisacamacho/">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/noracamacho">
                    <GitHubIcon />
                </a>
            </div>
            <div className="copyright">
                Created by Nora Camacho for © Academlo 2023
            </div>
        </footer>
    );
}

export default Footer