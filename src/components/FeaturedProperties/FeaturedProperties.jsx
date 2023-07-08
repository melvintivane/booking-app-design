import React from 'react'
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperty">
		<div className="featuredPropertyItem">
			<img
			src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
			alt=""
			className="featuredPropertyImg"
			/>
			<span className="featuredPropertyName">Aparthotel Stare Miasto</span>
			<span className="featuredPropertyCity">Madrid</span>
			<span className="featuredPropertyPrice">Starting from $120</span>
			<div className="featuredPropertyRating">
				<button>8.9</button>
				<span>Excellent</span>
			</div>
		</div>
		<div className="featuredPropertyItem">
			<img
			src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
			alt=""
			className="featuredPropertyImg"
			/>
			<span className="featuredPropertyName">Comfort Suites Airport</span>
			<span className="featuredPropertyCity">Austin</span>
			<span className="featuredPropertyPrice">Starting from $140</span>
			<div className="featuredPropertyRating">
				<button>9.3</button>
				<span>Exceptional</span>
			</div>
		</div>
		<div className="featuredPropertyItem">
			<img
			src="https://images.pexels.com/photos/11448500/pexels-photo-11448500.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
			alt=""
			className="featuredPropertyImg"
			/>
			<span className="featuredPropertyName">Four Seasons Hotel</span>
			<span className="featuredPropertyCity">Lisbon</span>
			<span className="featuredPropertyPrice">Starting from $99</span>
			<div className="featuredPropertyRating">
				<button>8.8</button>
				<span>Excellent</span>
			</div>
		</div>
		<div className="featuredPropertyItem">
			<img
			src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
			alt=""
			className="featuredPropertyImg"
			/>
			<span className="featuredPropertyName">Hilton Garden Inn</span>
			<span className="featuredPropertyCity">Berlin</span>
			<span className="featuredPropertyPrice">Starting from $105</span>
			<div className="featuredPropertyRating">
				<button>8.9</button>
				<span>Excellent</span>
			</div>
		</div>
    </div>
  );
};

export default FeaturedProperties;