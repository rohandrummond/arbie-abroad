import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostBlock1 from '../Components/PostBlock1'
import PostBlock2 from '../Components/PostBlock2'
import PostBlock3 from '../Components/PostBlock3'
import PostBlock4 from '../Components/PostBlock4'
import PostComments from '../Components/PostComments';
import './Post.css'

function NorthSumatra() {

    return (
        <div>
            <Header />
            <h1 className="post-title">North Sumatra</h1>
            <PostBlock1
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat, eros nisl consectetur justo, id tempus nisl libero vel risus."
                imageOneSource="https://images.unsplash.com/photo-1591284915748-bc48608e894d?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Lake"
                imageTwoSource="https://images.unsplash.com/photo-1591285359917-a97cd96cd29c?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Waterfall"
            />
            <PostBlock2
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1556648011-e01aca870a81?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Forest"
                imageTwoSource="https://images.unsplash.com/photo-1592639298199-7b9d01c1cf29?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Lake"
            />
            <PostBlock3
                mainImageSource="https://images.unsplash.com/photo-1507390012655-7854c88c1d97?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bWF0cmF8ZW58MHx8MHx8fDA%3D"
                mainImageCaption="Orangutan"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat."
                subImageOneSource="https://images.unsplash.com/photo-1587822115637-a0a57680e0e7?auto=format&fit=crop&q=80&w=3314&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageOneCaption="Rice Field"
                subImageTwoSource="https://images.unsplash.com/photo-1626696445855-5f1f90db7ae8?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageTwoCaption="Waterfall"
                subImageThreeSource="https://plus.unsplash.com/premium_photo-1664302747350-054ff9d210f9?auto=format&fit=crop&q=80&w=3268&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageThreeCaption="Tiger"
            />
            <PostBlock4
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://plus.unsplash.com/premium_photo-1661836637560-f6d12331a844?auto=format&fit=crop&q=80&w=3450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Elephant"
                imageTwoSource="https://images.unsplash.com/photo-1519121117736-b5ed6db68125?auto=format&fit=crop&q=80&w=3348&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Medan"
            />
            <PostComments />
            <Footer />
        </div>
    )
}

export default NorthSumatra