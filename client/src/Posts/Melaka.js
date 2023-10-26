import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostBlock1 from '../Components/PostBlock1'
import PostBlock2 from '../Components/PostBlock2'
import PostBlock3 from '../Components/PostBlock3'
import PostBlock4 from '../Components/PostBlock4'
import PostComments from '../Components/PostComments';
import './Post.css'

function Melaka() {

    return (
        <div>
            <Header />
            <h1 className="post-title">Melaka</h1>
            <PostBlock1
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat, eros nisl consectetur justo, id tempus nisl libero vel risus."
                imageOneSource="https://images.unsplash.com/photo-1571761348738-f448a9739ff5?auto=format&fit=crop&q=80&w=3072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Christ Church"
                imageTwoSource="https://plus.unsplash.com/premium_photo-1697729915378-e5315d540f6b?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Straits Mosque"
            />
            <PostBlock2
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1603164757185-7570698f7e5b?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Rickshaws"
                imageTwoSource="https://images.unsplash.com/photo-1534534560664-cd594477570f?auto=format&fit=crop&q=80&w=3435&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Local Performer"
            />
            <PostBlock3
                mainImageSource="https://images.unsplash.com/photo-1634409321503-908411336ba1?auto=format&fit=crop&q=80&w=3271&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                mainImageCaption="Jonker Street"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa. Mauris iaculis, libero et malesuada consequat."
                subImageOneSource="https://images.unsplash.com/photo-1597077193903-46f091428ac7?auto=format&fit=crop&q=80&w=3432&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageOneCaption="Malacca River"
                subImageTwoSource="https://images.unsplash.com/photo-1589733000502-225e3f26fb8f?auto=format&fit=crop&q=80&w=3348&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageTwoCaption="River Cruise"
                subImageThreeSource="https://images.unsplash.com/photo-1628429214751-2ead44a72f94?auto=format&fit=crop&q=80&w=3435&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subImageThreeCaption="Street Art"
            />
            <PostBlock4
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt vitae mi at tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna elit. In venenatis eros quis arcu consequat dapibus at sed augue. Quisque tristique aliquam nibh. Aliquam erat volutpat. Maecenas a accumsan velit. Proin vitae erat felis. Suspendisse in aliquam massa."
                imageOneSource="https://images.unsplash.com/photo-1629499647218-56201bd2c959?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageOneCaption="Buddhist Temple"
                imageTwoSource="https://images.unsplash.com/photo-1595143845956-d5c2db7bb35a?auto=format&fit=crop&q=80&w=2912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageTwoCaption="Malacca City"
            />
            <PostComments />
            <Footer />
        </div>
    )
}

export default Melaka