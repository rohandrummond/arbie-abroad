import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostBlock1 from '../Components/PostBlock1'
import PostBlock2 from '../Components/PostBlock2'
import PostBlock3 from '../Components/PostBlock3'
import PostBlock4 from '../Components/PostBlock4'
import PostComments from '../Components/PostComments';
import './Post.css'

function Singapore() {

    return (
        <div>
            <Header />
            <h1 className="post-title">Singapore</h1>
            <PostBlock1
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat, eros nisl consectetur justo, id tempus nisl libero vel risus."
                imageOneSource="https://images.unsplash.com/photo-1493966936727-e9e3da7326ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3348&q=80"
                imageOneCaption="Chinatown"
                imageTwoSource="https://images.unsplash.com/photo-1648366310267-dd4156bc7735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                imageTwoCaption="Little India"
            />
            <PostBlock2
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1584198414538-f469f6fad430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3326&q=80"
                imageOneCaption="Newtown Food Centre"
                imageTwoSource="https://images.unsplash.com/photo-1581601442673-c3370bb99d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3200&q=80"
                imageTwoCaption="Hainanese Chicken"
            />
            <PostBlock3
                mainImageSource="https://images.unsplash.com/photo-1505817368554-2165b1e42f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3368&q=80"
                mainImageCaption="Chinatown Food Complex"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat."
                subImageOneSource="https://images.unsplash.com/photo-1527406619566-0159590b8540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                subImageOneCaption="Lassi"
                subImageTwoSource="https://images.unsplash.com/photo-1643268972535-a2b100ff3632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                subImageTwoCaption="Masala Dosa"
                subImageThreeSource="https://images.unsplash.com/photo-1552912470-ee2e96439539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2542&q=80"
                subImageThreeCaption="Chinatown Vendor"
            />
            <PostBlock4
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1584198414538-f469f6fad430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3326&q=80"
                imageOneCaption="Newtown Food Centre"
                imageTwoSource="https://images.unsplash.com/photo-1581601442673-c3370bb99d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3200&q=80"
                imageTwoCaption="Hainanese Chicken"
            />
            <PostComments />
            <Footer />
        </div>
    )
}

export default Singapore