import React from "react";

function Nav1(){
    return(
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: '#f0f0f0', padding: '10px', width: '100%' }}>
            <style>
                {`
                    @keyframes slide {
                        from { transform: translateX(100%); }
                        to { transform: translateX(-100%); }
                    }
                `}
            </style>
            <h1 style={{ 
                animation: 'slide 55s linear infinite',
                display: 'inline-block',
                fontSize: "20px",
                margin: 0
            }}>
               Welcome to KCEE Clothing — your go-to destination for trendy, affordable, and high-quality outfits. We bring you styles that fit your vibe and elevate your everyday look. &nbsp;&nbsp;&nbsp; Welcome to KCEE Clothing — your go-to destination for trendy, affordable, and high-quality outfits. We bring you styles that fit your vibe and elevate your everyday look.
            </h1>
        </div>

    )
}

export default Nav1