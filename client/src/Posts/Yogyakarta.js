import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostBlock1 from '../Components/PostBlock1'
import PostBlock2 from '../Components/PostBlock2'
import PostBlock3 from '../Components/PostBlock3'
import PostBlock4 from '../Components/PostBlock4'
import PostComments from '../Components/PostComments';
import './Post.css'

function Yogyakarta() {

    return (
        <div>
            <Header />
            <h1 className="post-title">Yogyakarta</h1>
            <PostBlock1
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat, eros nisl consectetur justo, id tempus nisl libero vel risus."
                imageOneSource="https://images.unsplash.com/photo-1624936436147-88492b507bc3?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="City"
                imageTwoSource="https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?auto=format&fit=crop&q=80&w=3272&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="City"
            />
            <PostBlock2
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1612127342760-222e72aca87b?auto=format&fit=crop&q=80&w=3269&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Borobudur"
                imageTwoSource="https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?auto=format&fit=crop&q=80&w=3431&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Borobudur"
            />
            <PostBlock3
                mainImageSource="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&q=80&w=3412&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                mainImageCaption="Hindhu Temple"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat."
                subImageOneSource="https://images.unsplash.com/photo-1552035191-f10bd9fbf35e?auto=format&fit=crop&q=80&w=2992&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageOneCaption="City"
                subImageTwoSource="https://images.unsplash.com/photo-1578055648339-b67df3c862bc?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageTwoCaption="City"
                subImageThreeSource="https://images.unsplash.com/photo-1580883688613-b2c0f57a1f89?auto=format&fit=crop&q=80&w=3182&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageThreeCaption="Mountain"
            />
            <PostBlock4
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1626921998854-b80339ba8002?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Temple"
                imageTwoSource="https://images.unsplash.com/photo-1631942713837-7c2190e1ba23?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Van"
            />
            <PostComments />
            <Footer />
        </div>
    )
}

export default Yogyakarta