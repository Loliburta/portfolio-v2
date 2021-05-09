import { Project } from "./project/Project";

export const OtherProjects = () => {
  return (
    <div className="otherProjects">
      <div className="otherProjects__heading">Other Cool Projects</div>
      <div className="otherProjects__github">
        <a href="https://github.com/Loliburta" target="_blank" rel="noreferrer">
          view my github
        </a>
      </div>
      <div className="otherProjects__projects">
        {/* Project 1 */}

        <Project
          title="Spotify Player"
          description="An app with server authentication that connects to spotify API, you can search for any song or any artist's songs and play them"
          tech={["Typescript", "React", "Express", "Spotify API"]}
          code="https://github.com/Loliburta/Spotify_Player"
          id="op1"
        />
        {/* Project 2 */}

        <Project
          title="Discord Bot"
          description="A bot made for streamer so her viewers can gamble points on discord and withdraw them to twitch and claim special prizes"
          tech={["Javascript", "MongoDB", "Discord.js", "tmi.js"]}
          code="https://github.com/Loliburta/discord_bot"
          id="op2"
        />
        {/* Project 3 */}

        <Project
          title="Natural Hazards Map"
          description="A site integrated with google API where natural hazards observed by Nasa satelites are displayed"
          tech={["Typescript", "React", "Google API", "Nasa API"]}
          code="https://github.com/Loliburta/Natural_Hazards_Map"
          site="https://loliburta.github.io/Natural_Hazards_Map/"
          id="op3"
        />
        {/* Project 4 */}

        <Project
          title="Portfolio Site v1"
          description="My previous portfolio where I was just starting learning react and didn't know best practises yet"
          tech={["Javascript", "React", "Gsap 3", "Sass"]}
          code="https://github.com/Loliburta/Portfolio"
          site="https://loliburta.github.io/Portfolio"
          id="op4"
        />
        {/* Project 5 */}

        <Project
          title="Close Asteroids"
          description="Simple site that shows today's asteroids that can be observable from earth without very professional equipment"
          tech={["Javascript", "React", "Sass", "Nasa API"]}
          code="https://github.com/Loliburta/Asteroids_NASA_API"
          site="https://loliburta.github.io/Asteroids_NASA_API/"
          id="op5"
        />
        {/* Project 6 */}

        <Project
          title="Backup Allegro"
          description="A python script used for gathering all user's auction from allegro and saving them to local nosql database with images"
          tech={["Python", "Allegro API", "OOP"]}
          code="https://github.com/Loliburta/Backup_allegro_auctions"
          id="op6"
        />
      </div>
    </div>
  );
};
