import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostBlock1 from '../Components/PostBlock1'
import PostBlock2 from '../Components/PostBlock2'
import PostBlock3 from '../Components/PostBlock3'
import PostBlock4 from '../Components/PostBlock4'
import PostComments from '../Components/PostComments';
import './Post.css'

function TamanNegara() {

    return (
        <div>
            <Header />
            <h1 className="post-title">Taman Negara</h1>
            <PostBlock1
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat, eros nisl consectetur justo, id tempus nisl libero vel risus."
                imageOneSource="https://images.unsplash.com/photo-1646513378626-23493fccf7c9?auto=format&fit=crop&q=80&w=3297&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Forest River"
                imageTwoSource="https://images.unsplash.com/photo-1633683935952-ad5b2d927a31?auto=format&fit=crop&q=80&w=3271&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Local Boat"
            />
            <PostBlock2
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1544821387-09378bd68fcb?auto=format&fit=crop&q=80&w=3298&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Monkey"
                imageTwoSource="https://images.unsplash.com/photo-1668317404800-83435f3fd311?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Stray Cat"
            />
            <PostBlock3
                mainImageSource="https://images.unsplash.com/photo-1697565633018-ce9237695cd2?auto=format&fit=crop&q=80&w=3271&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                mainImageCaption="Floating Restaurants"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat."
                subImageOneSource="https://images.unsplash.com/photo-1505818952829-a9b39501ae29?auto=format&fit=crop&q=80&w=3271&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageOneCaption="Local Children"
                subImageTwoSource="https://images.unsplash.com/photo-1686467947403-d41e536e3d40?auto=format&fit=crop&q=80&w=3433&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageTwoCaption="Waterfall"
                subImageThreeSource="https://images.unsplash.com/photo-1530078528719-f452c8d18ea2?auto=format&fit=crop&q=80&w=3273&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageThreeCaption="Monkey"
            />
            <PostBlock4
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1654427029925-e35be9b04165?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Waterfall"
                imageTwoSource="https://images.unsplash.com/photo-1564403732613-35f883b0409a?auto=format&fit=crop&q=80&w=2860&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Canopy Walkway"
            />
            <PostComments />
            <Footer />
        </div>
    )
}

export default TamanNegara