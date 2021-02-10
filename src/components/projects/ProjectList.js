import React from 'react';
import { connect } from 'react-redux'; 
import ProjectSummary from './ProjectSummary';

const mapStateToProps = (state) => ({
    projects: state.project.projects
})

const ProjectList = ({projects}) => {
    return ( 
        <div className="project-list section">
            {projects && projects.map(project => (
                <ProjectSummary key={project.id} project={project} />
            ))}
        </div>
     );
}
 
export default connect(mapStateToProps)(ProjectList);