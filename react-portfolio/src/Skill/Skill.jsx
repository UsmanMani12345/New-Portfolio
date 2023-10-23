import React from 'react';
import './Skill.css';
const Skill = () => {
  return (
    <>
    <div className="container-fluid skill mt-2" id='skill'>

        <div className='skill-content'>
            <h2>Skills</h2>
            <span>Who I am?</span>
        </div>

        <div className="skill-info container">
            <div className="info-para">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia velit fuga tempore sit excepturi autem perspiciatis eaque fugiat quis vitae illo maiores vel repellat rem, deserunt nemo laudantium nobis, dolorum ratione! Animi corrupti error temporibus rem, a enim perferendis, excepturi debitis placeat iusto commodi voluptatum ratione praesentium repellendus provident obcaecati?</p>
                <a href="">Read More</a>
            </div>

            <div className="skill-level">
                <div className="skill-heading">
                    <h3>HTML5</h3>
                </div>
                <div className="line">
                <div className="skill-line"></div>
                <div className="skill-line-back"></div>
                <div className="skill-percentage">
                    <p>90%</p>
                </div>
                </div>


                <div className="skill-heading">
                    <h3>CSS3</h3>
                </div>
                <div className="line">
                <div className="skill-line"></div>
                <div className="skill-line-back1"></div>
                <div className="skill-percentage">
                    <p>95%</p>
                </div>
                </div>


                <div className="skill-heading">
                    <h3>Javascript</h3>
                </div>
                <div className="line">
                <div className="skill-line"></div>
                <div className="skill-line-back2"></div>
                <div className="skill-percentage">
                    <p>80%</p>
                </div>
                </div>

                <div className="skill-heading">
                    <h3>React</h3>
                </div>
                <div className="line">
                <div className="skill-line"></div>
                <div className="skill-line-back3"></div>
                <div className="skill-percentage">
                    <p>80%</p>
                </div>
                </div>

                <div className="skill-heading">
                    <h3>Bootstarp5</h3>
                </div>
                <div className="line">
                <div className="skill-line"></div>
                <div className="skill-line-back4"></div>
                <div className="skill-percentage">
                    <p>95%</p>
                </div>
                </div>
            </div>
        </div>



    </div>
    
    </>
  )
}

export default Skill