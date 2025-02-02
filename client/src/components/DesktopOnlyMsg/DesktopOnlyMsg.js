import React from "react";

function DesktopOnlyMsg(props) {
    return (
        <div className='column centered ctr desktop-only-msg-ctr'>
            <h1 className='small-hd'>Sorry about that</h1>
            <p className='body-txt desktop-only-msg'>The {props.page} page is not available on our Mobile or Tablet site. Please use Desktop or Laptop (1024px and above) to access this page.</p>          <a href='/'>
            <div className='flex row centered btn'>
                <span>Back to home</span>
            </div>
            </a>
        </div>
    )
}

export default DesktopOnlyMsg