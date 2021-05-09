import { Element } from "react-scroll";
import { ProjectNormal } from "./project/ProjectNormal";
import { ProjectFlipped } from "./project/ProjectFlipped";
import img1 from "../../images/movies.jpg";
import img2 from "../../images/weatherapp.jpg";
import img3 from "../../images/cointracker.jpg";
import { useWindowWidth } from "@react-hook/window-size";

export const Projects = () => {
  const screenWidth = useWindowWidth();
  return (
    <Element name="projects">
      <div className="projects">
        <div className="projects__heading">
          {screenWidth > 350 ? "Some Things I've Built" : "Things I've Built"}
        </div>
        <ul className="projects__list">
          <ProjectNormal
            title="Movies Search"
            description="A site where you can check out any movie, display it's rating cast and
          overview. Sort by most popular, top rated and see the upcoming movies."
            img={img1}
            tech={["React", "Typescript", "TheMovieDB API", "Lodash"]}
            code="https://github.com/Loliburta/recruitment_movies_site"
            site="https://loliburta.github.io/recruitment_movies_site/"
            id="p1"
          />
          <ProjectFlipped
            title="Weather App"
            description="A nicer look at today's weather and forecast for the next few days
          with several animations and great looking backgrounds. Check out the
          weather of any place on earth using your native language."
            img={img2}
            tech={["React", "Sass", "Gsap 3", "OpenWeatherMap API"]}
            code="https://github.com/Loliburta/weather_app_v2"
            site="https://loliburta.github.io/weather_app_v2/"
            id="p2"
          />
          <ProjectNormal
            title="Crypto Price Tracker"
            description="A web app created for tracking daily and weekly changes of any
          cryptocurrencies, you can search for your favorite crypto or scroll
          over the list."
            img={img3}
            tech={["React", "Typescript", "Sass", "CoinGecko API"]}
            code="https://github.com/Loliburta/crypto_price_tracker"
            site="https://loliburta.github.io/crypto_price_tracker/"
            id="p3"
          />
        </ul>
      </div>
    </Element>
  );
};
