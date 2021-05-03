export const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__heading"> About Me</div>
      <div className="aboutMe__description">
        Welcome and thank you for checking out my site! My name is Mateusz, I
        enjoy creating new things on the web and tackling difficult problems.
        <p>
          My jurney with programming started in 2019 when I watched my brother
          programming and thought it was so cool that I should try it. So I
          tried and put my first steps in python alghoritms and basic scripting
          and then expanded to building websites using html css js which
          progressed to typescript with react and became my main point of
          interest
        </p>
        <p>Here are few technologies I've been working with recently:</p>
      </div>
      <ul className="aboutMe__skillsUl">
        <li>Javascript (ES6+)</li>
        <li>Typescript</li>
        <li>Git</li>
        <li>React</li>
        <li>SCSS</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
};
