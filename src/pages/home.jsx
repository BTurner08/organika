import "./home.css";
import { Link } from "react-router-dom";
import YouTubeVideo from '../components/video';
function Home(){
    return(
        <div className="home">
            <div className="banner">
            <img src="/imgs/Home.png" />
            <div className="text-overlay">
                
                <b><h4>Get 20% Off On Our Weekly Deals!</h4></b>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, expedita quas optio dolor reprehenderit, est a cupiditate tempora totam, inventore nostrum autem doloribus necessitatibus error accusantium dicta quasi iste neque libero esse officia perferendis nobis! Excepturi perspiciatis sit nihil odit ipsum, laborum odio? Ut enim necessitatibus nemo nam dolore quia dignissimos earum, repudiandae quas, nisi praesentium deleniti eveniet suscipit officia?</p>
                <button className="btn btn-dark">View our catalog</button>
            </div>
            </div>
            <div className="home-grid">
                <div className="grid one">
                    <img src="/imgs/grid 1.png" alt="" />
                    <div className="text-overlay"><h4><b><Link>Grocery Pickup & Deliver</Link></b></h4></div>
                </div>
                <div className="grid two">
                <img src="/imgs/grid 2.png" alt="" />
                <div className="text-overlay"><b><h4><Link>Order Catering</Link></h4></b></div>
                </div>
                <div className="grid three">
                <img src="/imgs/grid 3.png" alt="" />
                <div className="text-overlay"><b><h4><Link>Shipped to You</Link></h4></b></div>
                </div>
                <div className="grid four">
                <img src="/imgs/grid 4.png" alt="" />
                <div className="text-overlay"><b><h4><Link>Weekly Sales</Link></h4></b></div>
                </div>
            </div>
            <div className="video-info">
                    <h3>Sign up for our week long class with our world renowned chef!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure quis repellat dolores blanditiis fuga dolor neque, doloremque fugiat perferendis assumenda vero, ullam eos aspernatur modi accusamus iste optio laborum amet vitae quos eaque praesentium enim et? Magni ut illum nihil animi nam quam at cum possimus repellat deleniti optio fuga labore nobis ab, esse architecto magnam est voluptatibus fugit!</p>
            </div>
            <div className="video">
                
                <YouTubeVideo />
            </div>
        </div>
    )
}

export default Home;