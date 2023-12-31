import React from 'react'
import React_icon from '../Assets/react.svg'
import Github_icon from '../Assets/github.png'

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/adrianfurtado-dev" target='_blank' className='anchor_footer'>
                    <span className='no_mobile'>adrianfurtado-dev</span>
                    <img src={Github_icon} alt="Github Icon" id='github_icon' />
                </a>
            </div>
            <div>
                <a href="https://react.dev/" target='_blank' className='anchor_footer'>
                    <span className='no_mobile'>Development with </span>
                    <img src={React_icon} alt="React Icon" id='react_icon' />
                </a>
            </div>
        </footer>
    )
}

export default Footer